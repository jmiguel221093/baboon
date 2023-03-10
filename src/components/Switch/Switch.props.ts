import type { ErrorLegendProps } from "../ErrorLegend";

export interface SwitchProps {
	/** The label text for the switch */
	label: string;
	/** Sets the switch state as checked */
	checked?: boolean;
	/** Help text to display a hint text for the field */
	helpText?: string;
	/** Disables de field */
	disabled?: boolean;
	/** Unique identifier for the field */
	id?: string;
	/** Name for the input */
	name: string;
	/** The value of the field */
	value?: string;
	/** The error message to display */
	error?: ErrorLegendProps;
	/** Callback when switch changes */
	onChange?: (checked: boolean, id: string) => void;
	/** Callback when switch is focused */
	onFocus?: () => void;
	/** Callback when focus on switch is removed */
	onBlur?: () => void;
}
