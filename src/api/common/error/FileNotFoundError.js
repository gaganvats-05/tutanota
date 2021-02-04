//@flow
import {TutanotaError} from "./TutanotaError"
import {assertMainOrNodeBoot} from "../Env"

//assertMainOrNodeBoot()

export class FileNotFoundError extends TutanotaError {
	constructor(msg: string) {
		super("FileNotFoundError", msg)
	}
}
