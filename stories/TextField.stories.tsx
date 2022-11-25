import React from "react";
import type { ComponentMeta } from "@storybook/react";

import { Icon, TextField } from "../src/components";
import type { TextFieldProps } from "../src/components";

export default {
	title: "AllComponents/TextField",
	component: TextField,
} as ComponentMeta<typeof TextField>;

const XIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
		<path d="M19.7188 18.3906L13.325 12.0004L19.7188 5.65714C20.0392 5.28603 20.0219 4.72911 19.679 4.37894C19.3361 4.02878 18.7832 4.00341 18.4101 4.32073L11.9976 10.6169L5.69734 4.27367C5.33275 3.90878 4.74392 3.90878 4.37933 4.27367C4.20236 4.45039 4.10282 4.69094 4.10282 4.94188C4.10282 5.19282 4.20236 5.43337 4.37933 5.61008L10.6703 11.9439L4.2765 18.2777C4.09954 18.4544 4 18.695 4 18.9459C4 19.1969 4.09954 19.4374 4.2765 19.6141C4.45291 19.7903 4.69172 19.8885 4.94018 19.887C5.18409 19.8885 5.41891 19.794 5.59452 19.6235L11.9976 13.2709L18.4101 19.7271C18.5865 19.9032 18.8253 20.0014 19.0738 20C19.319 19.9989 19.554 19.9009 19.7281 19.7271C19.9039 19.5491 20.0017 19.3078 20 19.0569C19.9982 18.8059 19.897 18.5661 19.7188 18.3906Z" />
	</svg>
);

const UserIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24">
		<path d="M11.9968 15.1747C7.68376 15.1747 3.99976 15.8547 3.99976 18.5747C3.99976 21.2957 7.66076 21.9997 11.9968 21.9997C16.3098 21.9997 19.9938 21.3207 19.9938 18.5997C19.9938 15.8787 16.3338 15.1747 11.9968 15.1747Z" />
		<path
			opacity="0.4"
			d="M11.9967 12.5838C14.9347 12.5838 17.2887 10.2288 17.2887 7.29182C17.2887 4.35482 14.9347 1.99982 11.9967 1.99982C9.05971 1.99982 6.70471 4.35482 6.70471 7.29182C6.70471 10.2288 9.05971 12.5838 11.9967 12.5838Z"
		/>
	</svg>
);

const AlertIcon = () => (
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

const Template = (args: TextFieldProps) => <TextField {...args} />;

export const Basic = Template.bind({});
Basic.args = {
	placeholder: "Placeholder",
};

export const Labelled = Template.bind({});
Labelled.args = {
	placeholder: "Placeholder",
	label: "Label",
};

export const WithPrefix = Template.bind({});
WithPrefix.args = {
	placeholder: "0.00",
	label: "Price",
	prefix: "$",
};

export const WithSuffix = Template.bind({});
WithSuffix.args = {
	placeholder: "username",
	label: "User email",
	suffix: "@baboon.com",
};

export const WithIconAsPrefix = Template.bind({});
WithIconAsPrefix.args = {
	placeholder: "ej. John Doe",
	label: "Username",
	prefix: <Icon source={UserIcon} />,
};

export const WithAction = () => {
	const [value, setValue] = React.useState("");
	return (
		<TextField
			placeholder="Write something to clear"
			label="Cleanable"
			value={value}
			onChange={setValue}
			action={{
				icon: XIcon,
				onPress: () => setValue(""),
			}}
		/>
	);
};

export const Error = Template.bind({});
Error.args = {
	placeholder: "Some error",
	label: "Error field",
	error: {
		message: "Something went wrong",
		icon: AlertIcon,
	},
};

export const HelpText = Template.bind({});
HelpText.args = {
	placeholder: "Field with help text",
	label: "Help text",
	helpText: "This is a help text",
};

export const Disabled = Template.bind({});
Disabled.args = {
	placeholder: "Field with help text",
	label: "Help text",
	disabled: true,
	value: "Disabled value",
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
	placeholder: "Field with help text",
	label: "Help text",
	readOnly: true,
	value: "Read only value",
};

export const Loading = Template.bind({});
Loading.args = {
	placeholder: "Field with help text",
	label: "Help text",
	loading: true,
};

export const Multiline = Template.bind({});
Multiline.args = {
	placeholder: "Write your message here",
	label: "Message",
	multiline: 4,
};
