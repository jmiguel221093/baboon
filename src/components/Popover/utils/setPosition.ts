import type { RefObject } from "react";
import getAlignment from "./getAlignment";

type AlignType = "left" | "center" | "right";

const setPosition = (
	trigger: RefObject<HTMLElement>,
	popoverStyle: React.CSSProperties,
	popover: RefObject<HTMLDivElement>,
	fixed: boolean,
	align: AlignType
) => {
	const popoverStyleObj = { ...popoverStyle };
	if (trigger.current && popover.current) {
		const triggerRect =
			trigger.current?.children[0].getBoundingClientRect();
		const popoverWidth = popover.current.offsetWidth;
		const popoverHeight = popover.current.offsetHeight;
		const windowOffset = !fixed ? window.scrollY || window.pageYOffset : 0;
		popoverStyleObj.top = triggerRect.bottom + windowOffset;
		popoverStyleObj.left = getAlignment(popoverWidth, triggerRect, align);
		if (window.innerHeight < triggerRect.bottom + popoverHeight) {
			popoverStyleObj.top =
				triggerRect.top - popoverHeight + windowOffset;
		}
	}
	return popoverStyleObj;
};

export default setPosition;
