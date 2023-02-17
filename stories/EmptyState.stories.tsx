import React from "react";
import type { ComponentMeta } from "@storybook/react";

import { EmptyState, Text } from "../src/components";
import type { EmptyStateProps } from "../src/components";

export default {
	title: "AllComponents/EmptyState",
	component: EmptyState,
} as ComponentMeta<typeof EmptyState>;

const Template = (args: EmptyStateProps) => <EmptyState {...args} />;

const ShieldIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24">
		<path
			opacity="0.4"
			d="M12.086 22.0001C11.9622 22.0001 11.8393 21.9717 11.7276 21.9138L8.12627 20.0497C7.10336 19.5202 6.30397 18.926 5.68076 18.2337C4.31353 16.7196 3.55441 14.7761 3.54132 12.76L3.50004 6.12438C3.495 5.35854 3.98833 4.67115 4.72732 4.41228L11.34 2.10691C11.7336 1.96669 12.1716 1.96472 12.5703 2.10005L19.2081 4.32696C19.9511 4.57505 20.4535 5.25754 20.4575 6.0224L20.4998 12.663C20.5129 14.6761 19.7799 16.6275 18.4349 18.1582C17.8167 18.8603 17.0253 19.4633 16.0135 20.0027L12.4444 21.9089C12.3337 21.9687 12.2098 21.9991 12.086 22.0001Z"
		/>
		<path d="M13.0676 11.725L14.4258 10.4022C14.7208 10.1149 14.7208 9.65011 14.4258 9.36279C14.1308 9.07548 13.6526 9.07548 13.3576 9.36279L11.9994 10.6846L10.6422 9.36279C10.3472 9.07548 9.86902 9.07548 9.57403 9.36279C9.27904 9.65011 9.27904 10.1149 9.57403 10.4022L10.9322 11.725L9.57403 13.0478C9.27904 13.3352 9.27904 13.8 9.57403 14.0873C9.72203 14.2314 9.91533 14.303 10.1086 14.303C10.3009 14.303 10.4942 14.2314 10.6422 14.0873L11.9994 12.7654L13.3576 14.0873C13.5056 14.2314 13.6979 14.303 13.8912 14.303C14.0845 14.303 14.2778 14.2314 14.4258 14.0873C14.7208 13.8 14.7208 13.3352 14.4258 13.0478L13.0676 11.725Z" />
	</svg>
);
export const Basic = Template.bind({});
Basic.args = {
	title: "Create or import data",
	children: (
		<Text color="neutral">
			Manage all your data from your computer or create new items
		</Text>
	),
};

export const WidthPrimaryAction = Template.bind({});
WidthPrimaryAction.args = {
	title: "Create or import data",
	children: (
		<Text color="neutral">
			Manage all your data from your computer or create new items
		</Text>
	),
	primaryAction: {
		content: "Create new data",
	},
};

export const WidthActions = Template.bind({});
WidthActions.args = {
	title: "Create or import data",
	children: (
		<Text color="neutral">
			Manage all your data from your computer or create new items
		</Text>
	),
	primaryAction: {
		content: "Create new data",
	},
	secondaryAction: {
		content: "Import data",
	},
};

export const WidthTertiaryAction = Template.bind({});
WidthTertiaryAction.args = {
	title: "Create or import data",
	children: (
		<Text color="neutral">
			Manage all your data from your computer or create new items
		</Text>
	),
	primaryAction: {
		content: "Create new data",
	},
	secondaryAction: {
		content: "Import data",
	},
	tertiaryAction: {
		content: "Learn more",
	},
};

export const WithEmojiAsIcon = Template.bind({});
WithEmojiAsIcon.args = {
	title: "You don't have access to this data",
	children: (
		<Text color="neutral">
			Make sure you have the correct permissions to access this data
		</Text>
	),
	icon: "🔒",
	primaryAction: {
		content: "View permissions",
	},
	secondaryAction: {
		content: "Request access",
	},
	tertiaryAction: {
		content: "Learn more",
	},
};

export const WithLetterAsIcon = Template.bind({});
WithLetterAsIcon.args = {
	title: "You don't have access to this data",
	children: (
		<Text color="neutral">
			Make sure you have the correct permissions to access this data
		</Text>
	),
	icon: "A",
	primaryAction: {
		content: "View permissions",
	},
	secondaryAction: {
		content: "Request access",
	},
	tertiaryAction: {
		content: "Learn more",
	},
};

export const WithIcon = Template.bind({});
WithIcon.args = {
	title: "You don't have access to this data",
	children: (
		<Text color="neutral">
			Make sure you have the correct permissions to access this data
		</Text>
	),
	icon: ShieldIcon,
	primaryAction: {
		content: "View permissions",
	},
	secondaryAction: {
		content: "Request access",
	},
	tertiaryAction: {
		content: "Learn more",
	},
};
