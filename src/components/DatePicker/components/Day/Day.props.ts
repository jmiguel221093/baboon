export interface DatePickerDayProps {
	day?: Date;
	disabled?: boolean;
	today?: boolean;
	onClick?: (date: Date) => void;
	selected?: boolean;
	inRange?: boolean;
	firstInRange?: boolean;
	lastInRange?: boolean;
	outOfCurrentMonth?: boolean;
}
