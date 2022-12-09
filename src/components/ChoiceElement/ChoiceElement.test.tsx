import { shallow } from "enzyme";
import type { ShallowWrapper } from "enzyme";
import ChoiceElement from "./ChoiceElement";
import { ErrorLegend } from "../ErrorLegend";

const mockError = {
	message: "This is an error message",
	type: "error",
};

describe("ChoiceElement", () => {
	let wrapper: ShallowWrapper;

	beforeEach(() => {
		wrapper = shallow(
			<ChoiceElement
				label="ChoiceElement label"
				id="test-choice-element"
				helpText="This is some help text"
				error={mockError}
				onMouseEnter={() => {
					// do nothing
				}}
				onMouseLeave={() => {
					// do nothing
				}}
			>
				<input type="checkbox" />
			</ChoiceElement>
		);
	});

	it("should render a label element with the correct text", () => {
		expect(wrapper.find("label").text()).toEqual("ChoiceElement label");
	});

	it("should render the children inside the label element", () => {
		expect(wrapper.find("label").contains(<input type="checkbox" />)).toBe(
			true
		);
	});

	it("should render the help text", () => {
		expect(wrapper.find(".ChoiceElement__HelpText").text()).toEqual(
			"This is some help text"
		);
	});

	it("should render the error legend", () => {
		expect(wrapper.find(ErrorLegend).props()).toEqual(mockError);
	});
});
