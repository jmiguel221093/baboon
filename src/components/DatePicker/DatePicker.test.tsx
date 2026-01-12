import { shallow } from "enzyme";
import DatePicker from "./DatePicker";
import type { DatePickerProps } from "./DatePicker.props";
import type { DatePickerCalendarProps } from "./components";

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

describe("DatePicker", () => {
	const mockOnChange = jest.fn();
	const mockOnMonthChange = jest.fn();
	const mockSelectedDate = new Date("2022-05-15");

	const defaultProps: DatePickerProps = {
		id: "datepicker",
		month: 5,
		year: 2022,
		selected: mockSelectedDate,
		startOfTheWeek: 0,
		onChange: mockOnChange,
		onMonthChange: mockOnMonthChange,
		allowRangeSelection: false,
		disableAfterDate: new Date("2022-06-01"),
		disableBeforeDate: new Date("2022-04-01"),
		disableDates: [new Date("2022-05-10"), new Date("2022-05-20")],
		nextIcon: {
			icon: RightChevron,
		},
		previousIcon: {
			icon: LeftChevron,
		},
		showToday: true,
	};

	afterEach(() => {
		jest.clearAllMocks();
	});

	it("renders without crashing", () => {
		shallow(<DatePicker {...defaultProps} />);
	});

	it("renders the header and calendar components", () => {
		const wrapper = shallow(<DatePicker {...defaultProps} />);
		expect(wrapper.find("Header").length).toBe(1);
		expect(wrapper.find("Calendar").length).toBe(1);
	});

	it("calls onMonthChange when previous or next button is clicked", () => {
		const wrapper = shallow(<DatePicker {...defaultProps} />);
		const previousButton: () => void = wrapper
			.find("Header")
			.prop("onPreviousClick");
		const nextButton: () => void = wrapper
			.find("Header")
			.prop("onNextClick");
		previousButton();
		nextButton();
		expect(mockOnMonthChange).toHaveBeenCalledTimes(2);
	});

	it("passes the correct props to the Calendar component", () => {
		const wrapper = shallow(<DatePicker {...defaultProps} />);
		const calendarProps: DatePickerCalendarProps = wrapper
			.find("Calendar")
			.props() as DatePickerCalendarProps;
		expect(calendarProps.month).toBe(5);
		expect(calendarProps.year).toBe(2022);
		expect(calendarProps.selected).toBe(mockSelectedDate);
		expect(calendarProps.startOfTheWeek).toBe(0);
		expect(calendarProps.onChange).toBe(mockOnChange);
		expect(calendarProps.allowRangeSelection).toBe(false);
		expect(calendarProps.disableAfterDate).toEqual(new Date("2022-06-01"));
		expect(calendarProps.disableBeforeDate).toEqual(new Date("2022-04-01"));
		expect(calendarProps.disableDates).toEqual([
			new Date("2022-05-10"),
			new Date("2022-05-20"),
		]);
		expect(calendarProps.showToday).toBe(true);
	});
});
