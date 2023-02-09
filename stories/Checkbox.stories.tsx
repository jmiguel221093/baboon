import React from "react";
import type { ComponentMeta } from "@storybook/react";

import { Checkbox } from "../src/components";
import type { CheckboxProps } from "../src/components";

export default {
	title: "AllComponents/Checkbox",
	component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template = (args: CheckboxProps) => <Checkbox {...args} />;

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

const CheckIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
		<path d="M8.94631 18.2346C8.59988 18.2344 8.26421 18.1142 7.99631 17.8946L3.51631 14.2246C2.90372 13.6924 2.8254 12.7696 3.33954 12.1418C3.85368 11.514 4.77384 11.4089 5.41631 11.9046L8.88631 14.7446L18.8863 5.53459C19.2622 5.08766 19.8633 4.8995 20.4269 5.05234C20.9905 5.20518 21.4142 5.67123 21.5128 6.24682C21.6114 6.82241 21.3669 7.40289 20.8863 7.73459L9.96631 17.8346C9.69 18.0935 9.32496 18.2367 8.94631 18.2346Z" />
	</svg>
);

const IndeterminateIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
		<path d="M20.5 11H4.5C3.67157 11 3 11.6716 3 12.5C3 13.3284 3.67157 14 4.5 14H20.5C21.3284 14 22 13.3284 22 12.5C22 11.6716 21.3284 11 20.5 11Z" />
	</svg>
);

export const Basic = () => {
	const [checked, setChecked] = React.useState<string[]>([]);
	const handleChange = (isChecked, name: string) => {
		if (checked.includes(name)) {
			setChecked(checked.filter((item) => item !== name));
		} else {
			setChecked([...checked, name]);
		}
	};
	return (
		<>
			<Checkbox
				id="checkbox"
				label="Checkbox label"
				name="name"
				onChange={handleChange}
				checked={checked.includes("checkbox")}
				checkIcon={CheckIcon}
			/>
			<Checkbox
				id="checkbox-2"
				label="Checkbox label"
				name="name"
				onChange={handleChange}
				checked={checked.includes("checkbox-2")}
				checkIcon={CheckIcon}
			/>
			<Checkbox
				id="checkbox-3"
				label="Checkbox label"
				name="name"
				onChange={handleChange}
				checked={checked.includes("checkbox-3")}
				checkIcon={CheckIcon}
			/>
		</>
	);
};

export const Checked = Template.bind({});
Checked.args = {
	id: "checkbox",
	label: "Checkbox label",
	checked: true,
	checkIcon: CheckIcon,
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
	id: "checkbox",
	label: "Checkbox label",
	checked: "indeterminate",
	indeterminateIcon: IndeterminateIcon,
};

export const HelpText = Template.bind({});
HelpText.args = {
	id: "checkbox",
	label: "Checkbox label",
	helpText: "Info to help the user with this field",
};

export const Error = Template.bind({});
Error.args = {
	id: "checkbox",
	label: "Checkbox label",
	checkIcon: CheckIcon,
	checked: true,
	error: {
		message: "Error message",
		icon: AlertIcon,
	},
};

export const Disabled = Template.bind({});
Disabled.args = {
	id: "checkbox",
	label: "Checkbox label",
	checkIcon: CheckIcon,
	disabled: true,
	checked: true,
};
