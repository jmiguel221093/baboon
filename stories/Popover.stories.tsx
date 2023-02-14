import React from "react";
import type { ComponentMeta } from "@storybook/react";

import { Button, Popover, Text } from "../src/components";

export default {
	title: "AllComponents/Popover",
	component: Popover,
} as ComponentMeta<typeof Popover>;

export const Basic = () => {
	const [open, setOpen] = React.useState(false);
	const togglePopover = () => setOpen(!open);
	const trigger = <Button onClick={togglePopover}>Click me</Button>;
	return (
		<div
			style={{
				height: "500px",
			}}
		>
			<Popover
				trigger={trigger}
				open={open}
				onClose={togglePopover}
				fixed
			>
				<Text variant="heading">popove muy muy muy largo</Text>
			</Popover>
		</div>
	);
};
