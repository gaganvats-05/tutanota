//@flow
import {TutanotaError} from "./TutanotaError"
import {assertMainOrNodeBoot} from "../Env"

//assertMainOrNodeBoot()

export class MembershipRemovedError extends TutanotaError {
	constructor(message: string) {
		super("MembershipRemovedError", message)
	}
}