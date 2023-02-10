import React from "react";
import type { ComponentMeta } from "@storybook/react";

import { Stack } from "../src/components";
import type { StackProps } from "../src/components";

export default {
	title: "AllComponents/Stack",
	component: Stack,
} as ComponentMeta<typeof Stack>;

const Template = (args: StackProps) => <Stack {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
