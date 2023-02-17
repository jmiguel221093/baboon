import { shallow } from "enzyme";
import Item from "./Item";

const COMPONENT_NAME = "MenuList__Item";

describe("Item", () => {
	it("should render without errors", () => {
		const wrapper = shallow(<Item />);
		expect(wrapper.exists()).toBe(true);
	});

	it("should render with the `active` class when `active` prop is true", () => {
		const wrapper = shallow(<Item active />);
		expect(wrapper.hasClass(`${COMPONENT_NAME}--active`)).toBe(true);
	});

	it("should render with the `danger` class when `danger` prop is true", () => {
		const wrapper = shallow(<Item danger />);
		expect(wrapper.hasClass(`${COMPONENT_NAME}--danger`)).toBe(true);
	});

	it("should render with the `disabled` class when `disabled` prop is true", () => {
		const wrapper = shallow(<Item disabled />);
		expect(wrapper.hasClass(`${COMPONENT_NAME}--disabled`)).toBe(true);
	});

	it("should render with the `MenuList__Item` class", () => {
		const wrapper = shallow(<Item />);
		expect(wrapper.hasClass("MenuList__Item")).toBe(true);
	});

	it("should render with a prefix icon when `prefix` prop is provided", () => {
		const wrapper = shallow(
			<Item prefix={<div className="prefix-icon" />} />
		);
		expect(
			wrapper.find(".MenuList__Item__PrefixWrapper .prefix-icon").exists()
		).toBe(true);
	});

	it("should render with a suffix element when `suffix` prop is provided", () => {
		const wrapper = shallow(
			<Item suffix={<div className="suffix-element" />} />
		);
		expect(
			wrapper
				.find(".MenuList__Item__SuffixWrapper .suffix-element")
				.exists()
		).toBe(true);
	});

	it("should render with an icon when `icon` prop is provided", () => {
		const wrapper = shallow(<Item icon="menu" />);
		expect(wrapper.find(".MenuList__Item__IconWrapper Icon").exists()).toBe(
			true
		);
	});

	it("should render with content when `content` prop is provided", () => {
		const wrapper = shallow(<Item content="menu item" />);
		expect(wrapper.find(".MenuList__Item__details Text").exists()).toBe(
			true
		);
	});

	it("should render with help text when `helpText` prop is provided", () => {
		const wrapper = shallow(<Item helpText="help text" />);
		expect(
			wrapper
				.find(
					".MenuList__Item__details .MenuList__Item__HelpTextWrapper Text"
				)
				.exists()
		).toBe(true);
	});

	it("should call the `onPress` function when the item is clicked", () => {
		const onPress = jest.fn();
		const wrapper = shallow(<Item onPress={onPress} />);
		wrapper.simulate("click");
		expect(onPress).toHaveBeenCalled();
	});
});
