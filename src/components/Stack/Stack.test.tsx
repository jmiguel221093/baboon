import React from "react";
import { shallow } from "enzyme";
import Stack from "./Stack";
import type { ShallowWrapper } from "enzyme";
import type { StackProps } from "./Stack.props";

describe("Stack component", () => {
	let props: StackProps;
	let wrapper: ShallowWrapper;

	beforeEach(() => {
		props = {
			children: <div>Child 1</div>,
			direction: "horizontal",
			spacing: "medium",
			type: "detached",
			alignment: "center",
			distribution: "fillEvenly",
		};
		wrapper = shallow(<Stack {...props} />);
	});

	it("renders without crashing", () => {
		expect(wrapper).toBeDefined();
	});

	it("renders a div with the correct class names", () => {
		expect(wrapper.find("div.Stack").hasClass("Stack")).toBe(true);
		expect(
			wrapper.find("div.Stack").hasClass("Stack--direction-horizontal")
		).toBe(true);
		expect(
			wrapper.find("div.Stack").hasClass("Stack--spacing-medium")
		).toBe(true);
		expect(wrapper.find("div.Stack").hasClass("Stack--type-detached")).toBe(
			true
		);
		expect(
			wrapper.find("div.Stack").hasClass("Stack--alignment-center")
		).toBe(true);
		expect(
			wrapper.find("div.Stack").hasClass("Stack--distribution-fillEvenly")
		).toBe(true);
	});

	it("renders a child component", () => {
		expect(
			// eslint-disable-next-line
			(wrapper.find(".Stack").prop("children") as symbol[]).length
		).toBe(1);
	});
});
