import { mount, shallow } from "enzyme";
import Item from "./Item";
import { Badge } from "../../../Badge";

describe("<Item />", () => {
	const props = {
		anchorProps: { href: "https://example.com" },
		badge: "new",
		disabled: false,
		icon: "check",
		label: "Home",
		onClick: jest.fn(),
		selected: true,
		truncateText: true,
		subItems: [
			{
				anchorProps: { href: "https://example.com/about" },
				disabled: false,
				label: "About",
				onClick: jest.fn(),
				selected: false,
				truncateText: false,
			},
		],
	};

	it("should render without error", () => {
		const wrapper = shallow(<Item {...props} />);
		expect(wrapper.length).toBe(1);
	});

	it("should render a label", () => {
		const wrapper = shallow(<Item {...props} />);
		expect(wrapper.find(".Navigation__Item__Text").text()).toBe(
			props.label
		);
	});

	it("should render a badge", () => {
		const wrapper = shallow(<Item {...props} />);
		expect(wrapper.find(Badge).children().at(0).text()).toBe(props.badge);
	});

	it("should render sub items when selected and not collapsed", () => {
		const wrapper = shallow(<Item {...props} />);
		expect(wrapper.find(".Navigation__Item__SubItem").length).toBe(1);
	});

	it("should call onClick prop when clicked", () => {
		const wrapper = mount(<Item {...props} />);
		wrapper.find("a").at(0).simulate("click");
		expect(props.onClick).toHaveBeenCalled();
	});
});
