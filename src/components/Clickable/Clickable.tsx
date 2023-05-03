import { cssClassNames } from "../../utils";
import { UnstyledButton } from "../UnstyledButton";

import type { ClickableProps } from "./Clickable.props";

import "./Clickable.styles.scss";

const COMPONENT_NAME = "Clickable";

const Clickable = ({
	children,
	className: componentClassName,
	onClick,
	disabled,
	...rest
}: ClickableProps) => {
	const className = cssClassNames(COMPONENT_NAME, disabled && "disabled");
	return (
		<UnstyledButton
			className={`${className}${
				componentClassName ? ` ${componentClassName}` : ""
			}`}
			onClick={onClick}
			{...rest}
		>
			{children}
		</UnstyledButton>
	);
};

export default Clickable;
