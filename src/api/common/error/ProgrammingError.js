//@flow
import {TutanotaError} from "./TutanotaError"
import {assertMainOrNodeBoot} from "../Env"

//assertMainOrNodeBoot()

export class ProgrammingError extends TutanotaError {
	constructor(m: string) {
		super("ProgrammingError", m)
	}
}