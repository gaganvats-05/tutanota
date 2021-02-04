// @flow
import {TutanotaError} from "./TutanotaError"
import {assertMainOrNodeBoot} from "../Env"

//assertMainOrNodeBoot()

export class SseError extends TutanotaError {
	constructor(m: string) {
		super("SseError", m)
	}

}