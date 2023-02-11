import { screen } from "@testing-library/react";
import { shallow } from "enzyme";
import Thumbnail from "./Thumbnail";
import { Icon } from "../Icon";

const COMPONENT_NAME = "Thumbnail";

const CheckIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24">
		<path
			opacity="0.4"
			d="M16.3402 1.99991H7.67024C4.28024 1.99991 2.00024 4.37991 2.00024 7.91991V16.0899C2.00024 19.6199 4.28024 21.9999 7.67024 21.9999H16.3402C19.7302 21.9999 22.0002 19.6199 22.0002 16.0899V7.91991C22.0002 4.37991 19.7302 1.99991 16.3402 1.99991Z"
		/>
		<path d="M10.8133 15.248C10.5893 15.248 10.3653 15.163 10.1943 14.992L7.82132 12.619C7.47932 12.277 7.47932 11.723 7.82132 11.382C8.16332 11.04 8.71632 11.039 9.05832 11.381L10.8133 13.136L14.9413 9.008C15.2833 8.666 15.8363 8.666 16.1783 9.008C16.5203 9.35 16.5203 9.904 16.1783 10.246L11.4323 14.992C11.2613 15.163 11.0373 15.248 10.8133 15.248Z" />
	</svg>
);

describe("Thumbnail", () => {
	it("should be mounted", () => {
		expect(screen).toBeTruthy();
	});
	it("renders without crashing", () => {
		shallow(<Thumbnail source="image.jpg" />);
	});

	it("renders an image when source is a string", () => {
		const wrapper = shallow(<Thumbnail source="image.jpg" />);

		expect(wrapper.find("img").prop("src")).toBe("image.jpg");
	});

	it("renders an Icon component when source is not a string", () => {
		const wrapper = shallow(<Thumbnail source={CheckIcon} />);

		expect(wrapper.find(Icon).length).toBe(1);
	});

	it("applies the correct class name based on size", () => {
		const wrapper = shallow(<Thumbnail size="small" source="image.jpg" />);

		expect(wrapper.hasClass(`${COMPONENT_NAME}--small`)).toBe(true);
	});

	it("applies the borderless class name when borderless is true", () => {
		const wrapper = shallow(<Thumbnail borderless source="image.jpg" />);

		expect(wrapper.hasClass(`${COMPONENT_NAME}--borderless`)).toBe(true);
	});

	it("applies the fit class name based on fit prop", () => {
		const wrapper = shallow(<Thumbnail fit="contain" source="image.jpg" />);

		expect(wrapper.hasClass(`${COMPONENT_NAME}--contain`)).toBe(true);
	});

	it("applies the circle class name when circle is true", () => {
		const wrapper = shallow(<Thumbnail circle source="image.jpg" />);

		expect(wrapper.hasClass(`${COMPONENT_NAME}--circle`)).toBe(true);
	});
});
