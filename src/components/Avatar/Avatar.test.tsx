import { shallow } from "enzyme";
import Avatar from "./Avatar";
import type { AvatarProps } from "./Avatar.props";

describe("Avatar", () => {
	const defaultProps: AvatarProps = {
		initials: "JS",
		size: "medium",
	};

	it("renders without crashing", () => {
		const wrapper = shallow(<Avatar {...defaultProps} />);
		expect(wrapper.exists()).toBe(true);
	});

	it("renders initials when provided", () => {
		const wrapper = shallow(<Avatar {...defaultProps} />);
		expect(wrapper.find(".Avatar__Initials")).toHaveLength(1);
	});

	it("renders image when provided", () => {
		const props = {
			...defaultProps,
			source: "https://example.com/image.png",
		};
		const wrapper = shallow(<Avatar {...props} />);
		expect(wrapper.find(".Avatar__Image")).toHaveLength(1);
	});

	it("renders icon when provided", () => {
		const props = {
			...defaultProps,
			icon: "user",
		};
		const wrapper = shallow(<Avatar {...props} />);
		expect(wrapper.find(".Avatar__Icon")).toHaveLength(1);
	});
});
