import { cssClassNames } from "../../../../utils";
import { Button } from "../../../Button";
import { Text } from "../../../Text";
import { MONTHS } from "../../utils";
import type { DatePickerHeaderProps } from "./Header.props";

const COMPONENT_NAME = "DatePicker__Header";

const Header = ({
	month,
	year,
	onPreviousClick,
	onNextClick,
	previousIcon,
	nextIcon,
}: DatePickerHeaderProps) => {
	const className = cssClassNames(COMPONENT_NAME);

	const previousButtonMarkup = previousIcon && onPreviousClick && (
		<Button
			icon={previousIcon.icon}
			size="extra-small"
			onClick={onPreviousClick}
			clean
		/>
	);

	const nextButtonMarkup = nextIcon && onNextClick && (
		<Button
			icon={nextIcon.icon}
			size="extra-small"
			onClick={onNextClick}
			clean
		/>
	);

	const currentMonthLabel = MONTHS[month] ? (
		<div className={`${COMPONENT_NAME}__MonthLabel`}>
			<Text variant="label" element="span">
				{MONTHS[month]} {year}
			</Text>
		</div>
	) : null;

	return (
		<div className={className}>
			{previousButtonMarkup}
			{currentMonthLabel}
			{nextButtonMarkup}
		</div>
	);
};

export default Header;
