import React from "react";
import type { ComponentMeta } from "@storybook/react";

import { TextField } from "../src/components";
import type { TextFieldProps } from "../src/components";

export default {
	title: "AllComponents/TextField",
	component: TextField,
} as ComponentMeta<typeof TextField>;

const Template = (args: TextFieldProps) => <TextField {...args} />;

export const Basic = Template.bind({});
Basic.args = {
	placeholder: "Placeholder",
};
