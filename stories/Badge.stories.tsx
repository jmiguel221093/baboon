import React from "react";
import type { ComponentMeta } from "@storybook/react";

import { Badge } from "../src/components";
import type { BadgeProps } from "../src/components";

export default {
	title: "AllComponents/Badge",
	component: Badge,
} as ComponentMeta<typeof Badge>;

const InfoIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24">
		<path
			opacity="0.4"
			d="M21.9999 11.9999C21.9999 17.5239 17.5229 21.9999 11.9999 21.9999C6.47688 21.9999 1.99988 17.5239 1.99988 11.9999C1.99988 6.47791 6.47688 1.99991 11.9999 1.99991C17.5229 1.99991 21.9999 6.47791 21.9999 11.9999Z"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M12.87 12.6308C12.87 13.1128 12.477 13.5058 11.995 13.5058C11.513 13.5058 11.12 13.1128 11.12 12.6308V8.21082C11.12 7.72882 11.513 7.33582 11.995 7.33582C12.477 7.33582 12.87 7.72882 12.87 8.21082V12.6308ZM11.125 15.8036C11.125 15.3216 11.516 14.9286 11.995 14.9286C12.488 14.9286 12.88 15.3216 12.88 15.8036C12.88 16.2856 12.488 16.6786 12.005 16.6786C11.52 16.6786 11.125 16.2856 11.125 15.8036Z"
		/>
	</svg>
);

const Template = (args: BadgeProps) => <Badge {...args} />;

export const Basic = Template.bind({});
Basic.args = {
	children: "Badge label",
	onClick: undefined,
};

export const Success = Template.bind({});
Success.args = {
	children: "Badge label",
	variant: "success",
	onClick: undefined,
};

export const Warning = Template.bind({});
Warning.args = {
	children: "Badge label",
	variant: "warning",
	onClick: undefined,
};

export const Danger = Template.bind({});
Danger.args = {
	children: "Badge label",
	variant: "danger",
	onClick: undefined,
};

export const Info = Template.bind({});
Info.args = {
	children: "Badge label",
	variant: "info",
	onClick: undefined,
};

export const Primary = Template.bind({});
Primary.args = {
	children: "Badge label",
	variant: "primary",
	onClick: undefined,
};

export const Icon = Template.bind({});
Icon.args = {
	children: "Badge label",
	icon: InfoIcon,
	onClick: undefined,
};

export const Clickable = Template.bind({});
Clickable.args = {
	children: "Badge label",
	onClick: () => alert("Clicked!"),
};
