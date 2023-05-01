import React from "react";
import type { ComponentMeta } from "@storybook/react";

import { Avatar } from "../src/components";
import type { AvatarProps } from "../src/components";

export default {
	title: "AllComponents/Avatar",
	component: Avatar,
} as ComponentMeta<typeof Avatar>;

const UserIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24">
		<path d="M11.9968 15.1747C7.68376 15.1747 3.99976 15.8547 3.99976 18.5747C3.99976 21.2957 7.66076 21.9997 11.9968 21.9997C16.3098 21.9997 19.9938 21.3207 19.9938 18.5997C19.9938 15.8787 16.3338 15.1747 11.9968 15.1747Z" />
		<path
			opacity="0.4"
			d="M11.9967 12.5838C14.9347 12.5838 17.2887 10.2288 17.2887 7.29182C17.2887 4.35482 14.9347 1.99982 11.9967 1.99982C9.05971 1.99982 6.70471 4.35482 6.70471 7.29182C6.70471 10.2288 9.05971 12.5838 11.9967 12.5838Z"
		/>
	</svg>
);

const Template = (args: AvatarProps) => <Avatar {...args} />;

export const Basic = Template.bind({});
Basic.args = {
	initials: "JD",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
	initials: "JD",
	icon: UserIcon,
};

export const WithImage = Template.bind({});
WithImage.args = {
	initials: "JD",
	icon: UserIcon,
	source: "https://images.unsplash.com/photo-1640952131659-49a06dd90ad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
};

export const Tiny = Template.bind({});
Tiny.args = {
	initials: "JD",
	icon: UserIcon,
	source: "https://images.unsplash.com/photo-1640952131659-49a06dd90ad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
	size: "tiny",
};
export const Small = Template.bind({});
Small.args = {
	initials: "JD",
	icon: UserIcon,
	source: "https://images.unsplash.com/photo-1640952131659-49a06dd90ad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
	size: "small",
};
export const Medium = Template.bind({});
Medium.args = {
	initials: "JD",
	icon: UserIcon,
	source: "https://images.unsplash.com/photo-1640952131659-49a06dd90ad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
	size: "medium",
};
export const Large = Template.bind({});
Large.args = {
	initials: "JD",
	icon: UserIcon,
	source: "https://images.unsplash.com/photo-1640952131659-49a06dd90ad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
	size: "large",
};
export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
	initials: "JD",
	icon: UserIcon,
	source: "https://images.unsplash.com/photo-1640952131659-49a06dd90ad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
	size: "extra-large",
};
export const Huge = Template.bind({});
Huge.args = {
	initials: "JD",
	icon: UserIcon,
	source: "https://images.unsplash.com/photo-1640952131659-49a06dd90ad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
	size: "huge",
};
