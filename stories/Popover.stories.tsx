import React from "react";
import type { ComponentMeta } from "@storybook/react";

import { Button, Popover, Text } from "../src/components";

export default {
	title: "AllComponents/Popover",
	component: Popover,
} as ComponentMeta<typeof Popover>;

export const Basic = () => {
	const [open, setOpen] = React.useState(true);
	const togglePopover = () => setOpen(!open);
	const trigger = <Button onClick={togglePopover}>Click me</Button>;
	return (
		<div
			style={{
				height: "250",
			}}
		>
			<Popover
				trigger={trigger}
				open={open}
				onClose={togglePopover}
				borderLess
			>
				<Text>Popover content</Text>
			</Popover>
		</div>
	);
};

export const Centered = () => {
	const [open, setOpen] = React.useState(false);
	const togglePopover = () => setOpen(!open);
	const trigger = <Button onClick={togglePopover}>Click me</Button>;
	return (
		<div
			style={{
				height: "250",
			}}
		>
			<Popover
				trigger={trigger}
				open={open}
				onClose={togglePopover}
				borderLess
				align="center"
			>
				<Popover.Section title="Section 1">
					<Text>Popover content</Text>
				</Popover.Section>
				<Popover.Section title="Section 2">
					<Text>Popover content</Text>
				</Popover.Section>
			</Popover>
		</div>
	);
};
export const AlignedRight = () => {
	const [open, setOpen] = React.useState(false);
	const togglePopover = () => setOpen(!open);
	const trigger = <Button onClick={togglePopover}>Click me</Button>;
	return (
		<div
			style={{
				height: "250",
			}}
		>
			<Popover
				trigger={trigger}
				open={open}
				onClose={togglePopover}
				borderLess
				align="right"
			>
				<Popover.Section title="Section 1">
					<Text>Popover content</Text>
				</Popover.Section>
				<Popover.Section title="Section 2">
					<Text>Popover content</Text>
				</Popover.Section>
			</Popover>
		</div>
	);
};
export const Sectioned = () => {
	const [open, setOpen] = React.useState(false);
	const togglePopover = () => setOpen(!open);
	const trigger = <Button onClick={togglePopover}>Click me</Button>;
	return (
		<div
			style={{
				height: "250",
			}}
		>
			<Popover
				trigger={trigger}
				open={open}
				onClose={togglePopover}
				borderLess
				align="left"
			>
				<Popover.Section title="Section 1">
					<Text>Popover content</Text>
				</Popover.Section>
				<Popover.Section title="Section 2">
					<Text>Popover content</Text>
				</Popover.Section>
			</Popover>
		</div>
	);
};

export const FullWidth = () => {
	const [open, setOpen] = React.useState(false);
	const togglePopover = () => setOpen(!open);
	const trigger = <Button onClick={togglePopover}>Click me</Button>;
	return (
		<div
			style={{
				height: "250",
			}}
		>
			<Popover
				trigger={trigger}
				open={open}
				onClose={togglePopover}
				borderLess
				align="left"
				fullWidth
			>
				<Popover.Section title="Section 1">
					<Text>Popover content</Text>
				</Popover.Section>
				<Popover.Section title="Section 2">
					<Text>Popover content</Text>
				</Popover.Section>
			</Popover>
		</div>
	);
};

export const Fixed = () => {
	const [open, setOpen] = React.useState(false);
	const togglePopover = () => setOpen(!open);
	const trigger = <Button onClick={togglePopover}>Click me</Button>;
	return (
		<div
			style={{
				height: "250",
			}}
		>
			<Popover
				trigger={trigger}
				open={open}
				onClose={togglePopover}
				borderLess
				align="left"
				fixed
			>
				<Popover.Section title="Section 1">
					<Text>Popover content</Text>
				</Popover.Section>
				<Popover.Section title="Section 2">
					<Text>Popover content</Text>
				</Popover.Section>
			</Popover>
		</div>
	);
};
