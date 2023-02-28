import { mount, shallow } from "enzyme";
import Card from "./Card";
import { Button } from "../Button";
import { Stack } from "../Stack";

describe("Card", () => {
	it("should render without crashing", () => {
		shallow(<Card />);
	});

	it("should render the Header component when given a title prop", () => {
		const wrapper = mount(<Card title="Test Title" />);
		expect(wrapper.find(".Card__Header")).toHaveLength(1);
	});

	it("should render the Section component when using Card.Section", () => {
		const wrapper = mount(<Card.Section />);
		expect(wrapper.type()).toEqual(Card.Section);
	});

	it("should render the Button component when given a primaryFooterAction prop", () => {
		const primaryFooterAction = {
			content: "Test Button",
			onPress: jest.fn(),
		};
		const wrapper = shallow(
			<Card primaryFooterAction={primaryFooterAction} />
		);
		expect(wrapper.find(Button)).toHaveLength(1);
	});

	it("should render the Stack and Button components when given secondaryFooterActions prop", () => {
		const secondaryFooterActions = [
			{ content: "Test Button 1", onPress: jest.fn() },
			{ content: "Test Button 2", onPress: jest.fn() },
		];
		const wrapper = shallow(
			<Card secondaryFooterActions={secondaryFooterActions} />
		);
		expect(wrapper.find(Stack)).toHaveLength(1);
		expect(wrapper.find(Button)).toHaveLength(2);
	});

	it("should call the onPress function when a Button is clicked", () => {
		const primaryFooterAction = {
			content: "Test Button",
			onPress: jest.fn(),
		};
		const wrapper = shallow(
			<Card primaryFooterAction={primaryFooterAction} />
		);
		wrapper.find(Button).simulate("click");
		expect(primaryFooterAction.onPress).toHaveBeenCalled();
	});
});
