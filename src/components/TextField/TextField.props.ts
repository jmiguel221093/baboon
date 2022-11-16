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
}
