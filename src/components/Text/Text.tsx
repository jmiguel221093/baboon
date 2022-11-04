import { cssClassNames } from "../../utils";
import type { TextProps } from "./Text.props";

import "./Text.styles.scss";

const COMPONENT_NAME = "Text";

const Text = ({
	children,
	element: Element = "p",
	color,
	fontWeight,
	hidden = false,
	id,
	textAlign,
	truncated = false,
	variant,
}: TextProps) => {
	const className = cssClassNames(
		COMPONENT_NAME,
		color,
		fontWeight,
		hidden && "hidden",
		textAlign && `align-${textAlign}`,
		truncated && "truncated",
		variant
	);
	return (
		<Element id={id} className={className}>
			{children}
		</Element>
	);
};

export default Text;
