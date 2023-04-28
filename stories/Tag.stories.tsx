/* eslint-disable */
import React from "react";
import type { ComponentMeta } from "@storybook/react";

import { Tag } from "../src/components";
import type { TagProps } from "../src/components";

export default {
	title: "AllComponents/Tag",
	component: Tag,
} as ComponentMeta<typeof Tag>;

const Template = (args: TagProps) => <Tag {...args} />;

const UserIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24">
		<path d="M11.9968 15.1747C7.68376 15.1747 3.99976 15.8547 3.99976 18.5747C3.99976 21.2957 7.66076 21.9997 11.9968 21.9997C16.3098 21.9997 19.9938 21.3207 19.9938 18.5997C19.9938 15.8787 16.3338 15.1747 11.9968 15.1747Z" />
		<path
			opacity="0.4"
			d="M11.9967 12.5838C14.9347 12.5838 17.2887 10.2288 17.2887 7.29182C17.2887 4.35482 14.9347 1.99982 11.9967 1.99982C9.05971 1.99982 6.70471 4.35482 6.70471 7.29182C6.70471 10.2288 9.05971 12.5838 11.9967 12.5838Z"
		/>
	</svg>
);

export const Basic = Template.bind({});
Basic.args = {
	children: "HTML",
	onClick: undefined,
	onRemove: undefined,
};

export const Removable = Template.bind({});
Removable.args = {
	children: "HTML",
	onClick: undefined,
	onRemove: () => {},
};

export const WithThumbnail = Template.bind({});
WithThumbnail.args = {
	children: "HTML",
	onClick: undefined,
	onRemove: undefined,
	thumbnailSource:
		"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
	children: "HTML",
	onClick: undefined,
	onRemove: undefined,
	icon: UserIcon,
};

export const Clickable = Template.bind({});
Clickable.args = {
	children: "HTML",
	onClick: () => {},
	onRemove: undefined,
};

export const WithLink = Template.bind({});
WithLink.args = {
	children: "HTML",
	onClick: () => {},
	onRemove: undefined,
	link: true,
};

export const Disabled = Template.bind({});

Disabled.args = {
	children: "HTML",
	onClick: () => {},
	onRemove: undefined,
	disabled: true,
};
