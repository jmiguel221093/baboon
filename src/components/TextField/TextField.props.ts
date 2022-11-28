import type { ActionType, ErrorType, IconType } from "../../types";
import type { LabelProps } from "../Label";

export type TextFieldTypeProp =
	| "text"
	| "number"
	| "password"
	| "email"
	| "tel"
	| "url"
	| "search"
	| "date"
	| "datetime-local"
	| "month"
	| "time"
	| "week";

export type InputModeTypeProp =
	| "text"
	| "none"
	| "tel"
	| "url"
	| "email"
	| "numeric"
	| "decimal"
	| "search";

type ErrorLegendType = {
	message?: ErrorType;
	icon?: IconType;
};

export interface TextFieldProps {
	/** The input type */
	type?: TextFieldTypeProp;
	/** The keyboard to use in mobile devices */
	inputMode?: InputModeTypeProp;
	/** Hint text to display */
	placeholder?: string;
	/** The initial value */
	value?: string;
	/** Disable the input */
	disabled?: boolean;
	/** The edition is disabled */
	readOnly?: boolean;
	/** Name of the input */
	name?: string;
	/** ID for the input */
	id?: string;
	/** The limit increment value in numeric type and data-time type */
	step?: number;
	/** Limit the maximum value */
	max?: number | string;
	/** Limit the minimum value */
	min?: number | string;
	/** The maximum number of characters */
	maxLength?: number;
	/** The minimum number of characters */
	minLength?: number;
	/** The pattern to validate the input */
	pattern?: string;
	/** Callback triggered when values changes */
	onChange?: (value: string, id?: string) => void;
	/** Callback triggered when input is focused */
	onFocus?: (event?: React.FocusEvent) => void;
	/** Callback triggered when input is blurred */
	onBlur?: (event?: React.FocusEvent) => void;
	/** Automatically focused */
	autoFocus?: boolean;
	/** Set the input focused */
	focused?: boolean;
	/** Set input as text area */
	multiline?: boolean | number;
	/** Text to display before the value */
	prefix?: React.ReactNode;
	/** Text to display after the value */
	suffix?: React.ReactNode;
	/** Text to help the user with the input */
	helpText?: string;
	/** Label of the input */
	label?: string;
	/** Action which will work as a label action */
	secondaryAction?: LabelProps["action"];
	/** Error displayed under the input */
	error?: ErrorLegendType;
	/** Automatic browser completion, off will not let the completion */
	autoComplete?: "on" | "off";
	/** Value has to be spelling checked */
	spellCheck?: boolean;
	/** Add an action inside the TextField */
	action?: ActionType;
	/** Sets loading state */
	loading?: boolean;
}
