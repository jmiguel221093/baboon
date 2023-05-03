import React from "react";
import type { ComponentMeta } from "@storybook/react";

import { User } from "../src/components";
import type { UserProps } from "../src/components";

export default {
	title: "AllComponents/User",
	component: User,
} as ComponentMeta<typeof User>;

const UserIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24">
		<path d="M11.9968 15.1747C7.68376 15.1747 3.99976 15.8547 3.99976 18.5747C3.99976 21.2957 7.66076 21.9997 11.9968 21.9997C16.3098 21.9997 19.9938 21.3207 19.9938 18.5997C19.9938 15.8787 16.3338 15.1747 11.9968 15.1747Z" />
		<path
			opacity="0.4"
			d="M11.9967 12.5838C14.9347 12.5838 17.2887 10.2288 17.2887 7.29182C17.2887 4.35482 14.9347 1.99982 11.9967 1.99982C9.05971 1.99982 6.70471 4.35482 6.70471 7.29182C6.70471 10.2288 9.05971 12.5838 11.9967 12.5838Z"
		/>
	</svg>
);

const ChevronDownIcon = () => (
	<svg width="20" height="20" viewBox="0 0 20 20">
		<path
			d="M5 7.5L10 12.5L15 7.5"
			stroke="#1A202C"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const Template = (args: UserProps) => <User {...args} />;

export const Basic = Template.bind({});
Basic.args = {
	initials: "JD",
	username: "John Doe",
	metadata: "Owner",
	userIcon: UserIcon,
	chevronIcon: {
		icon: ChevronDownIcon,
		outlined: true,
	},
	truncateUsername: true,
};
