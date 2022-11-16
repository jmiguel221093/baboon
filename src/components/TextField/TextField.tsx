import { useRef, useState } from "react";
import { cssClassNames } from "../../utils";

import type { TextFieldProps } from "./TextField.props";

import "./TextField.styles.scss";

const COMPONENT_NAME = "TextField";

const TextField = ({
	type,
	placeholder,
	value,
	disabled,
	readOnly,
	focused,
	onFocus,
	onBlur,
}: TextFieldProps) => {
	const [isFocused, setIsFocused] = useState<boolean>(Boolean(focused));

	const inputRef = useRef<HTMLInputElement>(null);

	const handleFocus = (
		event:
			| React.FocusEvent<HTMLElement>
			| React.MouseEvent<HTMLInputElement>
	) => {
		setIsFocused(true);
		if (onFocus) {
			onFocus(event as React.FocusEvent<HTMLInputElement>);
		}
	};

	const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
		setIsFocused(false);
		if (onBlur) {
			onBlur(event);
		}
	};

	const className = cssClassNames(
		COMPONENT_NAME,
		disabled && "disabled",
		isFocused && "focused"
	);

	const inputMarkup = (
		<input
			ref={inputRef}
			type={type}
			placeholder={placeholder}
			value={value}
			disabled={disabled}
			readOnly={readOnly}
			onFocus={handleFocus}
			onBlur={handleBlur}
		/>
	);

	return <div className={className}>{inputMarkup}</div>;
};

export default TextField;
