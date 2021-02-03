//@flow

import m from "mithril"
import stream from "mithril/stream/stream.js"
import {HtmlEditor} from "../gui/base/HtmlEditor"
import {neverNull} from "../api/common/utils/Utils"
import type {TextFieldAttrs} from "../gui/base/TextFieldN"
import {TextFieldN} from "../gui/base/TextFieldN"
import type {EntityUpdateData} from "../api/main/EventController"
import {ButtonN, ButtonType} from "../gui/base/ButtonN"
import type {ButtonAttrs} from "../gui/base/ButtonN"
import {Icons} from "../gui/base/icons/Icons"
import {getLanguageCode} from "./TemplateEditorModel"
import {showTemplateEditor} from "./TemplateEditor"
import {Dialog} from "../gui/base/Dialog"
import {lang, languageByCode} from "../misc/LanguageViewModel"
import type {EmailTemplate} from "../api/entities/tutanota/EmailTemplate"
import {locator} from "../api/main/MainLocator"
import {EntityClient} from "../api/common/EntityClient"
import {TemplateGroupRootTypeRef} from "../api/entities/tutanota/TemplateGroupRoot"

export class TemplateDetailsViewer {
	view: Function
	_templateContentEditor: HtmlEditor

	constructor(template: EmailTemplate, entityClient: EntityClient) {
		const tagAttrs: TextFieldAttrs = {
			label: "tag_label",
			value: stream(neverNull(template.tag)),
			disabled: true
		}

		const EditButtonAttrs: ButtonAttrs = {
			label: "edit_action",
			icon: () => Icons.Edit,
			type: ButtonType.Action,
			click: () => {
				console.log("edit")
				locator.entityClient.load(TemplateGroupRootTypeRef, neverNull(template._ownerGroup)).then(groupRoot => {
					showTemplateEditor(template, groupRoot)
				})
			}
		}

		const RemoveButtonAttrs: ButtonAttrs = {
			label: "remove_action",
			icon: () => Icons.Trash,
			type: ButtonType.Action,
			click: () => {
				console.log("remove")
				Dialog.confirm("deleteTemplate_msg").then((confirmed) => {
					if (confirmed) {
						const promise = entityClient.erase(template)
						promise.then(() => console.log("removed"))
					}
				})
			}
		}

		this.view = () => {
			return m("#user-viewer.fill-absolute.scroll.plr-l.pb-floating", [
				m(".flex.mt-l.center-vertically", [
					m(".h4.text-ellipsis", template.title),
					m(".flex.flex-grow.justify-end", [
						m(ButtonN, EditButtonAttrs),
						m(ButtonN, RemoveButtonAttrs),
					])
				]),
				m("", [
					m(TextFieldN, tagAttrs),

					template.contents.map(emailTemplateContent => {
						const language = languageByCode[getLanguageCode(emailTemplateContent)]
						return m(".flex.flex-column", [
							m(".h4.mt-l", lang.get(language.textId)),
							m(".editor-border", m.trust(emailTemplateContent.text))
						])
					})
				])
			])
		}
	}

	entityEventsReceived(updates: $ReadOnlyArray<EntityUpdateData>): Promise<void> {
		return Promise.each(updates, update => {
			let p = Promise.resolve()
			return p.then(() => {
			})
		}).then(() => m.redraw())
	}
}