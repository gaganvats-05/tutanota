//@flow
import {assertMainOrNodeBoot, isApp, isDesktop, isTutanotaDomain} from "../api/common/Env"
import * as notificationOverlay from "../gui/base/NotificationOverlay"
import {lang} from "../misc/LanguageViewModel"
import {windowFacade} from "../misc/WindowFacade"
import {ButtonType} from "../gui/base/ButtonN"
import m from "mithril"
import {handleUncaughtError} from "../misc/ErrorHandler"
import {objToError} from "../api/common/utils/Utils";

assertMainOrNodeBoot()

function showUpdateOverlay(onUpdate: () => void) {

	const notificationMessage: Component = {
		view: () => {
			return m("span", [
				lang.get("updateFound_label"),
				" ",
				isTutanotaDomain()
					? m("a", {
						href: `https://github.com/tutao/tutanota/releases/`,
						target: "_blank"
					}, lang.get("releaseNotes_action"))
					: null
			])
		}
	}
	notificationOverlay.show(notificationMessage, {label: "postpone_action"}, [
		{
			label: "refresh_action",
			click: onUpdate,
			type: ButtonType.Primary
		}
	])
}

function showUpdateMessageIfNeeded(registration: ServiceWorkerRegistration) {
	const pending = registration.waiting || registration.installing
	if (pending && registration.active) {
		showUpdateOverlay(() => {
			// user has confirmed update so we have to notify the service worker to force update of version.
			console.log("registration.waiting: ", registration.waiting)
			registration.waiting && registration.waiting.postMessage("update")
		})
	}
}


export function init() {
	const serviceWorker = navigator.serviceWorker
	if (serviceWorker) {
		if (env.dist && !isApp() && !isDesktop()) {
			console.log("Registering ServiceWorker")
			let location = window.location.pathname.endsWith("/") || window.location.pathname.indexOf("contactform/") !== -1
				? "../sw.js"
				: "sw.js"
			serviceWorker.register(location)
			             .then((registration) => {
				             console.log("ServiceWorker has been installed")
				             showUpdateMessageIfNeeded(registration)
				             registration.addEventListener("updatefound", () => {
					             console.log("updatefound")
					             showUpdateMessageIfNeeded(registration)
				             })
				             const active = registration.active // Upon registration, check if we had an sw.
				             let refreshing = false // Prevent infinite reloading with devtools
				             serviceWorker.addEventListener("controllerchange", (e: Event) => {
					             console.log("controllerchange")
					             if (!active || refreshing) {
						             // If we didn't have an sw, there's no need to reload, it's "installation" and not "update"
						             console.log(`Skip refreshing: active: ${String(active)} refreshing: ${String(refreshing)}`)
						             return
					             }

					             windowFacade.windowCloseConfirmation = false
					             refreshing = true
					             windowFacade.reload({})
				             })

				             serviceWorker.addEventListener("message", (event: MessageEvent) => {
						             if (event.data == null || typeof event.data !== "object") {
							             console.error("Got strange message from sw", event.data)
							             return
						             }
						             if (event.data.type === "error") {
							             const unserializedError = objToError(event.data.value)
							             handleUncaughtError(unserializedError)
						             }
					             }
				             )
			             })
		}
	} else {
		console.log("ServiceWorker is not supported")
	}
}
