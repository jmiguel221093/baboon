import type { DateRange } from "../../DatePicker.props";

export interface DatePickerCalendarProps {
	selected?: Date | DateRange;
	month: number;
	year: number;
	disableBeforeDate?: Date;
	disableAfterDate?: Date;
	disableDates?: Date[];
	startOfTheWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6;
	allowRangeSelection?: boolean;
	onChange?: (date: Date | DateRange) => void;
	showToday?: boolean;
}
