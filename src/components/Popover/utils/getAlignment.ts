type AlignType = "left" | "center" | "right";

const getAlignment = (
	popoverWidth: number,
	triggerRect: DOMRect,
	align: AlignType
) => {
	if (!triggerRect) {
		return;
	}
	if (align === "left") {
		return triggerRect.left;
	}
	if (align === "center") {
		return triggerRect.left + triggerRect.width / 2 - popoverWidth / 2;
	}
	if (align === "right") {
		return triggerRect.left + triggerRect.width - popoverWidth;
	}
};

export default getAlignment;
