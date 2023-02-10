import React from "react";
import { shallow, mount } from "enzyme";
import EmptyState from "./EmptyState";
import { Text } from "../Text";
import { Button } from "../Button";
import { Icon } from "../Icon";
import type { EmptyStateProps } from "./EmptyState.props";

describe("EmptyState component", () => {
	let props: EmptyStateProps = {};

	beforeEach(() => {
		props = {
			icon: "search",
			title: "No results found",
			children: "Try adjusting your search criteria",
			primaryAction: {
				content: "Create Item",
				onPress: jest.fn(),
			},
			secondaryAction: {
				content: "Clear search",
				onPress: jest.fn(),
			},
		};
	});

	it("renders the component with the correct structure", () => {
		const wrapper = shallow(<EmptyState {...props} />);

		expect(wrapper.find(`.EmptyState__Details`)).toHaveLength(1);
		expect(wrapper.find(`.EmptyState__TextContainer`)).toHaveLength(1);
		expect(wrapper.find(`.EmptyState__Icon`)).toHaveLength(1);
		expect(wrapper.find(`.EmptyState__Actions`)).toHaveLength(1);
		expect(wrapper.find(Text)).toHaveLength(1);
		expect(wrapper.find(Button)).toHaveLength(2);
		expect(wrapper.find(Icon)).toHaveLength(1);
	});

	it("renders the correct text content", () => {
		const wrapper = mount(<EmptyState {...props} />);

		expect(wrapper.find(Text).text()).toEqual("No results found");
		expect(wrapper.find(`.EmptyState__Content`).text()).toEqual(
			"Try adjusting your search criteria"
		);
		expect(wrapper.find(Button).at(0).text()).toEqual("Create Item");
		expect(wrapper.find(Button).at(1).text()).toEqual("Clear search");
	});

	it("calls the primary action onPress function when primary button is clicked", () => {
		const wrapper = shallow(<EmptyState {...props} />);
		wrapper.find(Button).at(0).simulate("click");

		expect(props.primaryAction?.onPress).toHaveBeenCalled();
	});

	it("calls the secondary action onPress function when secondary button is clicked", () => {
		const wrapper = shallow(<EmptyState {...props} />);
		wrapper.find(Button).at(1).simulate("click");

		expect(props.secondaryAction?.onPress).toHaveBeenCalled();
	});
});
