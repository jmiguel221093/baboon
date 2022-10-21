import React from "react";
import type { ComponentMeta } from "@storybook/react";

import { Spinner } from "../src/components";
import type { SpinnerProps } from "../src/components";

export default {
	title: "AllComponents/Spinner",
	component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template = (args: SpinnerProps) => <Spinner {...args} />;

export const Basic = Template.bind({});
Basic.args = {
	size: "medium",
};
