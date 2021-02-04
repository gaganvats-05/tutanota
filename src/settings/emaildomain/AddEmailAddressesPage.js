//@flow
import {SelectMailAddressForm} from "../SelectMailAddressForm"
import {logins} from "../../api/main/LoginController"
import m from "mithril"
import {getAliasLineAttrs, updateNbrOfAliases} from "../EditAliasesFormN"
import type {AddDomainData} from "./AddDomainWizard"
import type {EntityEventsListener} from "../../api/main/EventController"
import {isUpdateForTypeRef} from "../../api/main/EventController"
import {load, loadAll} from "../../api/main/Entity"
import {GroupInfoTypeRef} from "../../api/entities/sys/GroupInfo"
import {OperationType} from "../../api/common/TutanotaConstants"
import {neverNull} from "../../api/common/utils/Utils"
import {Dialog} from "../../gui/base/Dialog"
import {locator} from "../../api/main/MainLocator"
import {CustomerTypeRef} from "../../api/entities/sys/Customer"
import {lang} from "../../misc/LanguageViewModel"
import {Icons} from "../../gui/base/icons/Icons"
import type {TableAttrs} from "../../gui/base/TableN"
import {ColumnWidth, TableN} from "../../gui/base/TableN"
import {theme} from "../../gui/theme"
import type {WizardPageAttrs, WizardPageN} from "../../gui/base/WizardDialogN"
import {emitWizardEvent, WizardEventType} from "../../gui/base/WizardDialogN"
import {assertMainOrNode} from "../../api/common/Env"
import {ButtonN, ButtonType} from "../../gui/base/ButtonN"
import {showProgressDialog} from "../../gui/base/ProgressDialog"
import {worker} from "../../api/main/WorkerClient"
import {InvalidDataError, LimitReachedError} from "../../api/common/error/RestError"
import {isSameId} from "../../api/common/utils/EntityUtils";

assertMainOrNode()

export class AddEmailAddressesPage implements WizardPageN<AddDomainData> {

	_entityEventListener: ?EntityEventsListener

	oncreate(vnode: Vnode<WizardPageAttrs<AddDomainData>>) {
		const wizardAttrs = vnode.attrs
		this._entityEventListener = (updates) => {
			return Promise.each(updates, update => {
				const {instanceListId, instanceId, operation} = update
				if (isUpdateForTypeRef(GroupInfoTypeRef, update) && operation === OperationType.UPDATE
					&& isSameId(logins.getUserController().userGroupInfo._id, [neverNull(instanceListId), instanceId])) {
					return load(GroupInfoTypeRef, [neverNull(instanceListId), instanceId]).then(groupInfo => {
						wizardAttrs.data.editAliasFormAttrs.userGroupInfo = groupInfo
						m.redraw()
					})
				}
			}).return()
		}
		locator.eventController.addEntityListener(this._entityEventListener)

		const addAliasButtonAttrs = {
			label: "addEmailAlias_label",
			icon: () => Icons.Checkmark,
			click: () => addAliasFromInput(wizardAttrs.data),
		}
		wizardAttrs.data.emailAliasInput = new SelectMailAddressForm([wizardAttrs.data.domain()], addAliasButtonAttrs)
		updateNbrOfAliases(wizardAttrs.data.editAliasFormAttrs)

	}

	onremove() {
		if (this._entityEventListener) {
			locator.eventController.removeEntityListener(this._entityEventListener)
		}
	}

