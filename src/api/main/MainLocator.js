//@flow
import type {WorkerClient} from "./WorkerClient"
import {EventController} from "./EventController"
import {EntropyCollector} from "./EntropyCollector"
import {SearchModel} from "../../search/SearchModel"
import {MailModel} from "../../mail/MailModel"
import {assertMainOrNode} from "../Env"
import {notifications} from "../../gui/Notifications"
import {logins} from "./LoginController"
import {ContactModelImpl} from "../../contacts/ContactModel"
import type {ContactModel} from "../../contacts/ContactModel"
import {EntityClient} from "../common/EntityClient"
import type {CalendarModel} from "../../calendar/CalendarModel"
import {CalendarModelImpl} from "../../calendar/CalendarModel"
import {defer} from "../common/utils/Utils"
import {ProgressTracker} from "./ProgressTracker"

assertMainOrNode()

export type MainLocatorType = {|
	eventController: EventController,
	entropyCollector: EntropyCollector,
	search: SearchModel,
	mailModel: MailModel;
	calendarModel: CalendarModel;
	init: (WorkerClient) => void;
	contactModel: ContactModel;
	entityClient: EntityClient;
	progressTracker: ProgressTracker;
	initializedWorker: Promise<WorkerClient>
|}

const workerDeferred = defer<WorkerClient>()

export const locator: MainLocatorType = ({
	initializedWorker: workerDeferred.promise,
	init(worker: WorkerClient) {
		this.eventController = new EventController(logins)
		this.entropyCollector = new EntropyCollector(worker)
		this.progressTracker = new ProgressTracker()
		this.search = new SearchModel(worker)
		this.entityClient = new EntityClient(worker)
		this.mailModel = new MailModel(notifications, this.eventController, worker, this.entityClient)
		this.calendarModel = new CalendarModelImpl(notifications, this.eventController, worker, logins, this.progressTracker,
			this.entityClient, this.mailModel)
		this.contactModel = new ContactModelImpl(worker, this.entityClient, logins)
		workerDeferred.resolve(worker)
	}
}: any)

if (typeof window !== "undefined") {
	window.tutao.locator = locator
}

// It is critical to accept new locator here because locator is used in a lot of places and calculating all the dependencies is very
// slow during HMR.
// HMR is not meant for changing models so if there is a big change then you are better off reloading but this will work with simple
// method implementation swapping.
const hot = typeof module !== "undefined" && module.hot
if (hot) {
	hot.accept(() => {
		// This should be there already
		const worker = workerDeferred.promise.then((worker) => {
			// Import this module again and init the locator. If someone just imports it they will get a new one
			const newLocator = require(module.id).locator
			newLocator.init(worker)

			// This will patch old instances to use new classes, this is when instances are already injected
			for (const key of Object.getOwnPropertyNames(newLocator)) {
				Object.setPrototypeOf(locator[key], Object.getPrototypeOf(newLocator[key]))
			}
		})

	})
}