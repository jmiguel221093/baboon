import React from "react";
import type { ComponentMeta } from "@storybook/react";

import { Badge, Page, Text } from "../src/components";
import type { PageProps } from "../src/components";

export default {
	title: "AllComponents/Page",
	component: Page,
} as ComponentMeta<typeof Page>;

const CheckIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24">
		<path
			opacity="0.4"
			d="M16.3402 1.99991H7.67024C4.28024 1.99991 2.00024 4.37991 2.00024 7.91991V16.0899C2.00024 19.6199 4.28024 21.9999 7.67024 21.9999H16.3402C19.7302 21.9999 22.0002 19.6199 22.0002 16.0899V7.91991C22.0002 4.37991 19.7302 1.99991 16.3402 1.99991Z"
		/>
		<path d="M10.8133 15.248C10.5893 15.248 10.3653 15.163 10.1943 14.992L7.82132 12.619C7.47932 12.277 7.47932 11.723 7.82132 11.382C8.16332 11.04 8.71632 11.039 9.05832 11.381L10.8133 13.136L14.9413 9.008C15.2833 8.666 15.8363 8.666 16.1783 9.008C16.5203 9.35 16.5203 9.904 16.1783 10.246L11.4323 14.992C11.2613 15.163 11.0373 15.248 10.8133 15.248Z" />
	</svg>
);

const LeftArrowIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24">
		<path d="M11.4798 19.7301C11.2828 19.7304 11.0931 19.6553 10.9498 19.5201L3.94981 12.5201C3.65736 12.2272 3.65736 11.7529 3.94981 11.4601L10.9498 4.46006C11.2426 4.16761 11.717 4.16761 12.0098 4.46006C12.1528 4.59935 12.2334 4.79048 12.2334 4.99006C12.2334 5.18965 12.1528 5.38077 12.0098 5.52006L5.54981 12.0001L11.9998 18.4501C12.1428 18.5894 12.2234 18.7805 12.2234 18.9801C12.2234 19.1797 12.1428 19.3708 11.9998 19.5101C11.8643 19.6521 11.6761 19.7318 11.4798 19.7301Z" />
		<path d="M19.52 12.75H4.52002C4.10581 12.75 3.77002 12.4142 3.77002 12C3.77002 11.5858 4.10581 11.25 4.52002 11.25H19.52C19.9342 11.25 20.27 11.5858 20.27 12C20.27 12.4142 19.9342 12.75 19.52 12.75Z" />
		<path d="M11.4798 19.7301C11.2828 19.7304 11.0931 19.6553 10.9498 19.5201L3.94981 12.5201C3.65736 12.2272 3.65736 11.7529 3.94981 11.4601L10.9498 4.46006C11.2426 4.16761 11.717 4.16761 12.0098 4.46006C12.1528 4.59935 12.2334 4.79048 12.2334 4.99006C12.2334 5.18965 12.1528 5.38077 12.0098 5.52006L5.54981 12.0001L11.9998 18.4501C12.1428 18.5894 12.2234 18.7805 12.2234 18.9801C12.2234 19.1797 12.1428 19.3708 11.9998 19.5101C11.8643 19.6521 11.6761 19.7318 11.4798 19.7301Z" />
		<path d="M19.52 12.75H4.52002C4.10581 12.75 3.77002 12.4142 3.77002 12C3.77002 11.5858 4.10581 11.25 4.52002 11.25H19.52C19.9342 11.25 20.27 11.5858 20.27 12C20.27 12.4142 19.9342 12.75 19.52 12.75Z" />
	</svg>
);

const Template = (args: PageProps) => <Page {...args} />;

export const Basic = Template.bind({});
Basic.args = {
	title: "My new project",
	primaryAction: {
		content: "Save project",
	},
	secondaryActions: [
		{
			content: "Cancel",
		},
	],
	children: (
		<Text>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
			accumsan, nisl sed lacinia ultricies, nunc lectus aliquam massa, nec
			ultricies nunc lorem quis justo. Nulla facilisi. Donec auctor
			condimentum nunc, a tincidunt nisl. Nulla facilisi. Donec auctor
		</Text>
	),
};

