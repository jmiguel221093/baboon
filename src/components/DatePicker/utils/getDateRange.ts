import type { DateRange } from "../DatePicker.props";
import { isDateAfter, isDateBefore } from "./compareDates";

function getDateRange(dateRange: DateRange, selectedDate: Date): DateRange {
	if (!dateRange) {
		return [selectedDate, selectedDate];
	}
	const [start, end] = dateRange as DateRange;
	if (end && (isDateAfter(start, end) || isDateBefore(start, end))) {
		return [selectedDate, selectedDate];
	}
	if (start) {
		if (isDateBefore(selectedDate, start)) {
			return [selectedDate, start];
		}
		return [start, selectedDate];
	}
	if (end) {
		if (isDateBefore(selectedDate, end)) {
			return [selectedDate, end];
		}
		return [start || end, selectedDate];
	}
	return [selectedDate, selectedDate];
}

export default getDateRange;
