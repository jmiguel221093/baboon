import React from "react";
import type { ComponentMeta } from "@storybook/react";

import { Label } from "../src/components";
import type { LabelProps } from "../src/components";

export default {
	title: "AllComponents/Label",
	component: Label,
} as ComponentMeta<typeof Label>;

const Template = (args: LabelProps) => <Label {...args} />;

export const Basic = Template.bind({});
Basic.args = {
	children: "Field label",
};

export const WithAction = Template.bind({});
WithAction.args = {
	children: "Field label",
	action: {
		content: "Secondary action",
		onPress: () => {
			alert("Action clicked");
		},
	},
};
