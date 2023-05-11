import { useCallback, useMemo } from "react";
import { cssClassNames } from "../../../../utils";
import type { DatePickerCalendarProps } from "./Calendar.props";
import { Day } from "../Day";
import type { DateRange } from "../../DatePicker.props";
import {
	WEEKDAYS,
	calculateMonth,
	getDateRange,
	isDateAfter,
	isDateBefore,
	isDateInRange,
	isDateSelected,
	isSameDate,
	orderWeek,
} from "../../utils";

const COMPONENT_NAME = "DatePicker__Calendar";

function isStartDate(day: Date, range: DateRange) {
	if (!day) {
		return false;
	}
	const [start] = range;
	return start && isSameDate(day, start);
}

function isEndDate(day: Date, range: DateRange) {
	if (!day) {
		return false;
	}
	const [, end] = range;
	return end && isSameDate(day, end);
}

const Calendar = ({
	month,
	year,
	allowRangeSelection,
	disableAfterDate,
	disableBeforeDate,
	disableDates,
	selected,
	onChange,
	startOfTheWeek,
	showToday,
}: DatePickerCalendarProps) => {
	const className = cssClassNames(COMPONENT_NAME);

	const handleDateClick = useCallback(
		(selectedDate: Date) => {
			if (onChange) {
				if (!allowRangeSelection) {
					onChange(selectedDate);
					return;
				}
				onChange(getDateRange(selected as DateRange, selectedDate));
			}
		},
		[allowRangeSelection, onChange, selected]
	);

	const weeks = useMemo(
		() => calculateMonth(month, year, startOfTheWeek),
		[month, year, startOfTheWeek]
	);

	const renderDay = (day: Date | null, index: number) => {
		if (!day) {
			return <Day key={index} />;
		}
		const isOutOfCurrentMonth = day.getMonth() !== month;
		const isToday = showToday && isSameDate(day, new Date());
		const isSelected = selected && isDateSelected(day, selected);
		const isInRange =
			allowRangeSelection &&
			selected &&
			isDateInRange(day, selected as DateRange);
		const isFirstInRange =
			allowRangeSelection &&
			selected &&
			isStartDate(day, selected as DateRange);
		const isLastInRange =
			allowRangeSelection &&
			selected &&
			isEndDate(day, selected as DateRange);

		const isDisabled =
			(disableDates &&
				disableDates.some((date) => isSameDate(date, day))) ||
			(disableBeforeDate && isDateBefore(day, disableBeforeDate)) ||
			(disableAfterDate && isDateAfter(day, disableAfterDate));
		return (
			<Day
				key={index}
				day={day}
				outOfCurrentMonth={isOutOfCurrentMonth}
				today={isToday}
				onClick={handleDateClick}
				selected={isSelected}
				inRange={isInRange}
				firstInRange={isFirstInRange}
				lastInRange={isLastInRange}
				disabled={isDisabled}
			/>
		);
	};

	const renderWeek = weeks.map((week, index) => (
		<tr key={index}>{week.map(renderDay)}</tr>
	));

	const weekdaysMarkup = (
		<thead>
			<tr>
				{orderWeek(startOfTheWeek).map((weekday) => (
					<th key={weekday}>{WEEKDAYS[weekday].substring(0, 2)}</th>
				))}
			</tr>
		</thead>
	);

	const weeksMarkup = <tbody>{renderWeek}</tbody>;

	return (
		<div className={className}>
			<table>
				{weekdaysMarkup}
				{weeksMarkup}
			</table>
		</div>
	);
};

export default Calendar;
