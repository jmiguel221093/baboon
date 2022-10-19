import React from "react";
import type { ComponentMeta } from "@storybook/react";

import { Button } from "../src/components";
import type { ButtonProps } from "../src/components";

export default {
	title: "AllComponents/Button",
	component: Button,
} as ComponentMeta<typeof Button>;

const Template = ({ children, ...args }: ButtonProps) => (
	<Button {...args}>{children}</Button>
);

export const Basic = Template.bind({});
Basic.args = {
	children: "Label",
};

export const Outline = Template.bind({});
Outline.args = {
	children: "Label",
	outline: true,
};

export const Clean = Template.bind({});
Clean.args = {
	children: "Label",
	clean: true,
};

export const Primary = Template.bind({});
Primary.args = {
	children: "Label",
	primary: true,
};

export const Danger = Template.bind({});
Danger.args = {
	children: "Label",
	danger: true,
};

export const DangerOutline = Template.bind({});
DangerOutline.args = {
	children: "Label",
	danger: true,
	outline: true,
};

export const DangerClean = Template.bind({});
DangerClean.args = {
	children: "Label",
	danger: true,
	clean: true,
};

export const Link = Template.bind({});
Link.args = {
	children: "Label",
	link: true,
};

export const LinkDanger = Template.bind({});
LinkDanger.args = {
	children: "Label",
	link: true,
	danger: true,
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
	children: "Label",
	size: "small",
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
	children: "Label",
	size: "large",
};

export const Disabled = Template.bind({});
Disabled.args = {
	children: "Label",
	disabled: true,
};

export const OutlineDisabled = Template.bind({});
OutlineDisabled.args = {
	children: "Label",
	disabled: true,
	outline: true,
};

export const CleanDisabled = Template.bind({});
CleanDisabled.args = {
	children: "Label",
	disabled: true,
	clean: true,
};

export const LinkDisabled = Template.bind({});
LinkDisabled.args = {
	children: "Label",
	link: true,
	disabled: true,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
	children: "Label",
	fullWidth: true,
};

export const Loading = Template.bind({});
Loading.args = {
	children: "Label",
	loading: true,
	onClick: () => {
		alert("Algo");
	},
};

export const TextAlignStart = Template.bind({});
TextAlignStart.args = {
	children: "Label",
	fullWidth: true,
	textAlign: "start",
};

export const TextAlignLeft = Template.bind({});
TextAlignLeft.args = {
	children: "Label",
	fullWidth: true,
	textAlign: "left",
};

export const TextAlignCenter = Template.bind({});
TextAlignCenter.args = {
	children: "Label",
	fullWidth: true,
	textAlign: "center",
};

export const TextAlignRight = Template.bind({});
TextAlignRight.args = {
	children: "Label",
	fullWidth: true,
	textAlign: "right",
};

export const TextAlignEnd = Template.bind({});
TextAlignEnd.args = {
	children: "Label",
	fullWidth: true,
	textAlign: "end",
};
