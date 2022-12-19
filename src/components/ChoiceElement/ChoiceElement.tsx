import { cssClassNames } from "../../utils";
import { ErrorLegend } from "../ErrorLegend";

import type { ChoiceElementProps } from "./ChoiceElement.props";

import "./ChoiceElement.styles.scss";

const COMPONENT_NAME = "ChoiceElement";
const MAIN_COMPONENT_NAME = "ChoiceElement__Label";

const ChoiceElement = ({
	label,
	id,
	children,
	disabled,
	error,
	helpText,
	onMouseEnter,
	onMouseLeave,
}: ChoiceElementProps) => {
	const className = cssClassNames(
		MAIN_COMPONENT_NAME,
		disabled && "disabled"
	);

	const labelMarkup = label ? (
		<label
			className={className}
			htmlFor={id}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<span className={`${MAIN_COMPONENT_NAME}__Toggle`}>{children}</span>
			<span className={`${MAIN_COMPONENT_NAME}__LabelText`}>{label}</span>
		</label>
	) : null;

	const helpTextMarkup = helpText ? (
		<div className={`${COMPONENT_NAME}__HelpText`}>{helpText}</div>
	) : null;

	/* eslint-disable no-extra-parens */
	const errorMarkup =
		error && typeof error === "object" ? (
			<div className={`${COMPONENT_NAME}__Error`}>
				<ErrorLegend {...error} />
			</div>
		) : null;
	/* eslint-enable no-extra-parens */

	const captionMarkup =
		helpTextMarkup || errorMarkup ? (
			<div className={`${COMPONENT_NAME}__Caption`}>
				{errorMarkup}
				{helpTextMarkup}
			</div>
		) : null;

	return (
		<div className={COMPONENT_NAME}>
			{labelMarkup}
			{captionMarkup}
		</div>
	);
};

export default ChoiceElement;
