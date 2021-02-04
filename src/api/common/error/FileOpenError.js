//@flow
import {TutanotaError} from "./TutanotaError"
import {assertMainOrNodeBoot} from "../Env"

//assertMainOrNodeBoot()

export class FileOpenError extends TutanotaError {
	constructor(message: string) {
		super("FileOpenError", message)
	}
}