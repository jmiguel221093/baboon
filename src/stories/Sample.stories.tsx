import type { ComponentMeta } from "@storybook/react";

import { Sample } from "../components";

export default {
	title: "AllComponents/Sample",
	component: Sample,
} as ComponentMeta<typeof Sample>;

export const Basic = () => {
	return <Sample>Este es mi componente basic</Sample>;
};

export const WithTitle = () => {
	return <Sample title="Title">Este es mi componente con título</Sample>;
};
