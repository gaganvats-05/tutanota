// @flow
import {TutanotaError} from "./TutanotaError"
import {assertMainOrNodeBoot} from "../Env"

//assertMainOrNodeBoot()

export class OutOfSyncError extends TutanotaError {
	constructor() {
		super("OutOfSyncError", "")
	}

}