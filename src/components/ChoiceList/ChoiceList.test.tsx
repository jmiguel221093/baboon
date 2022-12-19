import ChoiceList from "./ChoiceList";
import type { Choice } from "./ChoiceList.props";
import { mount } from "enzyme";
import type { ReactWrapper } from "enzyme";
import { RadioButton } from "../RadioButton";
import { Checkbox } from "../Checkbox";

describe("ChoiceList", () => {
	let wrapper: ReactWrapper;
	const mockOnChange = jest.fn();
	const choices: Choice[] = [
		{ value: "1", label: "Choice 1" },
		{ value: "2", label: "Choice 2" },
		{ value: "3", label: "Choice 3", disabled: true },
	];

	beforeEach(() => {
		wrapper = mount(
			<ChoiceList
				name="test"
				choices={choices}
				onChange={mockOnChange}
				selected={[]}
			/>
		);
	});

	it("should render the correct number of choices", () => {
		expect(wrapper.find("li")).toHaveLength(3);
	});

	it("should call the onChange prop when a choice is selected", () => {
		wrapper.find(RadioButton).at(0).find("input").simulate("change");
		expect(mockOnChange).toHaveBeenCalledWith(["1"]);
	});

	it("should not allow a disabled choice to be selected", () => {
		wrapper
			.find("input")
			.at(2)
			.simulate("change", { target: { checked: true } });
		expect(mockOnChange).toHaveBeenCalledTimes(2);
	});

	it("should render the correct title", () => {
		wrapper.setProps({ title: "Test Title" });
		expect(wrapper.find(".ChoiceList__Title").text()).toBe("Test Title");
	});

	it("should render the error message", () => {
		wrapper.setProps({ error: { message: "Test Error" } });
		expect(wrapper.find(".ChoiceList__ChoiceError").text()).toBe(
			"Test Error"
		);
	});

	it("should allow multiple choices to be selected", () => {
		wrapper.setProps({ multiple: true });
		expect(wrapper.find(Checkbox)).toHaveLength(3);
	});

	it("should render custom content for a choice", () => {
		const customContent = <div>Custom Content</div>;
		const customChoices = [
			{
				value: "1",
				label: "Choice 1",
				renderContent: () => customContent,
			},
		];
		wrapper.setProps({ choices: customChoices });
		expect(
			wrapper.find(".ChoiceList__ChoiceContent").contains(customContent)
		).toBe(true);
	});
});
