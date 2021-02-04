//@flow
import m from "mithril"
import {px} from "../size"
import {assertMainOrNodeBoot} from "../../api/common/Env"
import {AriaLandmarks, landmarkAttrs} from "../AriaUtils"

assertMainOrNodeBoot()

export class InfoView {
	title: lazy<string>;
	content: lazy<Children>;

	constructor(title: lazy<string>, content: lazy<Children>) {
		this.title = title
		this.content = content
	}

	view(): Children {
		return m(".main-view.flex.items-center.justify-center.mlr" + landmarkAttrs(AriaLandmarks.Main), {
			style: {
				'max-height': px(450),
			}
		}, m(".message.center.max-width-l", [
			m("h2", this.title()),
			this.content()
		]))
	}

}
