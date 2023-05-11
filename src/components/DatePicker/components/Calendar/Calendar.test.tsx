import { mount, shallow } from "enzyme";
import type { DatePickerCalendarProps } from "./Calendar.props";
import type { ShallowWrapper } from "enzyme";
import Calendar from "./Calendar";
import { Day } from "../Day";
import { WEEKDAYS, calculateMonth, isSameDate, orderWeek } from "../../utils";

describe("Calendar", () => {
	const props: DatePickerCalendarProps = {
		month: 5,
		year: 2022,
		allowRangeSelection: false,
		selected: undefined,
		onChange: jest.fn(),
		disableDates: [],
		disableBeforeDate: undefined,
		disableAfterDate: undefined,
		startOfTheWeek: 0,
		showToday: false,
	};

	let wrapper: ShallowWrapper;

	beforeEach(() => {
		wrapper = shallow(<Calendar {...props} />);
	});

	it("should render without errors", () => {
		expect(wrapper).toHaveLength(1);
	});

	it("should calculate the correct number of weeks", () => {
		const weeks = calculateMonth(5, 2022, 0);
		expect(wrapper.find("tbody").find("tr")).toHaveLength(weeks.length);
	});

	it("should render the correct number of days", () => {
		const weeks = calculateMonth(5, 2022, 0);
		const days = weeks.reduce((total, week) => total + week.length, 0);
		expect(wrapper.find(Day)).toHaveLength(days);
	});

	it("should render the weekdays in the correct order", () => {
		const weekdays = wrapper.find("thead").find("th");
		expect(weekdays).toHaveLength(7);
		const orderedWeekdays = orderWeek(props.startOfTheWeek).map((weekday) =>
			WEEKDAYS[weekday].substring(0, 2)
		);
		weekdays.forEach((weekday, index) => {
			expect(weekday.text()).toEqual(orderedWeekdays[index]);
		});
	});

	it("should pass the correct props to each day", () => {
		const selectedDate = new Date(2022, 5, 1);
		const newProps = {
			...props,
			selected: selectedDate,
		};
		wrapper.setProps(newProps);
		const days = wrapper.find(Day);
		expect(days).toHaveLength(calculateMonth(5, 2022, 0).flat().length);
		days.forEach((day) => {
			if (!day.prop("day")) {
				return;
			}
			const date = new Date(2022, 5, day.prop("day")?.getDate() || 1);
			const isToday = isSameDate(date, new Date());
			const isSelected = isSameDate(date, selectedDate);
			expect(day.prop("day")).toEqual(date);
			expect(day.prop("disabled")).toBeFalsy();
			expect(day.prop("outOfCurrentMonth")).toEqual(
				date.getMonth() !== 5
			);
			expect(day.prop("today")).toEqual(isToday);
			expect(day.prop("selected")).toEqual(isSelected);
		});
	});

	it("should call the onChange function when a day is clicked", () => {
		const selectedDate = new Date(2022, 5, 1);
		const newProps = {
			...props,
			selected: selectedDate,
		};
		const wrapper = mount(<Calendar {...newProps} />);
		const days = wrapper.find(Day);
		days.forEach((day, index) => {
			if (day.find("button").length) {
				day.find("button").simulate("click");
				expect(props.onChange).toHaveBeenCalled();
				expect(
					// eslint-disable-next-line no-extra-parens
					(props.onChange as jest.Mock)?.mock.calls[index - 3][0]
				).toEqual(day.prop("day"));
			}
		});
	});
});
