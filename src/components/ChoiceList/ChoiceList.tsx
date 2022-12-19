import { cssClassNames } from "../../utils";
import { Checkbox } from "../Checkbox";
import { ErrorLegend } from "../ErrorLegend";
import { RadioButton } from "../RadioButton";
import { Label } from "../Label";

import type { ChoiceListProps, Choice } from "./ChoiceList.props";

import "./ChoiceList.styles.scss";

const COMPONENT_NAME = "ChoiceList";

const ChoiceList = ({
	choices,
	name,
	onChange = noop,
	selected,
	disabled,
	error,
	multiple = false,
	title,
	checkboxCheckIcon,
}: ChoiceListProps) => {
	const className = cssClassNames(COMPONENT_NAME);

	if (!name) {
		console.error("ChoiceList: name prop is required");
	}

	const titleMarkup = title ? (
		<legend className={`${COMPONENT_NAME}__Title`}>
			<Label>{title}</Label>
		</legend>
	) : null;

	const choicesMarkup = choices.map((choice) => {
		const {
			value,
			label,
			disabled: choiceDisabled,
			helperText,
			id,
		} = choice;

		const ChoiceComponent = multiple ? Checkbox : RadioButton;
		const handleChange = (choice: Choice, checked: boolean) => {
			onChange(getSelectedValues(choice, checked, selected, multiple));
		};

		const isSelected = isChoiceSelected(choice, selected);

		const renderContent = choice.renderContent
			? choice.renderContent(isSelected)
			: null;

		const children = renderContent ? (
			<div className={`${COMPONENT_NAME}__ChoiceContent`}>
				{renderContent}
			</div>
		) : null;

		return (
			<li key={value}>
				<ChoiceComponent
					name={name}
					value={value}
					label={label}
					disabled={choiceDisabled || disabled}
					helpText={helperText}
					id={id || value}
					onChange={() => handleChange(choice, !isSelected)}
					checkIcon={checkboxCheckIcon}
					checked={isSelected}
					error={!!error}
				/>
				{children}
			</li>
		);
	});

	const errorMarkup =
		error && typeof error === "object" ? (
			<div className={`${COMPONENT_NAME}__ChoiceError`}>
				<ErrorLegend message={error.message} icon={error.icon} />
			</div>
		) : null;

	return (
		<fieldset className={className}>
			{titleMarkup}
			<ul className={`${COMPONENT_NAME}__Choices`}>{choicesMarkup}</ul>
			{errorMarkup}
		</fieldset>
	);
};

/* eslint-disable-next-line */
const noop = () => {};

const getSelectedValues = (
	{ value }: Choice,
	checked: boolean,
	selected: string[],
	multiple: boolean
) => {
	const selectedValues = multiple ? selected : [];
	if (checked) {
		return multiple ? [...selectedValues, value] : [value];
	}
	return selectedValues.filter((selectedValue) => selectedValue !== value);
};

const isChoiceSelected = ({ value }: Choice, selected: string[]) => {
	return selected.includes(value);
};

export default ChoiceList;
