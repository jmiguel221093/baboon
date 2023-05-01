import { mount, shallow } from "enzyme";
import Item from "./Item";
import type { ItemProps } from "./Item.props";

const MoreIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24">
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12Z"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12Z"
		/>
	</svg>
);

describe("Item", () => {
	const props: ItemProps = {
		id: "123",
		verticalAlignment: "top",
		media: {
			source: "https://via.placeholder.com/150",
		},
		action: {
			content: "Action",
		},
		actionsGroup: {
			icon: MoreIcon,
			actions: [
				{
					content: "Action 1",
					onPress: jest.fn(),
				},
				{
					content: "Action 2",
					onPress: jest.fn(),
				},
			],
		},
	};

	const wrapper = shallow(<Item {...props}>Item Content</Item>);

	it("renders without crashing", () => {
		expect(wrapper.exists()).toBe(true);
	});

	it("displays a media source if provided", () => {
		expect(wrapper.find(".CustomList__Item__MediaWrapper").length).toEqual(
			1
		);
	});

	it("displays an action button if action prop is provided", () => {
		expect(wrapper.find(".CustomList__Item__Action").length).toEqual(1);
	});

	it("displays an actions group trigger button if actionsGroup prop is provided", () => {
		expect(
			wrapper.find(".CustomList__Item__ActionsGroupWrapper").length
		).toEqual(1);
	});

	it("displays a popover with menu list when actions group trigger button is clicked", () => {
		const wrapper = mount(<Item {...props}>Item Content</Item>);
		const button = wrapper.find(
			".CustomList__Item__ActionsGroupWrapper .Button"
		);
		button.simulate("click");
		expect(wrapper.find("Popover").prop("open")).toBe(true);
		expect(wrapper.find("MenuList").length).toEqual(1);
	});
});
