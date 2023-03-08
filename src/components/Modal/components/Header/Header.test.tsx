import { shallow } from "enzyme";
import { Button } from "../../../Button";
import { Text } from "../../../Text";
import Header from "./Header";

describe("Header component", () => {
	const defaultProps = {
		title: "Test Title",
		onClose: jest.fn(),
		closeIcon: null,
		metaData: "Test Meta Data",
	};

	it("should render the component with the correct props", () => {
		const wrapper = shallow(<Header {...defaultProps} />);
		expect(wrapper.find(".Modal__Header")).toHaveLength(1);
		expect(wrapper.find(Text)).toHaveLength(2);
		expect(wrapper.find(Button)).toHaveLength(1);
	});

	it("should call onClose when the dismiss button is clicked", () => {
		const wrapper = shallow(<Header {...defaultProps} />);
		const dismissButton = wrapper.find(Button);
		dismissButton.simulate("click");
		expect(defaultProps.onClose).toHaveBeenCalled();
	});

	it("should not render dismissButtonMarkup when onClose prop is not provided", () => {
		const props = { ...defaultProps, onClose: undefined };
		const wrapper = shallow(<Header {...props} />);
		const dismissButton = wrapper.find(".Modal__Header__DismissButton");
		expect(dismissButton).toHaveLength(0);
	});

	it("should render titleActionsMarkup when title, metaData or dismissButtonMarkup are provided", () => {
		const wrapper = shallow(<Header {...defaultProps} />);
		const titleActionsWrapper = wrapper.find(
			".Modal__Header__TitleActionsWrapper"
		);
		expect(titleActionsWrapper).toHaveLength(1);
	});

	it("should render metaData when metaData prop is a string", () => {
		const wrapper = shallow(<Header {...defaultProps} />);
		const metaDataWrapper = wrapper.find(
			".Modal__Header__TitleActionsWrapper__HeaderMainInfoWrapper__MetaData"
		);
		expect(metaDataWrapper).toHaveLength(1);
	});
});
