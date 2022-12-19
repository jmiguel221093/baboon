import { useRef, useState } from "react";
import { cssClassNames } from "../../utils";
import { ChoiceElement } from "../ChoiceElement";

import type { RadioButtonProps } from "./RadioButton.props";

import "./RadioButton.styles.scss";

const COMPONENT_NAME = "RadioButton";

const RadioButton = ({
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
}: RadioButtonProps) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [isHovered, setIsHovered] = useState(false);
	const className = cssClassNames(
		COMPONENT_NAME,
		isHovered && "hovered",
		error && "error",
		disabled && "disabled"
	);

	const handleChange = () => {
		if (!onChange) {
			return;
		}
		onChange(!checked, id || name);
	};

	const handleHover = () => {
		setIsHovered(!isHovered);
	};

	return (
		<ChoiceElement
			id={id || name}
			label={label}
			error={error}
			helpText={helpText}
			disabled={disabled}
			onMouseEnter={handleHover}
			onMouseLeave={handleHover}
		>
			<span className={className}>
				<input
					ref={inputRef}
					className={`${COMPONENT_NAME}__Input`}
					type="radio"
					id={id || name}
					name={name}
					value={value}
					checked={checked}
					disabled={disabled}
					onChange={handleChange}
					onBlur={onBlur}
					onFocus={onFocus}
				/>
				<span className={`${COMPONENT_NAME}__Indicator`} />
			</span>
		</ChoiceElement>
	);
};

export default RadioButton;
