import { cssClassNames } from "../../utils";

import type { UnstyledButtonProps } from "./UnstyledButton.props";

import "./UnstyledButton.styles.scss";

const COMPONENT_NAME = "UnstyledButton";

const UnstyledButton = ({
	id,
	className,
	children,
	onClick,
	disabled,
	focused,
	loading,
	onBlur,
	onFocus,
	onKeyDown,
	onKeyUp,
	onKeyPress,
	onMouseEnter,
	onMouseLeave,
	onTouchEnd,
	onTouchStart,
	hovered,
	pressed,
	submit,
	...rest
}: UnstyledButtonProps) => {
	const cssClassName = cssClassNames(
		COMPONENT_NAME,
		focused && "focused",
		disabled && "disabled",
		loading && "loading",
		hovered && "hovered",
		pressed && "pressed"
	);

	const eventProps = {
		onBlur,
		onFocus,
		onKeyDown,
		onKeyUp,
		onKeyPress,
		onMouseEnter,
		onMouseLeave,
		onTouchEnd,
		onTouchStart,
		onClick,
	};

	return (
		<button
			id={id}
			className={[cssClassName, className].join(" ")}
			disabled={disabled}
			type={submit ? "submit" : "button"}
			{...eventProps}
			{...rest}
		>
			{children}
		</button>
	);
};

export default UnstyledButton;
