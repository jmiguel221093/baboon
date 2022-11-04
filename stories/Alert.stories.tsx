import React from "react";
import type { ComponentMeta } from "@storybook/react";

import { Alert } from "../src/components";
import type { AlertProps } from "../src/components";

export default {
	title: "AllComponents/Alert",
	component: Alert,
} as ComponentMeta<typeof Alert>;

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
const InfoIcon2 = () => (
	<svg width="24" height="24" viewBox="0 0 24 24">
		<path
			opacity="0.4"
			d="M16.34 1.99991H7.67C4.28 1.99991 2 4.37991 2 7.91991V16.0899C2 19.6199 4.28 21.9999 7.67 21.9999H16.34C19.73 21.9999 22 19.6199 22 16.0899V7.91991C22 4.37991 19.73 1.99991 16.34 1.99991Z"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M11.1248 8.18942C11.1248 8.67142 11.5158 9.06442 11.9948 9.06442C12.4878 9.06442 12.8798 8.67142 12.8798 8.18942C12.8798 7.70742 12.4878 7.31442 12.0048 7.31442C11.5198 7.31442 11.1248 7.70742 11.1248 8.18942ZM12.8698 11.3622C12.8698 10.8802 12.4768 10.4872 11.9948 10.4872C11.5128 10.4872 11.1198 10.8802 11.1198 11.3622V15.7822C11.1198 16.2642 11.5128 16.6572 11.9948 16.6572C12.4768 16.6572 12.8698 16.2642 12.8698 15.7822V11.3622Z"
		/>
	</svg>
);
const WarningIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24">
		<path
			opacity="0.4"
			d="M4.72276 21.1674C4.70976 21.1674 4.69776 21.1674 4.68376 21.1664C4.36876 21.1504 4.05976 21.0824 3.76576 20.9634C2.31876 20.3754 1.62076 18.7224 2.20776 17.2764L9.52876 4.45043C9.78076 3.99443 10.1628 3.61243 10.6288 3.35443C11.9938 2.59843 13.7198 3.09543 14.4748 4.45943L21.7478 17.1874C21.9098 17.5684 21.9788 17.8784 21.9958 18.1944C22.0348 18.9504 21.7768 19.6754 21.2708 20.2364C20.7648 20.7974 20.0698 21.1284 19.3148 21.1664L4.79476 21.1674H4.72276Z"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M11.1245 10.0209C11.1245 9.53894 11.5175 9.14594 11.9995 9.14594C12.4815 9.14594 12.8745 9.53894 12.8745 10.0209V12.8489C12.8745 13.3319 12.4815 13.7239 11.9995 13.7239C11.5175 13.7239 11.1245 13.3319 11.1245 12.8489V10.0209ZM11.1245 16.27C11.1245 15.785 11.5175 15.39 11.9995 15.39C12.4815 15.39 12.8745 15.78 12.8745 16.259C12.8745 16.752 12.4815 17.145 11.9995 17.145C11.5175 17.145 11.1245 16.752 11.1245 16.27Z"
		/>
	</svg>
);
const DangerIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24">
		<path
			opacity="0.4"
			d="M16.3399 1.99991H7.66988C4.27988 1.99991 1.99988 4.37991 1.99988 7.91991V16.0899C1.99988 19.6199 4.27988 21.9999 7.66988 21.9999H16.3399C19.7299 21.9999 21.9999 19.6199 21.9999 16.0899V7.91991C21.9999 4.37991 19.7299 1.99991 16.3399 1.99991Z"
		/>
		<path d="M15.0156 13.7704L13.2366 11.9924L15.0146 10.2144C15.3566 9.87341 15.3566 9.31841 15.0146 8.97741C14.6726 8.63341 14.1196 8.63441 13.7776 8.97641L11.9986 10.7544L10.2196 8.97441C9.87758 8.63241 9.32358 8.63441 8.98158 8.97441C8.64058 9.31641 8.64058 9.87141 8.98158 10.2124L10.7616 11.9924L8.98558 13.7674C8.64358 14.1094 8.64358 14.6644 8.98558 15.0044C9.15658 15.1764 9.37958 15.2614 9.60358 15.2614C9.82858 15.2614 10.0516 15.1764 10.2226 15.0054L11.9986 13.2294L13.7786 15.0084C13.9496 15.1794 14.1726 15.2644 14.3966 15.2644C14.6206 15.2644 14.8446 15.1784 15.0156 15.0084C15.3576 14.6664 15.3576 14.1124 15.0156 13.7704Z" />
	</svg>
);
const SuccessIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24">
		<path
			opacity="0.4"
			d="M16.3402 1.99991H7.67024C4.28024 1.99991 2.00024 4.37991 2.00024 7.91991V16.0899C2.00024 19.6199 4.28024 21.9999 7.67024 21.9999H16.3402C19.7302 21.9999 22.0002 19.6199 22.0002 16.0899V7.91991C22.0002 4.37991 19.7302 1.99991 16.3402 1.99991"
		/>
		<path d="M10.8133 15.248C10.5893 15.248 10.3653 15.163 10.1943 14.992L7.82132 12.619C7.47932 12.277 7.47932 11.723 7.82132 11.382C8.16332 11.04 8.71632 11.039 9.05832 11.381L10.8133 13.136L14.9413 9.008C15.2833 8.666 15.8363 8.666 16.1783 9.008C16.5203 9.35 16.5203 9.904 16.1783 10.246L11.4323 14.992C11.2613 15.163 11.0373 15.248 10.8133 15.248" />
	</svg>
);

