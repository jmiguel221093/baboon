import React from "react";
import type { ComponentMeta } from "@storybook/react";

import { DatePicker } from "../src/components";
import type { DateRange } from "../src/components";
import type { DatePickerProps } from "../src/components";

export default {
	title: "AllComponents/DatePicker",
	component: DatePicker,
} as ComponentMeta<typeof DatePicker>;

const LeftChevron = () => (
	<svg width="24" height="24" viewBox="0 0 24 24">
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M15.9999 21.5001C15.6025 21.4987 15.2216 21.3406 14.9399 21.0601L6.93993 13.0601C6.65656 12.7802 6.49707 12.3984 6.49707 12.0001C6.49707 11.6018 6.65656 11.22 6.93993 10.9401L14.9399 2.9401C15.3139 2.5388 15.877 2.37361 16.4085 2.50933C16.94 2.64506 17.355 3.06006 17.4907 3.59153C17.6264 4.12299 17.4612 4.68616 17.0599 5.0601L10.1199 12.0001L17.0599 18.9401C17.3433 19.22 17.5028 19.6018 17.5028 20.0001C17.5028 20.3984 17.3433 20.7802 17.0599 21.0601C16.7783 21.3406 16.3974 21.4987 15.9999 21.5001Z"
		/>
	</svg>
);

const RightChevron = () => (
	<svg width="24" height="24" viewBox="0 0 24 24">
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M6.21036 20.2104C6.21036 19.8062 6.36405 19.4019 6.67247 19.0935L13.9777 11.7893L6.67247 4.48508C6.05668 3.86824 6.05668 2.86824 6.67247 2.25139C7.28931 1.6356 8.28931 1.6356 8.90616 2.25139L17.3272 10.6725C17.943 11.2893 17.943 12.2893 17.3272 12.9061L8.90616 21.3272C8.28931 21.943 7.28931 21.943 6.67247 21.3272C6.36405 21.0188 6.21036 20.6146 6.21036 20.2104Z"
		/>
	</svg>
);

export const Basic = () => {
	const [month, setMonth] = React.useState<number>(4);
	const [year, setYear] = React.useState<number>(2023);
	const [selected, setSelected] = React.useState<DateRange>();

	const handleMonthChange = (month: number, year: number) => {
		setMonth(month);
		setYear(year);
	};

	return (
		<DatePicker
			previousIcon={{
				icon: LeftChevron,
			}}
			nextIcon={{
				icon: RightChevron,
			}}
			month={month}
			year={year}
			selected={selected}
			onChange={setSelected as DatePickerProps["onChange"]}
			onMonthChange={handleMonthChange}
			disableDates={[new Date(2023, 4, 1), new Date(2023, 4, 15)]}
			disableBeforeDate={new Date(2023, 4, 1)}
			disableAfterDate={new Date(2023, 4, 15)}
		/>
	);
};
