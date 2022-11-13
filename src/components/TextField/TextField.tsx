import { cssClassNames } from "../../utils";

import type { TextFieldProps } from "./TextField.props";

import "./TextField.styles.scss";

const COMPONENT_NAME = "TextField";

const TextField = ({ type }: TextFieldProps) => {
	const className = cssClassNames(COMPONENT_NAME);
	return <input type={type} className={className} />;
};
// comment
export default TextField;
