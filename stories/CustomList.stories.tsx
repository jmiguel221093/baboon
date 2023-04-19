/* eslint-disable */

import React from "react";
import type { ComponentMeta } from "@storybook/react";

import { CustomList, Text } from "../src/components";
import type { CustomListProps } from "../src/components";
import type { IconType, ImageSourceType } from "../src/types";

export default {
	title: "AllComponents/CustomList",
	component: CustomList,
} as ComponentMeta<typeof CustomList>;

const CheckIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
		<path d="M8.94631 18.2346C8.59988 18.2344 8.26421 18.1142 7.99631 17.8946L3.51631 14.2246C2.90372 13.6924 2.8254 12.7696 3.33954 12.1418C3.85368 11.514 4.77384 11.4089 5.41631 11.9046L8.88631 14.7446L18.8863 5.53459C19.2622 5.08766 19.8633 4.8995 20.4269 5.05234C20.9905 5.20518 21.4142 5.67123 21.5128 6.24682C21.6114 6.82241 21.3669 7.40289 20.8863 7.73459L9.96631 17.8346C9.69 18.0935 9.32496 18.2367 8.94631 18.2346Z" />
	</svg>
);

const ShopCartIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24">
		<path
			opacity="0.4"
			fillRule="evenodd"
			clipRule="evenodd"
			d="M5.91052 20.5886C5.91052 19.7486 6.59052 19.0686 7.43052 19.0686C8.26052 19.0686 8.94052 19.7486 8.94052 20.5886C8.94052 21.4186 8.26052 22.0986 7.43052 22.0986C6.59052 22.0986 5.91052 21.4186 5.91052 20.5886ZM17.1605 20.5886C17.1605 19.7486 17.8405 19.0686 18.6805 19.0686C19.5105 19.0686 20.1905 19.7486 20.1905 20.5886C20.1905 21.4186 19.5105 22.0986 18.6805 22.0986C17.8405 22.0986 17.1605 21.4186 17.1605 20.5886Z"
			fill="black"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M20.1907 6.34912C20.8007 6.34912 21.2007 6.55912 21.6007 7.01912C22.0007 7.47912 22.0707 8.13912 21.9807 8.73812L21.0307 15.2981C20.8507 16.5591 19.7707 17.4881 18.5007 17.4881H7.59074C6.26074 17.4881 5.16074 16.4681 5.05074 15.1491L4.13074 4.24812L2.62074 3.98812C2.22074 3.91812 1.94074 3.52812 2.01074 3.12812C2.08074 2.71812 2.47074 2.44812 2.88074 2.50812L5.26574 2.86812C5.60574 2.92912 5.85574 3.20812 5.88574 3.54812L6.07574 5.78812C6.10574 6.10912 6.36574 6.34912 6.68574 6.34912H20.1907ZM14.1307 11.5481H16.9007C17.3207 11.5481 17.6507 11.2081 17.6507 10.7981C17.6507 10.3781 17.3207 10.0481 16.9007 10.0481H14.1307C13.7107 10.0481 13.3807 10.3781 13.3807 10.7981C13.3807 11.2081 13.7107 11.5481 14.1307 11.5481Z"
			fill="black"
		/>
	</svg>
);

const MoreIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24">
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12Z"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12Z"
		/>
	</svg>
);

const ITEMS: {
	title: string;
	author: string;
}[] = [
	{
		title: "How to get value from wireframes",
		author: "John Doe",
	},
	{
		title: "Mockups working as research",
		author: "John Doe",
	},
	{
		title: "How to get value from wireframes",
		author: "John Doe",
	},
	{
		title: "Mockups working as research",
		author: "John Doe",
	},
];

const ITEMS_VERTICAL: {
	title: string;
	description: string;
}[] = [
	{
		title: "Sell your products",
		description:
			"Put your products in front of millions of potential customers across your app",
	},
	{
		title: "Sell your products",
		description:
			"Put your products in front of millions of potential customers across your app",
	},
	{
		title: "Sell your products",
		description:
			"Put your products in front of millions of potential customers across your app",
	},
];

const ITEMS_FOR_ACTION: {
	title: string;
	total: string;
	description: string;
}[] = [
	{
		title: "Images",
		total: "2,545 files",
		description: "Uploaded by John Doe on Apr 5, 2019",
	},
	{
		title: "Documents",
		total: "2,545 files",
		description: "Uploaded by John Doe on Apr 5, 2019",
	},
	{
		title: "Video",
		total: "2,545 files",
		description: "Uploaded by John Doe on Apr 5, 2019",
	},
];

const renderItem = (
	item: {
		title: string;
		author: string;
	},
	id: string
) => {
	const { title, author } = item;
	return (
		<CustomList.Item id={id}>
			<Text variant="heading">{title}</Text>
			<Text variant="caption" color="neutral">
				by {author}
			</Text>
		</CustomList.Item>
	);
};

const renderItemWithMedia = (media: IconType | ImageSourceType) => {
	return (
		item: {
			title: string;
			author: string;
		},
		id: string
	) => {
		const { title, author } = item;
		return (
			<CustomList.Item
				id={id}
				media={{
					source: media,
					color: "neutral",
				}}
			>
				<Text variant="heading">{title}</Text>
				<Text variant="caption" color="neutral">
					by {author}
				</Text>
			</CustomList.Item>
		);
	};
};

