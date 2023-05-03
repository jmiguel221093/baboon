import { shallow } from "enzyme";
import type { ShallowWrapper } from "enzyme";
import { UnstyledButton } from "../UnstyledButton";
import Clickable from "./Clickable";

const COMPONENT_NAME = "Clickable";

describe(`${COMPONENT_NAME} component`, () => {
	let wrapper: ShallowWrapper;
	const props = {
		children: <div data-test-id="test-child" />,
		className: "custom-class",
		onClick: jest.fn(),
		disabled: false,
	};

	beforeEach(() => {
		wrapper = shallow(<Clickable {...props} />);
	});

	it("renders without crashing", () => {
		expect(wrapper.exists()).toBe(true);
	});

	it("applies custom class name", () => {
		expect(wrapper.hasClass(props.className)).toBe(true);
	});

	it("renders children", () => {
		expect(wrapper.find('[data-test-id="test-child"]').exists()).toBe(true);
	});

	it("handles clicks", () => {
		wrapper.find(UnstyledButton).simulate("click");
		expect(props.onClick).toHaveBeenCalled();
	});

	it("disables the button when `disabled` prop is true", () => {
		wrapper.setProps({ disabled: true });
		expect(
			wrapper.find(UnstyledButton).hasClass("Clickable--disabled")
		).toBe(true);
	});
});
