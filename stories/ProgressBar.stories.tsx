import React from "react";
import type { ComponentMeta } from "@storybook/react";

import { ProgressBar, Text } from "../src/components";
import type { ProgressBarProps } from "../src/components";

export default {
	title: "AllComponents/ProgressBar",
	component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template = (args: ProgressBarProps) => (
	<div style={{ width: 450 }}>
		<ProgressBar {...args} />
	</div>
);
export const Basic = Template.bind({});
Basic.args = {
	progress: 50,
};

export const Labeled = Template.bind({});
Labeled.args = {
	label: "Progress until December 2023",
	progress: 50,
};

export const ShowProgress = Template.bind({});
ShowProgress.args = {
	label: "Progress until December 2023",
	progress: 50,
	showProgress: true,
};

export const WithMetadata = Template.bind({});
WithMetadata.args = {
	label: "Progress until December 2023",
	progress: 50,
	showProgress: true,
	metadata: <Text variant="label">2,500,000 users</Text>,
};

export const MultipleDataInformation = Template.bind({});
MultipleDataInformation.args = {
	label: "Progress until December 2023",
	progress: [
		{ value: 40, color: "primary" },
		{ value: 20, color: "success" },
		{ value: 30, color: "warning" },
	],
	showProgress: true,
	metadata: <Text variant="label">1.5 GB free</Text>,
};

export const Micro = Template.bind({});
Micro.args = {
	progress: 70,
	size: "micro",
};
export const Small = Template.bind({});
Small.args = {
	progress: 70,
	size: "small",
};
export const Medium = Template.bind({});
Medium.args = {
	progress: 70,
	size: "medium",
};
export const Large = Template.bind({});
Large.args = {
	progress: 70,
	size: "large",
};
export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
	progress: 70,
	size: "extra-large",
};
