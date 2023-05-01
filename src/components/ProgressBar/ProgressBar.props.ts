import type { ColorType } from "../../types";

export type ProgressBarSizeType =
	| "micro"
	| "small"
	| "medium"
	| "large"
	| "extra-large";
export type ProgressColorType = Exclude<ColorType, "on-dark">;

export type ProgressBarValueType = {
	value: number;
	color: ProgressColorType;
};

export interface ProgressBarProps {
	/** The progress of the bar */
	progress?: number | ProgressBarValueType[];
	/**
	 * The color of the progress bar
	 * @default "primary"
	 **/
	color?: ProgressColorType;
	/** The label of the progress bar */
	label?: string;
	/** Indicates if it has to show the progress */
	showProgress?: boolean;
	/** Additional content for the progress bar */
	metadata?: React.ReactNode;
	/**
	 * The size of the progress bar
	 * @default "small"
	 **/
	size?: ProgressBarSizeType;
	/** The max value of the progress bar */
	max?: number;
	/** Decimals to show when progress is float number and is showed */
	fixFloatProgressTo?: number;
}
