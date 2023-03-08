import React from "react";
import { shallow } from "enzyme";
import Dialog from "./Dialog";
import type { DialogProps } from "./Dialog.props";
import { Text } from "../../../Text";

const COMPONENT_NAME = "Modal";

describe("Dialog", () => {
	const defaultProps: DialogProps = {
		children: <Text>Test Content</Text>,
		size: "medium",
		height: 300,
	};

	it("renders without crashing", () => {
		shallow(<Dialog {...defaultProps} />);
	});

	it("renders the correct class name", () => {
		const wrapper = shallow(<Dialog {...defaultProps} />);
		expect(wrapper.hasClass(`${COMPONENT_NAME}--medium`)).toBeTruthy();
		expect(wrapper.hasClass("Modal")).toBeTruthy();
	});

	it("sets the height style when height prop is provided", () => {
		const wrapper = shallow(<Dialog {...defaultProps} />);
		expect(wrapper.get(0).props.style).toHaveProperty(
			"--modal-dialog-height",
			"300px"
		);
	});

	it("does not set the height style when height prop is not provided", () => {
		const propsWithoutHeight = { ...defaultProps, height: undefined };
		const wrapper = shallow(<Dialog {...propsWithoutHeight} />);
		expect(wrapper.get(0).props.style).toBeUndefined();
	});

	it("renders the children prop", () => {
		const wrapper = shallow(<Dialog {...defaultProps} />);
		expect(wrapper.find(Text)).toHaveLength(1);
	});
});
