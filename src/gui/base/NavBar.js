// @flow
import m from "mithril"
import {windowFacade} from "../../misc/WindowFacade"
import {assertMainOrNodeBoot} from "../../api/common/Env"
import type {NavButtonAttrs} from "./NavButtonN"
import {NavButtonColors, NavButtonN} from "./NavButtonN"
import {AriaLandmarks, landmarkAttrs} from "../AriaUtils"


assertMainOrNodeBoot()

export type Attrs = void

export class NavBar implements MComponent<Attrs> {
	view({children}: Vnode<Attrs>): Children {
		return m("nav.nav-bar.flex-end" + landmarkAttrs(AriaLandmarks.Navigation, "top"),
			children.map((child) => m(".plr-nav-button", child)),
		);
	}
}
