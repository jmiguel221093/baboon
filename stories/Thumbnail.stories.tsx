import React from "react";
import type { ComponentMeta } from "@storybook/react";

import { Thumbnail } from "../src/components";
import type { ThumbnailProps } from "../src/components";

export default {
	title: "AllComponents/Thumbnail",
	component: Thumbnail,
} as ComponentMeta<typeof Thumbnail>;

const Template = (args: ThumbnailProps) => <Thumbnail {...args} />;

export const Basic = Template.bind({});
Basic.args = {
	source: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60",
};

export const Small = Template.bind({});
Small.args = {
	source: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60",
	size: "small",
};

export const Large = Template.bind({});
Large.args = {
	source: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60",
	size: "large",
};

export const FitContain = Template.bind({});
FitContain.args = {
	source: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60",
	size: "large",
	fit: "contain",
};

export const Borderless = Template.bind({});
Borderless.args = {
	source: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60",
	size: "large",
	borderless: true,
};

export const CircleShape = Template.bind({});
CircleShape.args = {
	source: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60",
	size: "large",
	borderless: true,
	circle: true,
};
