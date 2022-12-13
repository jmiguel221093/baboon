import type { ErrorLegendProps } from "../ErrorLegend";

export interface RadioButtonProps {
	/** The label text for the radio button */
	label: string;
	/** Sets the radio button state as checked or indeterminate */
	checked?: boolean;
	/** Help text to display a hint text for the field */
	helpText?: string;
	/** Disables de field */
	disabled?: boolean;
	/** Unique identifier for the field */
	id: string;
	/** Name for the input */
	name?: string;
	/** The value of the field */
	value?: string;
	/** The error message to display */
	error?: ErrorLegendProps;
	/** Callback when radio button changes */
	onChange?: (checked: boolean, id: string) => void;
	/** Callback when radio button is focused */
	onFocus?: () => void;
	/** Callback when focus on radio button is removed */
	onBlur?: () => void;
}
