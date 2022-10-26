import React from "react";
import type { ComponentMeta } from "@storybook/react";

import { Icon } from "../src/components";
import type { IconProps } from "../src/components";

export default {
	title: "AllComponents/Icon",
	component: Icon,
} as ComponentMeta<typeof Icon>;

const Template = (args: IconProps) => <Icon {...args} />;

const PlusIcon = () => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M13 13V19H11V13H5V11H11V5H13V11H19V13H13Z"></path>
	</svg>
);

export const Basic = Template.bind({});
Basic.args = {
	source: PlusIcon,
};

export const Success = Template.bind({});
Success.args = {
	source: PlusIcon,
	color: "success",
};

export const Danger = Template.bind({});
Danger.args = {
	source: PlusIcon,
	color: "danger",
};

export const Warning = Template.bind({});
Warning.args = {
	source: PlusIcon,
	color: "warning",
};

export const Info = Template.bind({});
Info.args = {
	source: PlusIcon,
	color: "info",
};

export const Neutral = Template.bind({});
Neutral.args = {
	source: PlusIcon,
	color: "neutral",
};

export const Backdrop = Template.bind({});
Backdrop.args = {
	source: PlusIcon,
	backdrop: true,
	color: "on-dark",
};

export const SizeTiny = Template.bind({});
SizeTiny.args = {
	source: PlusIcon,
	size: "tiny",
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
	source: PlusIcon,
	size: "small",
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
	source: PlusIcon,
	size: "medium",
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
	source: PlusIcon,
	size: "large",
};

export const SizeExtraLarge = Template.bind({});
SizeExtraLarge.args = {
	source: PlusIcon,
	size: "extra-large",
};

export const SizeHuge = Template.bind({});
SizeHuge.args = {
	source: "📁",
	size: "huge",
	backdrop: true,
	color: "neutral",
};

export const String = Template.bind({});
String.args = {
	source: "S",
	size: "small",
};
