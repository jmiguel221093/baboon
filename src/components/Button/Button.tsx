import { cssClassNames } from "../../utils";

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
	textAlign,
	fullWidth,
}: ButtonProps) => {
	const classNames = cssClassNames(
		COMPONENT_NAME,
		primary && "primary",
		disabled && "disabled",
		outline && "outline",
		clean && "clean",
		danger && "danger",
		link && "link"
	);
	return (
		<button id={id} className={classNames} disabled={disabled}>
			{children}
		</button>
	);
};

export default Button;
