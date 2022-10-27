import type { ReactNode } from "react";

import { Spinner } from "../Spinner";
import { Icon } from "../Icon";
import { cssClassNames } from "../../utils";

import type { ActionProps } from "../../types";
import type { SpinnerSizeType } from "../Spinner";
import type { IconSourceType } from "../Icon";

import type { ButtonProps } from "./Button.props";

import "./Button.styles.scss";

const COMPONENT_NAME = "Button";

const spinnerSizes: { [k: string]: SpinnerSizeType } = {
	small: "1",
	medium: "2",
	large: "4",
};

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
	size = "medium",
	textAlign = "center",
	icon,
	iconPosition = "left",
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
		textAlign && `text-align-${textAlign}`,
		iconPosition && `icon-position-${iconPosition}`,
		!children && icon && "icon-only"
	);

	const actionProps: ActionProps & { type: "submit" | "button" } = {
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

	const iconSource = isValidIcon(icon) ? <Icon source={icon} /> : icon;

	const iconMarkup = icon ? (
		<span className={`${COMPONENT_NAME}__Icon`}>
			{iconSource as ReactNode}
		</span>
	) : null;

	const spinnerMarkup = loading ? (
		<span className="Button__Spinner">
			<Spinner size={spinnerSizes[size]} />
		</span>
	) : null;

	return (
		<button className={className} {...actionProps}>
			{iconMarkup}
			{childrenMarkup}
			{spinnerMarkup}
		</button>
	);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isValidIcon = (icon: any): icon is IconSourceType =>
	typeof icon === "string" || typeof icon === "function";

export default Button;
