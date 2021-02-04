// @flow
import {TutanotaError} from "./TutanotaError"
import {assertMainOrNodeBoot} from "../Env"

//assertMainOrNodeBoot()

export class PermissionError extends TutanotaError {
	constructor(m: string) {
		super("PermissionError", m)
	}

}