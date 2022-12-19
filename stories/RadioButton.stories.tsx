import React from "react";
import type { ComponentMeta } from "@storybook/react";

import { RadioButton } from "../src/components";
import type { RadioButtonProps } from "../src/components";

export default {
	title: "AllComponents/RadioButton",
	component: RadioButton,
} as ComponentMeta<typeof RadioButton>;

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

const Template = (args: RadioButtonProps) => <RadioButton {...args} />;

export const Basic = () => {
	const [checked, setChecked] = React.useState("radio-button");
	const handleChange = (value, name) => {
		setChecked(name);
	};
	return (
		<>
			<RadioButton
				id="radio-button"
				label="Radio Button"
				name="name"
				onChange={handleChange}
				checked={checked === "radio-button"}
			/>
			<RadioButton
				id="radio-button-2"
				label="Radio Button"
				name="name"
				onChange={handleChange}
				checked={checked === "radio-button-2"}
			/>
		</>
	);
};

export const Checked = Template.bind({});
Checked.args = {
	id: "radio-button",
	label: "Radio Button",
	checked: true,
};

export const HelpText = Template.bind({});
HelpText.args = {
	id: "radio-button",
	label: "Radio Button",
	helpText: "Info to help the user with this field",
};

export const Error = Template.bind({});
Error.args = {
	id: "radio-button",
	label: "Radio Button",
	checked: true,
	error: {
		message: "Error message",
		icon: AlertIcon,
	},
};
export const Disabled = Template.bind({});
Disabled.args = {
	id: "radio-button",
	label: "Radio Button",
	disabled: true,
	checked: true,
};