	view(vnode: Vnode<WizardPageAttrs<AddDomainData>>): Children {
		const a = vnode.attrs
		const aliasesTableAttrs: TableAttrs = {
			columnWidths: [ColumnWidth.Largest],
			showActionButtonColumn: true,
			addButtonAttrs: null,
			lines: getAliasLineAttrs(a.data.editAliasFormAttrs).map((row) => {
				return {
					actionButtonAttrs: row.actionButtonAttrs,
					cells: () => [{main: row.cells[0], info: [row.cells[1]]}]
				}
			}),
		}

		const addUsersDialogAttrs = {
			title: lang.get("addUsers_title"),
			child: {
				view: () => {
					return [
						m("p", lang.get("userManagementRedirect_msg")),
					]
				}
			},
			okAction: (confirmationDialog) => {
				m.route.set("/settings/users")
				confirmationDialog.close()
				emitWizardEvent(vnode.dom, WizardEventType.CLOSEDIALOG)
			}
		}

		return m("", [
			m("h4.mt-l.text-center", lang.get("addCustomDomainAddresses_title")),
			m(".mt.mb", lang.get("addCustomDomainAdresses_msg")),
			m(".h4.mt", lang.get("emailAlias_label")),
			m(".mt", lang.get("addCustomDomainAliases_msg")),
			m(a.data.emailAliasInput),
			m(".small.left", (a.data.editAliasFormAttrs.aliasCount.availableToCreate === 0) ?
				lang.get("adminMaxNbrOfAliasesReached_msg")
				: lang.get('mailAddressAliasesMaxNbr_label', {'{1}': a.data.editAliasFormAttrs.aliasCount.availableToCreate})),
			logins.getUserController().userGroupInfo.mailAddressAliases.length ? m(TableN, aliasesTableAttrs) : null,
			m(".h4.mt", lang.get("bookingItemUsers_label")),
			m(".mt", [
				lang.get("addCustomDomainUsers_msg"),
				" ",
				m("span.nav-button", {
						style: {
							color: theme.content_accent
						},
						onclick: (e) => {
							Dialog.showActionDialog(addUsersDialogAttrs)
						}
					},
					lang.get("adminUserList_action"))
			]),
			m(".flex-center.full-width.pt-l.mb-l", m("", {style: {width: "260px"}}, m(ButtonN, {
				type: ButtonType.Login,
				label: "next_action",
				click: () => emitWizardEvent(vnode.dom, WizardEventType.SHOWNEXTPAGE)
			})))
		])
	}
}

//Try to add an alias from input field and return true if it succeeded
function addAliasFromInput(data: AddDomainData): Promise<boolean> {
	const error = data.emailAliasInput.getErrorMessageId()
	if (error) {
		return Dialog.error(error).then(() => false)
	} else {
		return showProgressDialog("pleaseWait_msg", worker.addMailAlias(data.editAliasFormAttrs.userGroupInfo.group, data.emailAliasInput.getCleanMailAddress()))
			.then(() => {
				data.emailAliasInput._username("")
				return true
			})
			.catch(InvalidDataError, () => Dialog.error("mailAddressNA_msg").then(() => false))
			.catch(LimitReachedError, () => Dialog.error("adminMaxNbrOfAliasesReached_msg").then(() => false))
			.finally((result) => updateNbrOfAliases(data.editAliasFormAttrs).then(() => result))
	}
}

export class AddEmailAddressesPageAttrs implements WizardPageAttrs<AddDomainData> {

	data: AddDomainData

	constructor(domainData: AddDomainData) {
		this.data = domainData
	}

	headerTitle(): string {
		return lang.get("domainSetup_title")
	}

	nextAction(showErrorDialog: boolean): Promise<boolean> {
		//We try to add an alias from the input field, if it is not empty and error dialogs are allowed
		if (showErrorDialog && this.data.emailAliasInput.getErrorMessageId() !== "mailAddressNeutral_msg") {
			//We already showed one error dialog if failing to add an alias from the input field.
			//The user has to clean the input field up before proceeding to the next page (even if there is already an alias)
			//We are done if we succeeded to add the alias
			return addAliasFromInput(this.data)
		}
		//Otherwise we check that there is either an alias or a user (or an alias for some other user) defined for the custom domain regardless of activation status
		const checkMailAddresses = Promise.resolve().then(() => {
			const hasAliases = logins.getUserController().userGroupInfo.mailAddressAliases.some((alias) => alias.mailAddress.endsWith(`@${this.data.domain()}`))
			if (hasAliases) {
				return true
			} else {

				return load(CustomerTypeRef, neverNull(logins.getUserController().user.customer))
					.then((customer) => loadAll(GroupInfoTypeRef, customer.userGroups))
					.then((allUserGroupInfos) => {
						return allUserGroupInfos.some(u => neverNull(u.mailAddress).endsWith("@" + this.data.domain())
							|| u.mailAddressAliases.some((a) => neverNull(a.mailAddress).endsWith("@" + this.data.domain())));
					})
			}
		})
		return showProgressDialog("pleaseWait_msg", checkMailAddresses).then((nextAllowed) => {
			if (showErrorDialog && !nextAllowed) Dialog.error("enforceAliasSetup_msg")
			return nextAllowed
		})
	}

	isSkipAvailable(): boolean {return true}

	isEnabled(): boolean {return true}
}

