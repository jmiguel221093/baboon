import { cssClassNames } from "../../utils";
import type { ActionProps } from "../../types";

import type { ButtonProps } from "./Button.props";

import "./Button.styles.scss";

const COMPONENT_NAME = "Button";

/* eslint-disable */
const Button = ({
	id,
	children,
	disabled,
	outline,
	clean,
	primary,
	danger,
	hovered,
	pressed,
	focused,
	loading,
	submit,
	onClick,
	onFocus,
	onBlur,
	onKeyPress,
	onKeyDown,
	onKeyUp,
	onMouseEnter,
	onMouseLeave,
	onTouchStart,
	onTouchEnd,
	link,
	icon,
	iconPosition,
	size,
	textAlign = "center",
	fullWidth,
}: ButtonProps) => {
	const className = cssClassNames(
		COMPONENT_NAME,
		primary && "primary",
		disabled && "disabled",
		outline && "outline",
		clean && "clean",
		danger && "danger",
		link && "link",
		size,
		hovered && "hovered",
		pressed && "pressed",
		focused && "focused",
		fullWidth && "fullWidth",
		loading && "loading",
		textAlign && `text-align-${textAlign}`
	);

	const actionProps: ActionProps = {
		id,
		type: submit ? "submit" : "button",
		disabled,
		onClick,
		onFocus,
		onBlur,
		onKeyDown,
		onKeyPress,
		onKeyUp,
		onMouseEnter,
		onMouseLeave,
		onTouchEnd,
		onTouchStart,
	};

	const childrenMarkup = children ? (
		<span className={`${COMPONENT_NAME}__TextContent`}>{children}</span>
	) : null;

	return (
		<button className={className} {...actionProps}>
			{childrenMarkup}
		</button>
	);
};

export default Button;
