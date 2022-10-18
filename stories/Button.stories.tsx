import React from "react";
import type { ComponentMeta } from "@storybook/react";

import { Button } from "../src/components";

export default {
	title: "AllComponents/Button",
	component: Button,
} as ComponentMeta<typeof Button>;

export const Basic = () => {
	return <Button>Label</Button>;
};

export const Outline = () => {
	return <Button outline>Outline</Button>;
};

export const Clean = () => {
	return <Button clean>Clean</Button>;
};

export const Primary = () => {
	return <Button primary>Primary</Button>;
};

export const Danger = () => {
	return <Button danger>Danger</Button>;
};

export const DangerOutline = () => {
	return (
		<Button danger outline>
			Danger outline
		</Button>
	);
};

export const DangerClean = () => {
	return (
		<Button danger clean>
			Danger clean
		</Button>
	);
};

export const Link = () => {
	return <Button link>Link</Button>;
};

export const Disabled = () => {
	return <Button disabled>Disabled</Button>;
};

export const OutlineDisabled = () => {
	return (
		<Button outline disabled>
			Outline disabled
		</Button>
	);
};

export const CleanDisabled = () => {
	return (
		<Button clean disabled>
			Clean disabled
		</Button>
	);
};

export const LinkDisabled = () => {
	return (
		<Button link disabled>
			Link
		</Button>
	);
};
