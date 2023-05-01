import { mount, shallow } from "enzyme";
import { NavigationContext } from "../../utils";
import { Item } from "../Item";
import Section from "./Section";

describe("Section", () => {
	const items = [
		{
			label: "Home",
			anchorProps: { href: "/" },
		},
		{
			label: "About",
			anchorProps: { href: "/about" },
		},
	];

	const title = "Main Navigation";

	const action = {
		id: "add",
		icon: "plus",
		onPress: jest.fn(),
		disabled: false,
		onMouseEnter: jest.fn(),
		onTouchStart: jest.fn(),
		loading: false,
		danger: false,
	};

	const contextValues = {
		collapsed: false,
	};

	it("renders correctly when there are items and a title", () => {
		const wrapper = shallow(
			<NavigationContext.Provider value={contextValues}>
				<Section items={items} title={title} />
			</NavigationContext.Provider>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly when there are items, a title, and an action", () => {
		const wrapper = shallow(
			<NavigationContext.Provider value={contextValues}>
				<Section items={items} title={title} action={action} />
			</NavigationContext.Provider>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly when there are no items and no title", () => {
		const wrapper = shallow(
			<NavigationContext.Provider value={contextValues}>
				<Section />
			</NavigationContext.Provider>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it("renders correctly when the navigation is collapsed", () => {
		const collapsedContextValues = {
			collapsed: true,
		};
		const wrapper = shallow(
			<NavigationContext.Provider value={collapsedContextValues}>
				<Section items={items} title={title} action={action} />
			</NavigationContext.Provider>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it("renders the correct number of items", () => {
		const wrapper = mount(
			<NavigationContext.Provider value={contextValues}>
				<Section items={items} />
			</NavigationContext.Provider>
		);
		expect(wrapper.find(Item)).toHaveLength(items.length);
	});
});
