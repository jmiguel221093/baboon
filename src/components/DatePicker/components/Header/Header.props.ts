import type { IconProp } from "../../../../types";

export interface DatePickerHeaderProps {
	month: number;
	year: number;
	onPreviousClick?: () => void;
	onNextClick?: () => void;
	previousIcon?: IconProp;
	nextIcon?: IconProp;
}
