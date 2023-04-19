import type { IconType } from "../../types";
import type { ErrorLegendProps } from "../ErrorLegend";

export interface CheckboxProps {
	/** The label text for the checkbox */
	label?: string;
	/** Sets the checkbox state as checked or indeterminate */
	checked?: boolean | "indeterminate";
	/** Help text to display a hint text for the field */
	helpText?: string;
	/** Disables de field */
	disabled?: boolean;
	/** Unique identifier for the field */
	id?: string;
	/** Name for the input */
	name?: string;
	/** The value of the field */
	value?: string;
	/** The error message to display */
	error?: ErrorLegendProps;
	/** The icon to display when the field is checked */
	checkIcon?: IconType;
	/** The icon to display when the field is in indeterminate status */
	indeterminateIcon?: IconType;
	/** Callback when checkbox changes */
	onChange?: (checked: boolean, id: string | null) => void;
	/** Callback when checkbox is focused */
	onFocus?: () => void;
	/** Callback when focus on checkbox is removed */
	onBlur?: () => void;
}
