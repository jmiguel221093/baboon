import React from "react";
import type { ComponentMeta } from "@storybook/react";

import { LabelledField } from "../src/components";
import type { LabelledFieldProps } from "../src/components";

export default {
	title: "AllComponents/LabelledField",
	component: LabelledField,
} as ComponentMeta<typeof LabelledField>;

const Template = (args: LabelledFieldProps) => <LabelledField {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
