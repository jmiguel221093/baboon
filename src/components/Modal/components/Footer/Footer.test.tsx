import { shallow } from "enzyme";
import Footer from "./Footer";
import { Button } from "../../../Button";

describe("Footer", () => {
	const defaultProps = {
		primaryAction: {
			onPress: jest.fn(),
			content: "Primary Button",
		},
		secondaryActions: [
			{
				onPress: jest.fn(),
				content: "Secondary Button 1",
			},
			{
				onPress: jest.fn(),
				content: "Secondary Button 2",
			},
		],
	};

	it("renders without crashing", () => {
		shallow(<Footer {...defaultProps} />);
	});

	it("renders primary action button", () => {
		const wrapper = shallow(<Footer {...defaultProps} />);
		const primaryButton = wrapper.find(Button).filter("[primary=true]");
		expect(primaryButton.exists()).toBeTruthy();
		expect(primaryButton.props().children).toBe("Primary Button");
	});

	it("renders secondary action buttons", () => {
		const wrapper = shallow(<Footer {...defaultProps} />);
		const secondaryButtons = wrapper.find(Button).filter("[outline=true]");
		expect(secondaryButtons).toHaveLength(2);
		expect(secondaryButtons.at(0).props().children).toBe(
			"Secondary Button 1"
		);
		expect(secondaryButtons.at(1).props().children).toBe(
			"Secondary Button 2"
		);
	});

	it("calls onPress function when primary action button is clicked", () => {
		const wrapper = shallow(<Footer {...defaultProps} />);
		const primaryButton = wrapper.find(Button).filter("[primary=true]");
		primaryButton.simulate("click");
		expect(defaultProps.primaryAction.onPress).toHaveBeenCalled();
	});

	it("calls onPress function when secondary action button is clicked", () => {
		const wrapper = shallow(<Footer {...defaultProps} />);
		const secondaryButton = wrapper
			.find(Button)
			.filter("[outline=true]")
			.at(0);
		secondaryButton.simulate("click");
		expect(defaultProps.secondaryActions[0].onPress).toHaveBeenCalled();
	});

	it("does not render secondary action buttons if none are provided", () => {
		const wrapper = shallow(
			<Footer {...defaultProps} secondaryActions={[]} />
		);
		const secondaryButtons = wrapper.find(Button).filter("[outline=true]");
		expect(secondaryButtons).toHaveLength(0);
	});
});
