import { shallow } from "enzyme";
import Header from "./Header";
import type { DatePickerHeaderProps } from "./Header.props";

const LeftChevron = () => (
	<svg width="24" height="24" viewBox="0 0 24 24">
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M15.9999 21.5001C15.6025 21.4987 15.2216 21.3406 14.9399 21.0601L6.93993 13.0601C6.65656 12.7802 6.49707 12.3984 6.49707 12.0001C6.49707 11.6018 6.65656 11.22 6.93993 10.9401L14.9399 2.9401C15.3139 2.5388 15.877 2.37361 16.4085 2.50933C16.94 2.64506 17.355 3.06006 17.4907 3.59153C17.6264 4.12299 17.4612 4.68616 17.0599 5.0601L10.1199 12.0001L17.0599 18.9401C17.3433 19.22 17.5028 19.6018 17.5028 20.0001C17.5028 20.3984 17.3433 20.7802 17.0599 21.0601C16.7783 21.3406 16.3974 21.4987 15.9999 21.5001Z"
		/>
	</svg>
);

const RightChevron = () => (
	<svg width="24" height="24" viewBox="0 0 24 24">
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M6.21036 20.2104C6.21036 19.8062 6.36405 19.4019 6.67247 19.0935L13.9777 11.7893L6.67247 4.48508C6.05668 3.86824 6.05668 2.86824 6.67247 2.25139C7.28931 1.6356 8.28931 1.6356 8.90616 2.25139L17.3272 10.6725C17.943 11.2893 17.943 12.2893 17.3272 12.9061L8.90616 21.3272C8.28931 21.943 7.28931 21.943 6.67247 21.3272C6.36405 21.0188 6.21036 20.6146 6.21036 20.2104Z"
		/>
	</svg>
);

describe("Header component", () => {
	const defaultProps: DatePickerHeaderProps = {
		month: 4,
		year: 2022,
		onPreviousClick: jest.fn(),
		onNextClick: jest.fn(),
	};

	it("should render correctly with default props", () => {
		const wrapper = shallow(<Header {...defaultProps} />);
		expect(wrapper).toMatchSnapshot();
	});

	it("should render previous button when previousIcon and onPreviousClick props are provided", () => {
		const props = {
			...defaultProps,
			previousIcon: { icon: LeftChevron },
			onPreviousClick: jest.fn(),
		};
		const wrapper = shallow(<Header {...props} />);
		expect(wrapper.find("Button").length).toEqual(1);
		expect(wrapper.find("Button").prop("icon")).toEqual(LeftChevron);
	});

	it("should not render previous button when previousIcon prop is not provided", () => {
		const props = {
			...defaultProps,
			previousIcon: undefined,
		};
		const wrapper = shallow(<Header {...props} />);
		expect(wrapper.find("Button").length).toEqual(0);
	});

	it("should not render previous button when onPreviousClick prop is not provided", () => {
		const props = {
			...defaultProps,
			onPreviousClick: undefined,
		};
		const wrapper = shallow(<Header {...props} />);
		expect(wrapper.find("Button").length).toEqual(0);
	});

	it("should render next button when nextIcon and onNextClick props are provided", () => {
		const props = {
			...defaultProps,
			nextIcon: { icon: RightChevron },
			onNextClick: jest.fn(),
		};
		const wrapper = shallow(<Header {...props} />);
		expect(wrapper.find("Button").length).toEqual(1);
		expect(wrapper.find("Button").prop("icon")).toEqual(RightChevron);
	});

	it("should not render next button when nextIcon prop is not provided", () => {
		const props = {
			...defaultProps,
			nextIcon: undefined,
		};
		const wrapper = shallow(<Header {...props} />);
		expect(wrapper.find("Button").length).toEqual(0);
	});

	it("should not render next button when onNextClick prop is not provided", () => {
		const props = {
			...defaultProps,
			onNextClick: undefined,
		};
		const wrapper = shallow(<Header {...props} />);
		expect(wrapper.find("Button").length).toEqual(0);
	});
});