const Template = (args: AlertProps) => <Alert {...args} />;

export const Basic = Template.bind({});
Basic.args = {
	title: "This is a basic alert",
	children:
		"Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim neque. Aenean enim sem.",
	onDismiss: undefined,
};

export const Dismissible = Template.bind({});
Dismissible.args = {
	title: "This is a basic alert",
	children:
		"Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim neque. Aenean enim sem.",
	onDismiss: () => null,
};

export const PrimaryAction = Template.bind({});
PrimaryAction.args = {
	title: "This is a basic alert",
	children:
		"Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim neque. Aenean enim sem.",
	onDismiss: undefined,
	primaryAction: {
		content: "Learn more",
		onPress: () => null,
	},
};

export const SecondaryAction = Template.bind({});
SecondaryAction.args = {
	title: "This is a basic alert",
	children:
		"Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim neque. Aenean enim sem.",
	onDismiss: undefined,
	primaryAction: {
		content: "Learn more",
		onPress: () => null,
	},
	secondaryAction: {
		content: "Go to docs",
		onPress: () => null,
	},
};

export const Iconed = Template.bind({});
Iconed.args = {
	title: "This is a basic alert",
	children:
		"Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim neque. Aenean enim sem.",
	icon: InfoIcon,
	onDismiss: undefined,
};

export const Success = Template.bind({});
Success.args = {
	title: "This is a basic alert",
	children:
		"Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim neque. Aenean enim sem.",
	status: "success",
	icon: SuccessIcon,
	primaryAction: {
		content: "Learn more",
		onPress: () => null,
	},
	secondaryAction: {
		content: "Go to docs",
		onPress: () => null,
	},
};
export const Danger = Template.bind({});
Danger.args = {
	title: "This is a basic alert",
	children:
		"Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim neque. Aenean enim sem.",
	status: "danger",
	icon: DangerIcon,
	primaryAction: {
		content: "Learn more",
		onPress: () => null,
	},
	secondaryAction: {
		content: "Go to docs",
		onPress: () => null,
	},
};

export const Warning = Template.bind({});
Warning.args = {
	title: "This is a basic alert",
	children:
		"Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim neque. Aenean enim sem.",
	status: "warning",
	icon: WarningIcon,
	primaryAction: {
		content: "Learn more",
		onPress: () => null,
	},
	secondaryAction: {
		content: "Go to docs",
		onPress: () => null,
	},
};

export const Info = Template.bind({});
Info.args = {
	title: "This is a basic alert",
	children:
		"Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim neque. Aenean enim sem.",
	status: "info",
	icon: InfoIcon2,
	primaryAction: {
		content: "Learn more",
		onPress: () => null,
	},
	secondaryAction: {
		content: "Go to docs",
		onPress: () => null,
	},
};

export const Primary = Template.bind({});
Primary.args = {
	title: "This is a basic alert",
	children: (
		<p>
			Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim
			neque. Aenean enim sem.
		</p>
	),
	status: "primary",
	icon: InfoIcon,
	primaryAction: {
		content: "Learn more",
		onPress: () => null,
	},
	secondaryAction: {
		content: "Go to docs",
		onPress: () => null,
	},
};