export const WithActions = Template.bind({});
WithActions.args = {
	title: "My new project",
	primaryAction: {
		content: "Save project",
	},
	secondaryActions: [
		{
			content: "Cancel",
		},
	],
	children: (
		<Text>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
			accumsan, nisl sed lacinia ultricies, nunc lectus aliquam massa, nec
			ultricies nunc lorem quis justo. Nulla facilisi. Donec auctor
			condimentum nunc, a tincidunt nisl. Nulla facilisi. Donec auctor
		</Text>
	),
};

export const WithSubtitle = Template.bind({});
WithSubtitle.args = {
	title: "My new project",
	subtitle: "April 25, 2020 at 8:01p.m.",
	primaryAction: {
		content: "Save project",
	},
	secondaryActions: [
		{
			content: "Cancel",
		},
	],
	children: (
		<Text>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
			accumsan, nisl sed lacinia ultricies, nunc lectus aliquam massa, nec
			ultricies nunc lorem quis justo. Nulla facilisi. Donec auctor
			condimentum nunc, a tincidunt nisl. Nulla facilisi. Donec auctor
		</Text>
	),
};

export const WithMetadata = Template.bind({});
WithMetadata.args = {
	title: "My new project",
	subtitle: "April 25, 2020 at 8:01p.m.",
	metadata: (
		<>
			<Badge variant="default">Public</Badge>
			<Badge variant="success" icon={CheckIcon}>
				Verified
			</Badge>
		</>
	),
	primaryAction: {
		content: "Save project",
	},
	secondaryActions: [
		{
			content: "Cancel",
		},
	],
	children: (
		<Text>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
			accumsan, nisl sed lacinia ultricies, nunc lectus aliquam massa, nec
			ultricies nunc lorem quis justo. Nulla facilisi. Donec auctor
			condimentum nunc, a tincidunt nisl. Nulla facilisi. Donec auctor
		</Text>
	),
};

export const WithDivider = Template.bind({});
WithDivider.args = {
	title: "My new project",
	subtitle: "April 25, 2020 at 8:01p.m.",
	metadata: (
		<>
			<Badge variant="default">Public</Badge>
			<Badge variant="success" icon={CheckIcon}>
				Verified
			</Badge>
		</>
	),
	primaryAction: {
		content: "Save project",
	},
	secondaryActions: [
		{
			content: "Cancel",
		},
	],
	divider: true,
	children: (
		<Text>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
			accumsan, nisl sed lacinia ultricies, nunc lectus aliquam massa, nec
			ultricies nunc lorem quis justo. Nulla facilisi. Donec auctor
			condimentum nunc, a tincidunt nisl. Nulla facilisi. Donec auctor
		</Text>
	),
};

export const WithBreadcrumb = Template.bind({});
WithBreadcrumb.args = {
	breadcrumb: {
		icon: LeftArrowIcon,
	},
	title: "My new project",
	subtitle: "April 25, 2020 at 8:01p.m.",
	metadata: (
		<>
			<Badge variant="default">Public</Badge>
			<Badge variant="success" icon={CheckIcon}>
				Verified
			</Badge>
		</>
	),
	primaryAction: {
		content: "Save project",
	},
	secondaryActions: [
		{
			content: "Cancel",
		},
	],
	divider: true,
	children: (
		<Text>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
			accumsan, nisl sed lacinia ultricies, nunc lectus aliquam massa, nec
			ultricies nunc lorem quis justo. Nulla facilisi. Donec auctor
			condimentum nunc, a tincidunt nisl. Nulla facilisi. Donec auctor
		</Text>
	),
};

export const WithThumbnail = Template.bind({});
WithThumbnail.args = {
	breadcrumb: {
		icon: LeftArrowIcon,
	},
	thumbnail: {
		source: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
		size: "extra-large",
		borderless: true,
	},
	title: "My new project",
	subtitle: "April 25, 2020 at 8:01p.m.",
	metadata: (
		<>
			<Badge variant="default">Public</Badge>
			<Badge variant="success" icon={CheckIcon}>
				Verified
			</Badge>
		</>
	),
	primaryAction: {
		content: "Save project",
	},
	secondaryActions: [
		{
			content: "Cancel",
		},
	],
	divider: true,
	children: (
		<Text>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
			accumsan, nisl sed lacinia ultricies, nunc lectus aliquam massa, nec
			ultricies nunc lorem quis justo. Nulla facilisi. Donec auctor
			condimentum nunc, a tincidunt nisl. Nulla facilisi. Donec auctor
		</Text>
	),
};
