// @flow
import {DbError} from "./DbError"
import {assertMainOrNodeBoot} from "../Env"

//assertMainOrNodeBoot()

export class IndexingNotSupportedError extends DbError {
	constructor(message: string, error: ?Error) {
		super(message, error)
		this.name = "IndexingNotSupportedError"
	}
}