const renderVerticalAlignedItems = (
	item: {
		title: string;
		description: string;
	},
	id: string
) => {
	const { title, description } = item;
	return (
		<CustomList.Item
			id={id}
			media={{
				source: ShopCartIcon,
				color: "neutral",
			}}
		>
			<Text variant="heading">{title}</Text>
			<Text variant="caption" color="neutral">
				{description}
			</Text>
		</CustomList.Item>
	);
};

const renderItemsWithAction = (
	item: {
		title: string;
		total: string;
		description: string;
	},
	id: string
) => {
	const { title, total, description } = item;
	return (
		<CustomList.Item
			id={id}
			action={{
				content: "Download",
				style: "outline",
			}}
		>
			<Text variant="heading">{title}</Text>
			<Text variant="caption" color="neutral">
				{total}
			</Text>
			<Text variant="caption" color="neutral">
				{description}
			</Text>
		</CustomList.Item>
	);
};

const renderItemsWithAllItsItems = (
	item: {
		title: string;
		total: string;
		description: string;
	},
	id: string
) => {
	const { title, total, description } = item;
	return (
		<CustomList.Item
			id={id}
			verticalAlignment="center"
			action={{
				content: "Download",
				style: "outline",
			}}
			actionsGroup={{
				icon: MoreIcon,
				actions: [
					{
						content: "Download",
					},
					{
						content: "Remove item",
						danger: true,
					},
				],
			}}
			media={{
				source: ShopCartIcon,
				color: "neutral",
			}}
		>
			<Text variant="heading">{title}</Text>
			<Text variant="caption" color="neutral">
				{total}
			</Text>
			<Text variant="caption" color="neutral">
				{description}
			</Text>
		</CustomList.Item>
	);
};

const renderItemsWithActionsGroup = (
	item: {
		title: string;
		total: string;
		description: string;
	},
	id: string
) => {
	const { title, total, description } = item;
	return (
		<CustomList.Item
			id={id}
			verticalAlignment="center"
			actionsGroup={{
				icon: MoreIcon,
				actions: [
					{
						content: "Download",
					},
					{
						content: "Remove item",
						danger: true,
					},
				],
			}}
		>
			<Text variant="heading">{title}</Text>
			<Text variant="caption" color="neutral">
				{total}
			</Text>
			<Text variant="caption" color="neutral">
				{description}
			</Text>
		</CustomList.Item>
	);
};

const renderItemsAlignedVertically = (
	item: {
		title: string;
		total: string;
		description: string;
	},
	id: string
) => {
	const { title, total, description } = item;
	return (
		<CustomList.Item
			id={id}
			verticalAlignment="center"
			actionsGroup={{
				icon: MoreIcon,
				actions: [
					{
						content: "Download",
					},
					{
						content: "Remove item",
						danger: true,
					},
				],
			}}
		>
			<Text variant="heading">{title}</Text>
			<Text variant="caption" color="neutral">
				{total}
			</Text>
			<Text variant="caption" color="neutral">
				{description}
			</Text>
		</CustomList.Item>
	);
};

const Template = (args: CustomListProps) => <CustomList {...args} />;
export const Basic = Template.bind({});
Basic.args = {
	items: ITEMS,
	renderItem,
};

export const Borderless = Template.bind({});
Borderless.args = {
	items: ITEMS,
	renderItem,
	borderless: true,
};

export const WithMediaIcon = Template.bind({});
WithMediaIcon.args = {
	items: ITEMS,
	renderItem: renderItemWithMedia(ShopCartIcon),
};

export const WithMediaImage = Template.bind({});
WithMediaImage.args = {
	items: ITEMS,
	renderItem: renderItemWithMedia(
		"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
	),
};

export const VerticalAligned = Template.bind({});
VerticalAligned.args = {
	items: ITEMS_VERTICAL,
	renderItem: renderVerticalAlignedItems,
};

export const WithAction = Template.bind({});
WithAction.args = {
	items: ITEMS_FOR_ACTION,
	renderItem: renderItemsWithAction,
};

export const WithActionsGroup = Template.bind({});
WithActionsGroup.args = {
	items: ITEMS_FOR_ACTION,
	renderItem: renderItemsWithActionsGroup,
};

export const ItemsSplitted = Template.bind({});
ItemsSplitted.args = {
	items: ITEMS_FOR_ACTION,
	renderItem: renderItemsWithActionsGroup,
	splitItems: true,
};

export const VerticalAlignment = Template.bind({});
VerticalAlignment.args = {
	items: ITEMS_FOR_ACTION,
	renderItem: renderItemsAlignedVertically,
};

export const Selectable = () => {
	const [selectedItems, setSelectedItems] = React.useState<string[]>([]);
	return (
		<CustomList
			items={ITEMS_FOR_ACTION}
			renderItem={renderItemsWithActionsGroup}
			onSelectionChange={setSelectedItems}
			selectedItems={selectedItems}
			checkIcon={CheckIcon}
		/>
	);
};

export const WithAllItsVariants = () => {
	const [selectedItems, setSelectedItems] = React.useState<string[]>([]);
	return (
		<CustomList
			items={ITEMS_FOR_ACTION}
			renderItem={renderItemsWithAllItsItems}
			onSelectionChange={setSelectedItems}
			selectedItems={selectedItems}
			checkIcon={CheckIcon}
		/>
	);
};
