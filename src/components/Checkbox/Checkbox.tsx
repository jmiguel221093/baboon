import { useRef, useState } from "react";
import { cssClassNames } from "../../utils";
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

	const className = cssClassNames(
		COMPONENT_NAME,
		isHovered && "hovered",
		(isChecked || isIndeterminate) && "checked",
		disabled && "disabled",
		error && "error"
	);

	const handleClick = () => {
		if (!onChange || !inputRef.current || disabled) {
			return;
		}
		onChange(inputRef.current.checked, id);
		inputRef.current.focus();
	};

	const handleHover = () => {
		setIsHovered(!isHovered);
	};

	const checkboxIcon = isIndeterminate ? indeterminateIcon : checkIcon;

	return (
		<ChoiceElement
			id={id}
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
					id={id}
					className={`${COMPONENT_NAME}__Input`}
					name={name}
					type="checkbox"
					value={value}
					checked={isChecked}
					disabled={disabled}
					onClick={handleClick}
					onFocus={onFocus}
					onBlur={onBlur}
					onChange={noOperation}
				/>
				<span className={`${COMPONENT_NAME}__CheckIcon`}>
					<Icon source={checkboxIcon} />
				</span>
			</span>
		</ChoiceElement>
	);
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
function noOperation() {}

export default Checkbox;
