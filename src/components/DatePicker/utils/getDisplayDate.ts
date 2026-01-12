export function getNextMonthToDisplay(month: number) {
	return month === 11 ? 0 : month + 1;
}

export function getNextYearToDisplay(month: number, year: number) {
	return month === 11 ? year + 1 : year;
}

export function getPreviousMonthToDisplay(month: number) {
	return month === 0 ? 11 : month - 1;
}

export function getPreviousYearToDisplay(month: number, year: number) {
	return month === 0 ? year - 1 : year;
}
