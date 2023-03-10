import { useRef } from "react";
import { cssClassNames } from "../../utils";
import { ChoiceElement } from "../ChoiceElement";

import type { SwitchProps } from "./Switch.props";

import "./Switch.styles.scss";

const COMPONENT_NAME = "Switch";

const Switch = ({
	label,
	checked,
	onChange,
	disabled,
	error,
	helpText,
	id,
	name,
	onBlur,
	onFocus,
	value,
}: SwitchProps) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const className = cssClassNames(
		COMPONENT_NAME,
		checked && "checked",
		error && "error",
		disabled && "disabled"
	);

	const handleChange = () => {
		if (!onChange || !inputRef.current || disabled) {
			return;
		}
		onChange(!checked, id || name);
		inputRef.current.focus();
	};

	return (
		<ChoiceElement
			id={id || name}
			label={label}
			error={error}
			helpText={helpText}
			disabled={disabled}
			fancy
		>
			<span className={className}>
				<input
					ref={inputRef}
					type="checkbox"
					id={id || name}
					name={name}
					value={value}
					checked={checked}
					onChange={handleChange}
					onBlur={onBlur}
					onFocus={onFocus}
					disabled={disabled}
				/>
			</span>
		</ChoiceElement>
	);
};

export default Switch;
