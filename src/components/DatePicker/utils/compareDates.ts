export function isSameDate(date1: Date, date2: Date) {
	return (
		date1.getDate() === date2.getDate() &&
		date1.getMonth() === date2.getMonth() &&
		date1.getFullYear() === date2.getFullYear()
	);
}

export function isDateBefore(date1: Date, date2: Date) {
	return date1.getTime() < date2.getTime();
}

export function isDateAfter(date1: Date, date2: Date) {
	return date1.getTime() > date2.getTime();
}
