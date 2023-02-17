import { shallow } from "enzyme";
import Section from "./Section";
import { Text } from "../../../Text";
import { Item } from "../Item";

describe("Section component", () => {
	it("renders a title if one is provided", () => {
		const section = {
			title: "Test Section Title",
			items: [],
		};
		const wrapper = shallow(<Section section={section} />);
		expect(wrapper.find(Text).exists()).toBe(true);
	});

	it("does not render a title if one is not provided", () => {
		const section = {
			items: [],
		};
		const wrapper = shallow(<Section section={section} />);
		expect(wrapper.find(Text).exists()).toBe(false);
	});

	it("renders an Item component for each item in the section", () => {
		const section = {
			title: "Test Section Title",
			items: [
				{
					id: "1",
					content: "Item 1",
				},
				{
					id: "2",
					content: "Item 2",
				},
			],
		};
		const wrapper = shallow(<Section section={section} />);
		expect(wrapper.find(Item).length).toBe(section.items.length);
	});

	it("calls onSelectItem with the correct arguments when an item is pressed", () => {
		const onSelectItemMock = jest.fn();
		const section = {
			title: "Test Section Title",
			items: [
				{
					id: "1",
					content: "Item 1",
					onPress: () => null,
				},
			],
		};
		const wrapper = shallow(
			<Section section={section} onSelectItem={onSelectItemMock} />
		);
		const itemWrapper = wrapper.find(Item);
		itemWrapper.simulate("press");
		expect(onSelectItemMock).toHaveBeenCalledWith(section.items[0]);
	});
});
