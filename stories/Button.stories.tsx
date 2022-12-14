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

const FilterIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24">
		<path d="M14.5715 13.5942L20.4266 7.72026C20.7929 7.35195 21 6.84889 21 6.32388V4.60112C21 3.52015 20.1423 3.00012 19.0844 3.00012H4.91556C3.85765 3.00012 3 3.52015 3 4.60112V6.35482C3 6.85189 3.18462 7.33099 3.51772 7.69431L8.89711 13.5633C8.9987 13.6741 9.14034 13.737 9.28979 13.738L14.1915 13.7519C14.3332 13.7529 14.4699 13.697 14.5715 13.5942Z" />
		<path
			opacity="0.4"
			d="M9.05627 13.6859V20.2905C9.05627 20.531 9.1774 20.7576 9.3757 20.8873C9.48901 20.9622 9.6199 21.0001 9.7508 21.0001C9.84946 21.0001 9.94812 20.9792 10.0399 20.9372L14.0059 19.0887C14.254 18.9739 14.4132 18.7214 14.4132 18.4429V13.6859H9.05627Z"
		/>
	</svg>
);

export const Iconed = Template.bind({});
Iconed.args = {
	children: "Filter",
	icon: FilterIcon,
};

export const IconedRight = Template.bind({});
IconedRight.args = {
	children: "Filter",
	icon: FilterIcon,
	iconPosition: "right",
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

export const IconOnly = Template.bind({});
IconOnly.args = {
	icon: FilterIcon,
};
