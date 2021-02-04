// @flow
import {TutanotaError} from "./TutanotaError"
import {assertMainOrNodeBoot} from "../Env"

//assertMainOrNodeBoot()

export class SessionKeyNotFoundError extends TutanotaError {

	constructor(message: string) {
		super("SessionKeyNotFoundError", message)
	}

}