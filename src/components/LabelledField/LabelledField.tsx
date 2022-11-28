import { cssClassNames } from "../../utils";
import { Label } from "../Label";
import { ErrorLegend } from "../ErrorLegend";

import type { LabelledFieldProps } from "./LabelledField.props";

import "./LabelledField.styles.scss";

const COMPONENT_NAME = "LabelledField";

const LabelledField = ({
	children,
	label,
	action,
	error,
	helpText,
	id,
}: LabelledFieldProps) => {
	const className = cssClassNames(COMPONENT_NAME);

	const labelMarkup = label ? (
		<Label id={id} action={action}>
			{label}
		</Label>
	) : null;

	const errorMarkup = error ? (
		<div className={`${COMPONENT_NAME}__ErrorWrapper`}>
			<ErrorLegend message={error.message} icon={error.icon} />
		</div>
	) : null;

	const helpTextMarkup = helpText ? (
		<div className={`${COMPONENT_NAME}__HelpTextWrapper`}>{helpText}</div>
	) : null;

	return (
		<div className={className}>
			{labelMarkup}
			{children}
			{errorMarkup}
			{helpTextMarkup}
		</div>
	);
};

export default LabelledField;
