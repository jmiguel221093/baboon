import { mount, shallow } from "enzyme";
import type { ErrorLegendProps } from "../ErrorLegend";
import Switch from "./Switch";

describe("Switch component", () => {
	const props = {
		label: "Switch Label",
		checked: false,
		onChange: jest.fn(),
		disabled: false,
		error: {
			message: "Test",
		},
		helpText: "",
		id: "switch-id",
		name: "switch-name",
		onBlur: jest.fn(),
		onFocus: jest.fn(),
		value: "",
	};

	it("renders without crashing", () => {
		shallow(<Switch {...props} />);
	});

	it("calls onChange when checkbox is clicked", () => {
		const wrapper = mount(<Switch {...props} />);
		wrapper.find('input[type="checkbox"]').simulate("change");
		expect(props.onChange).toHaveBeenCalled();
	});

	it("calls onBlur when checkbox loses focus", () => {
		const wrapper = shallow(<Switch {...props} />);
		const input = wrapper.find("input");
		input.simulate("blur");
		expect(props.onBlur).toHaveBeenCalled();
	});

	it("calls onFocus when checkbox gains focus", () => {
		const wrapper = shallow(<Switch {...props} />);
		const input = wrapper.find("input");
		input.simulate("focus");
		expect(props.onFocus).toHaveBeenCalled();
	});

	it("renders with disabled class when disabled prop is true", () => {
		const wrapper = shallow(<Switch {...props} disabled={true} />);
		const span = wrapper.find(".Switch");
		expect(span.hasClass("Switch--disabled")).toBe(true);
	});

	it("renders with checked class when checked prop is true", () => {
		const wrapper = shallow(<Switch {...props} checked={true} />);
		const span = wrapper.find(".Switch");
		expect(span.hasClass("Switch--checked")).toBe(true);
	});

	it("renders with error class and error message when error prop is not empty", () => {
		const error = props.error;
		const wrapper = shallow(
			<Switch {...props} error={error as ErrorLegendProps} />
		);
		const span = wrapper.find(".Switch");
		expect(span.hasClass("Switch--error")).toBe(true);
	});
});
