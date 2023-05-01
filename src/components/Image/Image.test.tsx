import { shallow } from "enzyme";
import Image from "./Image";

describe("Image", () => {
	const defaultProps = {
		alt: "Test image",
		source: "https://example.com/image.jpg",
	};

	it("renders without crashing", () => {
		const wrapper = shallow(<Image {...defaultProps} />);
		expect(wrapper.exists()).toBe(true);
	});

	it("sets alt attribute", () => {
		const wrapper = shallow(<Image {...defaultProps} />);
		expect(wrapper.find("img").prop("alt")).toBe(defaultProps.alt);
	});

	it("sets src attribute", () => {
		const wrapper = shallow(<Image {...defaultProps} />);
		expect(wrapper.find("img").prop("src")).toBe(defaultProps.source);
	});

	it("sets srcset attribute", () => {
		const props = {
			...defaultProps,
			sourceSet: [
				{
					source: "https://example.com/image-2x.jpg",
					descriptor: "2x",
				},
				{
					source: "https://example.com/image-3x.jpg",
					descriptor: "3x",
				},
			],
		};
		const wrapper = shallow(<Image {...props} />);
		expect(wrapper.find("img").prop("srcSet")).toBe(
			"https://example.com/image-2x.jpg 2x, https://example.com/image-3x.jpg 3x"
		);
	});

	it("calls onLoad handler", () => {
		const onLoad = jest.fn();
		const wrapper = shallow(<Image {...defaultProps} onLoad={onLoad} />);
		wrapper.find("img").simulate("load");
		expect(onLoad).toHaveBeenCalled();
	});
});
