import type { IconProp } from "../../types";

export type DateRange = [Date, Date];

export interface DatePickerProps {
	/** Unique identifier for DatePicker */
	id?: string;
	/** Date or DateRange to be selected */
	selected?: Date | DateRange;
	/**
	 * Indicates which month dates have to be showed
	 * @default current month
	 */
	month?: number;
	/**
	 * Indicates which year dates have to be showed
	 * @default current year
	 */
	year?: number;
	/**
	 * Indicates which day of the week is the first day
	 * @default 0 (Sunday)
	 */
	startOfTheWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
	/** Callback triggered when date or date range is selected */
	onChange?: (date: Date | DateRange) => void;
	/** Callback triggered when month or year is changed */
	onMonthChange?: (month: number, year: number) => void;
	/** Lets to select a date range */
	allowRangeSelection?: boolean;
	/** Disables dates before specific date */
	disableBeforeDate?: Date;
	/** Disables dates after specific date */
	disableAfterDate?: Date;
	/** Disables specific dates */
	disableDates?: Date[];
	/** Icon for previous month button */
	previousIcon?: IconProp;
	/** Icon for next month button */
	nextIcon?: IconProp;
	/**
	 * If the today day has to be highlighted in the calendar
	 * @default true
	 */
	showToday?: boolean;
}
