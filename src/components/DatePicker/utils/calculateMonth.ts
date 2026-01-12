export function orderWeek(startOfTheWeek: number): number[] {
	const week = [0, 1, 2, 3, 4, 5, 6];
	const weekSlice = week.splice(startOfTheWeek);
	return [...weekSlice, ...week];
}

export function calculateMonth(
	month: number,
	year: number,
	startOfTheWeek = 0
) {
	const firstDateOfMonth = new Date(year, month, 1);
	const firstDay = firstDateOfMonth.getDay();

	const weeks: (Date | null)[][] = [[]];

	let currentWeek = weeks[0];
	let currentDate = firstDateOfMonth;

	const orderedWeek = orderWeek(startOfTheWeek);
	const firstMonthDateInWeek = orderedWeek.indexOf(firstDay);
	for (let i = 0; i < firstMonthDateInWeek; i++) {
		currentWeek.push(null);
	}

	while (currentDate.getMonth() === month) {
		if (currentWeek.length === 7) {
			currentWeek = [];
			weeks.push(currentWeek);
		}
		currentWeek.push(currentDate);
		currentDate = new Date(year, month, currentDate.getDate() + 1);
	}

	while (currentWeek.length < 7) {
		currentWeek.push(null);
	}

	return weeks;
}
