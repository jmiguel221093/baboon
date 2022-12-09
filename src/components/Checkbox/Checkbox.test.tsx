import { mount } from "enzyme";
import type { ReactWrapper } from "enzyme";
import Checkbox from "./Checkbox";

const checkIconmarkup = (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
		<path d="M8.94631 18.2346C8.59988 18.2344 8.26421 18.1142 7.99631 17.8946L3.51631 14.2246C2.90372 13.6924 2.8254 12.7696 3.33954 12.1418C3.85368 11.514 4.77384 11.4089 5.41631 11.9046L8.88631 14.7446L18.8863 5.53459C19.2622 5.08766 19.8633 4.8995 20.4269 5.05234C20.9905 5.20518 21.4142 5.67123 21.5128 6.24682C21.6114 6.82241 21.3669 7.40289 20.8863 7.73459L9.96631 17.8346C9.69 18.0935 9.32496 18.2367 8.94631 18.2346Z" />
	</svg>
);

const indeterminateIconmarkup = (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
		<path d="M20.5 11H4.5C3.67157 11 3 11.6716 3 12.5C3 13.3284 3.67157 14 4.5 14H20.5C21.3284 14 22 13.3284 22 12.5C22 11.6716 21.3284 11 20.5 11Z" />
	</svg>
);

const CheckIcon = () => checkIconmarkup;

const IndeterminateIcon = () => indeterminateIconmarkup;

const mockOnChange = jest.fn();

describe("Checkbox", () => {
	let wrapper: ReactWrapper;

	beforeEach(() => {
		wrapper = mount(
			<Checkbox
				label="Checkbox label"
				onChange={mockOnChange}
				id="test-checkbox"
				name="test-checkbox"
				value="test-value"
				checkIcon={CheckIcon}
				indeterminateIcon={IndeterminateIcon}
			/>
		);
	});

	afterEach(() => {
		mockOnChange.mockClear();
	});

	it("should render the checkbox input", () => {
		expect(wrapper.find('input[type="checkbox"]')).toHaveLength(1);
	});

	it("should render the checkbox label", () => {
		expect(wrapper.find(".ChoiceElement__Label__LabelText").text()).toEqual(
			"Checkbox label"
		);
	});

	it("should call the onChange prop when the checkbox is clicked", () => {
		wrapper.find('input[type="checkbox"]').simulate("click");
		expect(mockOnChange).toHaveBeenCalled();
	});

	it("should render the check icon when the checkbox is checked", () => {
		wrapper.setProps({ checked: true });
		expect(wrapper.find(CheckIcon)).toHaveLength(1);
	});

	it("should render the indeterminate icon when the checkbox is in an indeterminate state", () => {
		wrapper.setProps({ checked: "indeterminate" });
		expect(wrapper.find(IndeterminateIcon)).toHaveLength(1);
	});

	it('should add the "hovered" class when the checkbox is hovered', () => {
		wrapper.find("label").simulate("mouseenter");
		expect(wrapper.find(".Checkbox").hasClass("Checkbox--hovered")).toBe(
			true
		);
	});

	it('should remove the "hovered" class when the checkbox is not hovered', () => {
		wrapper.find("label").simulate("mouseenter");
		wrapper.find("label").simulate("mouseleave");
		expect(wrapper.find(".Checkbox").hasClass("hovered")).toBe(false);
	});
});
