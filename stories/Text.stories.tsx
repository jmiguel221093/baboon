import React from "react";
import type { ComponentMeta } from "@storybook/react";

import { Text } from "../src/components";
import type { TextProps } from "../src/components";

export default {
	title: "AllComponents/Text",
	component: Text,
} as ComponentMeta<typeof Text>;

const Template = (args: TextProps) => <Text {...args} />;

export const Basic = Template.bind({});
Basic.args = {
	children: "This is a basic text used as body",
};

export const Caption = Template.bind({});
Caption.args = {
	children: "Showing 1-10 of 100 results",
	variant: "caption",
};

export const Subheading = Template.bind({});
Subheading.args = {
	children: "Summary",
	variant: "subheading",
};

export const Heading = Template.bind({});
Heading.args = {
	children: "Online store dashboard",
	variant: "heading",
};

export const DisplayHuge = Template.bind({});
DisplayHuge.args = {
	children: "Welcome back, John",
	variant: "displayHuge",
};

export const DisplayLarge = Template.bind({});
DisplayLarge.args = {
	children: "Projects",
	variant: "displayLarge",
};

export const DisplayMedium = Template.bind({});
DisplayMedium.args = {
	children: "This is a new section",
	variant: "displayMedium",
};

export const DisplaySmall = Template.bind({});
DisplaySmall.args = {
	children: "Small emphasis text",
	variant: "displaySmall",
};

export const Label = Template.bind({});
Label.args = {
	children: "Select a country",
	variant: "label",
};
