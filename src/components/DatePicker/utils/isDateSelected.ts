import type { DateRange } from "../DatePicker.props";
import { isSameDate } from "./compareDates";

export function isDateInRange(day: Date, range: DateRange) {
	if (!day) {
		return false;
	}
	const [start, end] = range;
	return Boolean(day > start && day < end);
}

export function isDateSelected(day: Date, selected: Date | DateRange) {
	if (!day) {
		return false;
	}
	if (selected instanceof Date) {
		return isSameDate(day, selected);
	}
}
