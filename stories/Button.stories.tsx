import type { ComponentMeta } from "@storybook/react";

import { Button } from "../components";

export default {
	title: "AllComponents/Button",
	component: Button,
} as ComponentMeta<typeof Button>;

export const Basic = () => {
	return <Button>Label</Button>;
};
