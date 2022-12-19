import { mount } from "enzyme";
import type { ReactWrapper } from "enzyme";
import RadioButton from "./RadioButton";

const mockOnChange = jest.fn();

describe("RadioButton", () => {
	let wrapper: ReactWrapper;
	beforeEach(() => {
		wrapper = mount(
			<RadioButton
				label="RadioButton label"
				onChange={mockOnChange}
				id="test-radio-button"
				name="test-radio-button"
				value="test-value"
				checked={false}
			/>
		);
	});

	afterEach(() => {
		mockOnChange.mockClear();
	});

	it("should render the radio button input", () => {
		expect(wrapper.find('input[type="radio"]')).toHaveLength(1);
	});

	it("should render the radio button label", () => {
		expect(wrapper.find(".ChoiceElement__Label__LabelText").text()).toEqual(
			"RadioButton label"
		);
	});

	it("should call the onChange prop when the radio button is clicked", () => {
		wrapper.find('input[type="radio"]').simulate("change");
		expect(mockOnChange).toHaveBeenCalled();
	});

	it("should pass the checked prop to the input", () => {
		wrapper.setProps({ checked: true });
		expect(wrapper.prop("checked")).toBe(true);
	});

	it('should add the "hovered" class when the radio button is hovered', () => {
		wrapper.find("label").simulate("mouseenter");
		expect(
			wrapper.find(".RadioButton").hasClass("RadioButton--hovered")
		).toBe(true);
	});

	it('should remove the "hovered" class when the radio button is not hovered', () => {
		wrapper.find("label").simulate("mouseenter");
		wrapper.find("label").simulate("mouseleave");
		expect(
			wrapper.find(".RadioButton").hasClass("RadioButton--hovered")
		).toBe(false);
	});
});
