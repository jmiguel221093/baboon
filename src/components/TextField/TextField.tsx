import { useRef, useState, createElement, useEffect } from "react";
import { cssClassNames } from "../../utils";
import { getButton } from "../Button";
import { LabelledField } from "../LabelledField";
import { Spinner } from "../Spinner";

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
	onChange,
	action,
	label,
	autoComplete,
	autoFocus,
	error,
	helpText,
	id,
	inputMode,
	maxLength,
	max,
	min,
	minLength,
	name,
	pattern,
	step,
	multiline,
	prefix,
	suffix,
	secondaryAction,
	spellCheck,
	loading,
}: TextFieldProps) => {
	const [isFocused, setIsFocused] = useState<boolean>(Boolean(focused));

	const inputRef = useRef<HTMLInputElement>(null);
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	useEffect(() => {
		const input = multiline ? textareaRef.current : inputRef.current;
		if (!input || focused === undefined) {
			return;
		}
		if (focused) {
			input.focus();
		} else {
			input.blur();
		}
	}, [focused, multiline]);

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

	const handleClick = () => {
		const input = multiline ? textareaRef.current : inputRef.current;
		if (input) {
			input.focus();
		}
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (onChange) {
			onChange(event.currentTarget.value, id);
		}
	};

	const hasAction = Boolean(action);

	const prefixMarkup = prefix ? (
		<div className={`${COMPONENT_NAME}__Prefix`}>{prefix}</div>
	) : null;

	const suffixMarkup = suffix ? (
		<div className={`${COMPONENT_NAME}__Suffix`}>{suffix}</div>
	) : null;

	const actionButton =
		!loading && action ? (
			<div className={`${COMPONENT_NAME}__Action`}>
				{getButton({
					...action,
					children: undefined,
					size: "small",
					clean: true,
					onClick: action.onPress,
				})}
			</div>
		) : null;

	const spinnerMarkup = loading ? <Spinner size="2" /> : null;

	const className = cssClassNames(
		COMPONENT_NAME,
		disabled && "disabled",
		isFocused && "focused",
		hasAction && "hasAction",
		loading && "loading",
		error && "error"
	);

	const inputProps = {
		type,
		placeholder,
		value,
		disabled,
		readOnly,
		onFocus: handleFocus,
		onBlur: handleBlur,
		onChange: handleChange,
		onInput: handleChange,
		autoComplete,
		inputMode,
		maxLength,
		max,
		min,
		minLength,
		name,
		pattern,
		step,
		spellCheck,
		autoFocus,
	};

	const inputMarkup = (
		<div
			className={`${COMPONENT_NAME}__InputWrapper`}
			onClick={handleClick}
		>
			{prefixMarkup}
			{createElement(multiline ? "textarea" : "input", {
				...inputProps,
				ref: multiline ? textareaRef : inputRef,
				rows: multiline
					? typeof multiline === "number"
						? multiline
						: 1
					: undefined,
			})}
			{suffixMarkup}
			{actionButton}
			{spinnerMarkup}
		</div>
	);

	return (
		<LabelledField
			label={label}
			helpText={helpText}
			error={error}
			id={id}
			action={secondaryAction}
		>
			<div className={className}>{inputMarkup}</div>
		</LabelledField>
	);
};

export default TextField;
