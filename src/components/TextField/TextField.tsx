import { cssClassNames } from "../../utils";

// import type { TextFieldProps } from "./TextField.props";

import "./TextField.styles.scss";

const COMPONENT_NAME = "TextField";

const TextField = () => {
	const className = cssClassNames(COMPONENT_NAME);
	return <input className={className} />;
};

export default TextField;
