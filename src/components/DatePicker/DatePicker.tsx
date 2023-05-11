import { useCallback } from "react";
import { cssClassNames } from "../../utils";

import type { DatePickerProps } from "./DatePicker.props";

import "./DatePicker.styles.scss";
import { Header, Calendar } from "./components";
import {
	getNextMonthToDisplay,
	getNextYearToDisplay,
	getPreviousMonthToDisplay,
	getPreviousYearToDisplay,
} from "./utils";

const COMPONENT_NAME = "DatePicker";

const DatePicker = ({
	id,
	month = new Date().getMonth(),
	year = new Date().getFullYear(),
	selected,
	startOfTheWeek = 0,
	onChange,
	onMonthChange,
	allowRangeSelection,
	disableAfterDate,
	disableBeforeDate,
	disableDates,
	nextIcon,
	previousIcon,
	showToday = true,
}: DatePickerProps) => {
	const className = cssClassNames(COMPONENT_NAME);

	const handleMonthChange = useCallback(
		(month: number, year: number) => {
			if (!onMonthChange) {
				return;
			}
			onMonthChange(month, year);
		},
		[onMonthChange]
	);

	const previousMonthToDisplay = getPreviousMonthToDisplay(month);
	const previousYearToDisplay = getPreviousYearToDisplay(month, year);
	const nextMonthToDisplay = getNextMonthToDisplay(month);
	const nextYearToDisplay = getNextYearToDisplay(month, year);
	const headerMarkup = (
		<Header
			month={month}
			year={year}
			previousIcon={previousIcon}
			nextIcon={nextIcon}
			onPreviousClick={() =>
				handleMonthChange(previousMonthToDisplay, previousYearToDisplay)
			}
			onNextClick={() =>
				handleMonthChange(nextMonthToDisplay, nextYearToDisplay)
			}
		/>
	);

	const monthMarkup = (
		<div className={`${COMPONENT_NAME}__MonthWrapper`}>
			<Calendar
				month={month}
				year={year}
				startOfTheWeek={startOfTheWeek}
				showToday={showToday}
				selected={selected}
				onChange={onChange}
				allowRangeSelection={allowRangeSelection}
				disableDates={disableDates}
				disableBeforeDate={disableBeforeDate}
				disableAfterDate={disableAfterDate}
			/>
		</div>
	);

	return (
		<div id={id} className={className}>
			{headerMarkup}
			{monthMarkup}
		</div>
	);
};

export default DatePicker;
