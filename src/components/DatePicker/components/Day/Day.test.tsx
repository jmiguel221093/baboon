import { shallow } from "enzyme";
import Day from "./Day";

const defaultProps = {
	day: new Date(2022, 0, 1),
	disabled: false,
	today: false,
	onClick: jest.fn(),
	selected: false,
	inRange: false,
	firstInRange: false,
	lastInRange: false,
	outOfCurrentMonth: false,
};

describe("Day component", () => {
	it("renders without crashing", () => {
		shallow(<Day {...defaultProps} />);
	});

	it("renders the day correctly", () => {
		const wrapper = shallow(<Day {...defaultProps} />);
		expect(wrapper.find("button").text()).toBe("1");
	});

	it("calls the onClick prop when clicked", () => {
		const wrapper = shallow(<Day {...defaultProps} />);
		wrapper.find("button").simulate("click");
		expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
	});

	it("disables the button when disabled prop is true", () => {
		const wrapper = shallow(<Day {...defaultProps} disabled={true} />);
		expect(wrapper.find("button").prop("disabled")).toBe(true);
	});

	it("adds the correct class names based on props", () => {
		const wrapper = shallow(
			<Day {...defaultProps} disabled={true} today={true} />
		);
		expect(wrapper.find("td").prop("className")).toContain("disabled");
		expect(wrapper.find("td").prop("className")).toContain("isToday");
	});
});
