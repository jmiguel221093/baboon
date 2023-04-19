import { useRef, useState } from "react";
import { cssClassNames, generateUUID } from "../../utils";
import { ChoiceElement } from "../ChoiceElement";
import { Icon } from "../Icon";

import type { CheckboxProps } from "./Checkbox.props";

import "./Checkbox.styles.scss";

const COMPONENT_NAME = "Checkbox";

const Checkbox = ({
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
	checkIcon,
	indeterminateIcon,
}: CheckboxProps) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [isHovered, setIsHovered] = useState(false);
	const isIndeterminate = checked === "indeterminate";
	const isChecked = !isIndeterminate && Boolean(checked);

	const checkboxId = generateUUID();

	const className = cssClassNames(
		COMPONENT_NAME,
		isHovered && "hovered",
		(isChecked || isIndeterminate) && "checked",
		disabled && "disabled",
		error && "error"
	);

	const handleChange = () => {
		if (!onChange || !inputRef.current || disabled) {
			return;
		}
		onChange(!checked, id || name || null);
		inputRef.current.focus();
	};

	const handleHover = () => {
		setIsHovered(!isHovered);
	};

	const checkboxIcon = isIndeterminate ? indeterminateIcon : checkIcon;

	return (
		<ChoiceElement
			id={id || checkboxId}
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
					id={id || checkboxId}
					className={`${COMPONENT_NAME}__Input`}
					name={name}
					type="checkbox"
					value={value}
					checked={isChecked}
					disabled={disabled}
					onBlur={onBlur}
					onFocus={onFocus}
					onChange={handleChange}
				/>
				{checkboxIcon && (
					<span className={`${COMPONENT_NAME}__CheckIcon`}>
						<Icon source={checkboxIcon} />
					</span>
				)}
			</span>
		</ChoiceElement>
	);
};

export default Checkbox;
