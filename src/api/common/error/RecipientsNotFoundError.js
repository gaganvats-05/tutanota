// @flow
import {TutanotaError} from "./TutanotaError"
import {assertMainOrNodeBoot} from "../Env"

//assertMainOrNodeBoot()

export class RecipientsNotFoundError extends TutanotaError {
	constructor(m: string) {
		super("RecipientsNotFoundError", m)
	}

}