import { shallow, mount } from "enzyme";
import CustomList from "./CustomList";
import { Item } from "./components";
import { Checkbox } from "../Checkbox";

const CheckIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
		<path d="M8.94631 18.2346C8.59988 18.2344 8.26421 18.1142 7.99631 17.8946L3.51631 14.2246C2.90372 13.6924 2.8254 12.7696 3.33954 12.1418C3.85368 11.514 4.77384 11.4089 5.41631 11.9046L8.88631 14.7446L18.8863 5.53459C19.2622 5.08766 19.8633 4.8995 20.4269 5.05234C20.9905 5.20518 21.4142 5.67123 21.5128 6.24682C21.6114 6.82241 21.3669 7.40289 20.8863 7.73459L9.96631 17.8346C9.69 18.0935 9.32496 18.2367 8.94631 18.2346Z" />
	</svg>
);

describe("CustomList", () => {
	const items = [
		{ id: 1, name: "Item 1" },
		{ id: 2, name: "Item 2" },
		{ id: 3, name: "Item 3" },
	];
	const renderItem = jest.fn((item, itemId) => (
		<Item key={itemId} id={itemId}>
			{item.name}
		</Item>
	));
	const onSelectionChange = jest.fn();
	const selectedItems: string[] = [];

	afterEach(() => {
		jest.clearAllMocks();
	});

	it("renders without crashing", () => {
		shallow(<CustomList items={items} renderItem={renderItem} />);
	});

	it("renders a list of items", () => {
		const wrapper = mount(
			<CustomList items={items} renderItem={renderItem} />
		);
		const itemList = wrapper.find("ul");
		expect(itemList.exists()).toBe(true);
		expect(itemList.children().length).toBe(items.length);
	});

	it("renders a list of items with the correct content", () => {
		const wrapper = mount(
			<CustomList items={items} renderItem={renderItem} />
		);
		const itemElements = wrapper.find(Item);
		expect(itemElements.length).toBe(items.length);
		items.forEach((item, index) => {
			const itemId = item.id;
			expect(itemElements.at(index).prop("id")).toBe(itemId);
			expect(itemElements.at(index).text()).toBe(item.name);
		});
	});

	it("calls onSelectionChange when an item is selected", () => {
		const wrapper = mount(
			<CustomList
				items={items}
				renderItem={renderItem}
				onSelectionChange={onSelectionChange}
				selectedItems={selectedItems}
			/>
		);
		const firstItemCheckbox = wrapper
			.find(Item)
			.first()
			.find("input[type='checkbox']");
		firstItemCheckbox.simulate("change", { target: { checked: true } });
		expect(onSelectionChange).toHaveBeenCalledWith([items[0].id]);
	});

	it("renders borderless style when 'borderless' prop is true", () => {
		const wrapper = mount(
			<CustomList items={items} renderItem={renderItem} borderless />
		);

		expect(wrapper.find("ul").hasClass("CustomList--borderless")).toBe(
			true
		);
	});

	it("renders split-items style when 'splitItems' prop is true", () => {
		const wrapper = mount(
			<CustomList items={items} renderItem={renderItem} splitItems />
		);
		expect(wrapper.find("ul").hasClass("CustomList--split-items")).toBe(
			true
		);
	});

	it("renders checkIcon when 'checkIcon' prop is provided", () => {
		const wrapper = mount(
			<CustomList
				items={items}
				renderItem={renderItem}
				checkIcon={CheckIcon}
				onSelectionChange={onSelectionChange}
				selectedItems={selectedItems}
			/>
		);
		const checkIcon = wrapper.find(Item).at(0).find(Checkbox);
		expect(checkIcon.find(CheckIcon).exists()).toBe(true);
	});
});
