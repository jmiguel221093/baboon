import type { IconType } from "../../types";
import type { ErrorLegendProps } from "../ErrorLegend";

export interface Choice {
	/* Value of the choice */
	value: string;
	/* Label of the choice */
	label: string;
	/* Id of the choice */
	id?: string;
	/* Whether the choice is disabled */
	disabled?: boolean;
	/* Hint for help the user with the field */
	helperText?: string;
	/* Content to render with the choice*/
	renderContent?: (isSelected: boolean) => React.ReactNode | false;
}

export interface ChoiceListProps {
	/* Label  for the list of choices */
	title?: string;
	/* Choices to render */
	choices: Choice[];
	/* Selected choices values */
	selected: string[];
	/* Name of the field */
	name: string;
	/* Callback when a choice is selected */
	onChange: (selected: string[]) => void;
	/* Error message to display */
	error?: ErrorLegendProps | boolean;
	/* Allow to select multiple choices at once */
	multiple?: boolean;
	/* Whether the list is disabled */
	disabled?: boolean;
	/* Icon for checkbox when is checked */
	checkboxCheckIcon?: IconType;
}
