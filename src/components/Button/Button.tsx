import { cssClassNames } from "../../utils";

import type { ButtonProps } from "./Button.props";

import "./Button.styles.scss";

const COMPONENT_NAME = "Button";

const Button = ({ children }: ButtonProps) => {
	const classNames = cssClassNames(COMPONENT_NAME);
	return <button className={classNames}>{children}</button>;
};

export default Button;
