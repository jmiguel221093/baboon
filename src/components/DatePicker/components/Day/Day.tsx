import { memo } from "react";
import type { DatePickerDayProps } from "./Day.props";
import { cssClassNames } from "../../../../utils";

const COMPONENT_NAME = "DatePicker__Day";

const Day = memo(function Day({
	day,
	disabled,
	today,
	onClick,
	selected,
	inRange,
	firstInRange,
	lastInRange,
	outOfCurrentMonth,
}: DatePickerDayProps) {
	if (!day) {
		return <td />;
	}

	const handleClick = () => {
		if (!disabled && onClick) {
			onClick(day);
		}
	};

	const className = cssClassNames(
		COMPONENT_NAME,
		disabled && "disabled",
		today && "isToday",
		selected && "selected",
		inRange && "inRange",
		firstInRange && "firstInRange",
		lastInRange && "lastInRange",
		outOfCurrentMonth && "outOfCurrentMonth"
	);
	const date = day.getDate();
	return (
		<td className={className}>
			<button disabled={disabled} onClick={handleClick}>
				{date}
			</button>
		</td>
	);
});

export default Day;
