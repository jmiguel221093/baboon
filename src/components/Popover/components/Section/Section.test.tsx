import { shallow } from "enzyme";
import Section from "./Section";
import { cssClassNames } from "../../../../utils";
import { Text } from "../../../Text";

describe("Section component", () => {
	const testTitle = "Test title";
	const testContent = "Test content";

	it("should render with default props", () => {
		const wrapper = shallow(<Section />);
		expect(wrapper.find(".Popover__Section")).toHaveLength(1);
		expect(wrapper.find(".Popover__Section__TitleWrapper")).toHaveLength(0);
		expect(wrapper.find(".Popover__Section__ContentWrapper")).toHaveLength(
			0
		);
	});

	it("should render with title prop", () => {
		const wrapper = shallow(<Section title={testTitle} />);
		expect(wrapper.find(".Popover__Section")).toHaveLength(1);
		expect(wrapper.find(".Popover__Section__TitleWrapper")).toHaveLength(1);
		expect(wrapper.find(Text)).toHaveLength(1);
		expect(wrapper.find(Text).prop("children")).toEqual(testTitle);
		expect(wrapper.find(".Popover__Section__ContentWrapper")).toHaveLength(
			0
		);
	});

	it("should render with content prop", () => {
		const wrapper = shallow(<Section>{testContent}</Section>);
		expect(wrapper.find(".Popover__Section")).toHaveLength(1);
		expect(wrapper.find(".Popover__Section__TitleWrapper")).toHaveLength(0);
		expect(wrapper.find(".Popover__Section__ContentWrapper")).toHaveLength(
			1
		);
		expect(
			wrapper.find(".Popover__Section__ContentWrapper").text()
		).toEqual(testContent);
	});

	it("should render with both title and content props", () => {
		const wrapper = shallow(
			<Section title={testTitle}>{testContent}</Section>
		);
		expect(wrapper.find(".Popover__Section")).toHaveLength(1);
		expect(wrapper.find(".Popover__Section__TitleWrapper")).toHaveLength(1);
		expect(wrapper.find(Text)).toHaveLength(1);
		expect(wrapper.find(Text).prop("children")).toEqual(testTitle);
		expect(wrapper.find(".Popover__Section__ContentWrapper")).toHaveLength(
			1
		);
		expect(
			wrapper.find(".Popover__Section__ContentWrapper").text()
		).toEqual(testContent);
	});

	it("should apply the correct CSS class names", () => {
		const wrapper = shallow(<Section />);
		expect(wrapper.find(".Popover__Section")).toHaveLength(1);
		expect(
			wrapper
				.find(".Popover__Section")
				.hasClass(cssClassNames("Popover__Section"))
		).toBe(true);
	});
});
