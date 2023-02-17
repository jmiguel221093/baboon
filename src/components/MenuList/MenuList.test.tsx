import { shallow, mount } from "enzyme";
import { Item, Section } from "./components";
import MenuList from "./MenuList";

describe("MenuList", () => {
	const items = [
		{ id: "1", label: "Item 1" },
		{ id: "2", label: "Item 2" },
		{ id: "3", label: "Item 3" },
	];
	const sections = [
		{
			title: "Section 1",
			items: [
				{ id: "4", label: "Item 4" },
				{ id: "5", label: "Item 5" },
			],
		},
		{
			title: "Section 2",
			items: [
				{ id: "6", label: "Item 6" },
				{ id: "7", label: "Item 7" },
			],
		},
	];

	it("renders without crashing", () => {
		shallow(<MenuList />);
	});

	it("renders items", () => {
		const wrapper = shallow(<MenuList items={items} />);
		const itemsWrapper = wrapper.find(Section).dive().find("li");
		expect(itemsWrapper).toHaveLength(items.length);
	});

	it("renders sections", () => {
		const wrapper = shallow(<MenuList sections={sections} />);
		const sectionsWrapper = wrapper.find(Section);
		expect(sectionsWrapper).toHaveLength(sections.length);
	});

	it("renders title", () => {
		const title = "Title";
		const wrapper = mount(<MenuList title={title} items={items} />);
		const titleWrapper = wrapper.prop("title");
		expect(titleWrapper).toBe(title);
	});

	it("calls onSelectItem when an item is clicked", () => {
		const onSelectItem = jest.fn();
		const wrapper = mount(
			<MenuList items={items} onSelectItem={onSelectItem} />
		);
		const itemWrapper = wrapper
			.find(Section)
			.find(Item)
			.at(0)
			.find("button");
		itemWrapper.simulate("click");
		expect(onSelectItem).toHaveBeenCalledWith(items[0]);
	});
});
