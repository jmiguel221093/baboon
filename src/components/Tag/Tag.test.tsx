import { shallow } from "enzyme";
import Tag from "./Tag";
import { Button } from "../Button";
import { Icon } from "../Icon";
import { Thumbnail } from "../Thumbnail";

describe("Tag component", () => {
	const defaultProps = {
		children: "Tag",
	};

	it("renders a span element by default", () => {
		const wrapper = shallow(<Tag {...defaultProps} />);
		expect(wrapper.type()).toEqual("span");
	});

	it("renders a button element if onClick prop is provided", () => {
		/* eslint-disable-next-line */
		const wrapper = shallow(<Tag {...defaultProps} onClick={() => {}} />);
		expect(wrapper.type()).toEqual("button");
	});

	it("renders children prop as tag content", () => {
		const wrapper = shallow(<Tag {...defaultProps} />);
		expect(wrapper.find(".Tag__Text").text()).toEqual("Tag");
	});

	it("renders an Icon component if icon prop is provided", () => {
		const wrapper = shallow(<Tag {...defaultProps} icon="heart" />);
		expect(wrapper.find(Icon).prop("source")).toEqual("heart");
	});

	it("renders a Thumbnail component if thumbnailSource prop is provided", () => {
		const wrapper = shallow(
			<Tag
				{...defaultProps}
				thumbnailSource="https://example.com/image.jpg"
			/>
		);
		expect(wrapper.find(Thumbnail).prop("source")).toEqual(
			"https://example.com/image.jpg"
		);
	});

	it("renders a remove button if onRemove prop is provided", () => {
		/* eslint-disable-next-line */
		const wrapper = shallow(<Tag {...defaultProps} onRemove={() => {}} />);
		expect(wrapper.find(Button).length).toEqual(1);
	});

	it("calls onRemove prop when remove button is clicked", () => {
		const onRemoveMock = jest.fn();
		const wrapper = shallow(
			<Tag {...defaultProps} onRemove={onRemoveMock} />
		);
		wrapper.find(Button).simulate("click");
		expect(onRemoveMock).toHaveBeenCalled();
	});
});
