/* eslint-disable */
import React from "react";
import type { ComponentMeta } from "@storybook/react";

import { Card, Text } from "../src/components";
import type { CardProps } from "../src/components";

export default {
	title: "AllComponents/Card",
	component: Card,
} as ComponentMeta<typeof Card>;

const PlusIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24">
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12Z"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M12 3C12.5523 3 13 3.44772 13 4L13 20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20L11 4C11 3.44772 11.4477 3 12 3Z"
		/>
	</svg>
);

const FilterIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24">
		<path d="M14.5715 13.5942L20.4266 7.72026C20.7929 7.35195 21 6.84889 21 6.32388V4.60112C21 3.52015 20.1423 3.00012 19.0844 3.00012H4.91556C3.85765 3.00012 3 3.52015 3 4.60112V6.35482C3 6.85189 3.18462 7.33099 3.51772 7.69431L8.89711 13.5633C8.9987 13.6741 9.14034 13.737 9.28979 13.738L14.1915 13.7519C14.3332 13.7529 14.4699 13.697 14.5715 13.5942Z" />
		<path
			opacity="0.4"
			d="M9.05627 13.6859V20.2905C9.05627 20.531 9.1774 20.7576 9.3757 20.8873C9.48901 20.9622 9.6199 21.0001 9.7508 21.0001C9.84946 21.0001 9.94812 20.9792 10.0399 20.9372L14.0059 19.0887C14.254 18.9739 14.4132 18.7214 14.4132 18.4429V13.6859H9.05627Z"
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

const EditIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24">
		<path
			opacity="0.4"
			d="M19.9925 18.9534H14.2982C13.7426 18.9534 13.2908 19.4124 13.2908 19.9767C13.2908 20.5422 13.7426 21.0001 14.2982 21.0001H19.9925C20.548 21.0001 20.9999 20.5422 20.9999 19.9767C20.9999 19.4124 20.548 18.9534 19.9925 18.9534Z"
		/>
		<path d="M10.309 6.904L15.7049 11.2641C15.835 11.3684 15.8573 11.5597 15.7557 11.693L9.35874 20.0283C8.95662 20.5433 8.36402 20.8346 7.72908 20.8453L4.23696 20.8883C4.05071 20.8905 3.88775 20.7615 3.84542 20.5766L3.05175 17.1259C2.91419 16.4917 3.05175 15.836 3.45388 15.3307L9.88256 6.9556C9.98627 6.82123 10.1778 6.79758 10.309 6.904Z" />
		<path
			opacity="0.4"
			d="M18.1205 8.66556L17.0803 9.96413C16.9755 10.0963 16.7872 10.1178 16.657 10.0125C15.3924 8.98913 12.1543 6.36297 11.2559 5.63521C11.1247 5.52771 11.1067 5.33637 11.2125 5.20307L12.2157 3.95718C13.1257 2.78546 14.7131 2.67796 15.9935 3.69919L17.4644 4.87091C18.0676 5.34389 18.4698 5.96738 18.6073 6.62311C18.7661 7.34442 18.5967 8.05283 18.1205 8.66556Z"
		/>
	</svg>
);

const Template = (args: CardProps) => (
	<div style={{ maxWidth: 480 }}>
		<Card {...args} />
	</div>
);

export const Basic = Template.bind({});
Basic.args = {
	title: "Card title",
	children: (
		<Text color="neutral">
			Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim
			neque. Aenean enim sem, pharetra et magna sit amet, luctus aliquet
			nibh. Curabitur auctor leo et libero consectetur.
		</Text>
	),
};

export const Metadata = Template.bind({});
Metadata.args = {
	title: "Card title",
	metadata: (
		<Text color="neutral" variant="caption">
			Card metadata
		</Text>
	),
	children: (
		<Text color="neutral">
			Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim
			neque. Aenean enim sem, pharetra et magna sit amet, luctus aliquet
			nibh. Curabitur auctor leo et libero consectetur.
		</Text>
	),
};

export const WithFooter = Template.bind({});
WithFooter.args = {
	title: "Card title",
	children: (
		<Text color="neutral">
			Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim
			neque. Aenean enim sem, pharetra et magna sit amet, luctus aliquet
			nibh. Curabitur auctor leo et libero consectetur.
		</Text>
	),
	footerContent: (
		<Text color="neutral" variant="caption">
			6 comments
		</Text>
	),
};

export const WithHeaderMainActions = Template.bind({});
WithHeaderMainActions.args = {
	title: "Properties",
	children: (
		<Text color="neutral">
			Add properties if this product comes in multiple versions, like
			different sizes or colors.
		</Text>
	),
	mainActions: [
		{
			icon: FilterIcon,
		},
		{
			icon: PlusIcon,
		},
	],
};

export const WithActionsGroup = () => (
	<div
		style={{
			maxWidth: 480,
		}}
	>
		<Card
			title="Properties"
			mainActions={[
				{
					icon: PlusIcon,
				},
			]}
			actionsGroup={{
				icon: MoreIcon,
				actions: [
					{
						content: "Remove properties",
						danger: true,
					},
					{
						content: "Edit properties",
						disabled: true,
					},
				],
			}}
		>
			<Text color="neutral">
				Add properties if this product comes in multiple versions, like
				different sizes or colors.
			</Text>
		</Card>
	</div>
);

export const Subtle = Template.bind({});
Subtle.args = {
	title: "Properties",
	subtle: true,
	children: (
		<Text color="neutral">
			Add properties if this product comes in multiple versions, like
			different sizes or colors.
		</Text>
	),
	mainActions: [
		{
			icon: PlusIcon,
		},
	],
};

export const WithFooterAction = Template.bind({});
WithFooterAction.args = {
	title: "Publish article",
	children: (
		<Text color="neutral">
			Show this article to your customers or set your own config about the
			visibility of all your items.
		</Text>
	),
	primaryFooterAction: {
		content: "Publish",
	},
};
export const WithFooterSecondaryActions = Template.bind({});
WithFooterSecondaryActions.args = {
	title: "Publish article",
	children: (
		<Text color="neutral">
			Show this article to your customers or set your own config about the
			visibility of all your items.
		</Text>
	),
	primaryFooterAction: {
		content: "Publish",
	},
	secondaryFooterActions: [
		{
			content: "Edit visibility",
		},
	],
};

export const Sectioned = Template.bind({});
Sectioned.args = {
	title: "Site dashboard",
	children: (
		<>
			<Card.Section title="Reports">
				<Text color="neutral">
					View a summary of your online store&apos;s performance
				</Text>
			</Card.Section>
			<Card.Section title="Summary">
				<Text color="neutral">
					View a summary of your online store&apos;s performance,
					including sales, visitors, top, products and referrals.
				</Text>
			</Card.Section>
		</>
	),
};

export const WithSectionActions = Template.bind({});
WithSectionActions.args = {
	title: "Customer",
	children: (
		<>
			<Card.Section>
				<Text color="neutral">John Smith</Text>
			</Card.Section>
			<Card.Section
				title="Contact Information"
				mainActions={[
					{
						icon: PlusIcon,
					},
				]}
				actionsGroup={{
					icon: MoreIcon,
					actions: [
						{
							content: "Remove properties",
							danger: true,
						},
						{
							content: "Edit properties",
							disabled: true,
						},
					],
				}}
			>
				<Text color="neutral">john.smith@mail.com</Text>
			</Card.Section>
		</>
	),
};

export const WithMediaImage = Template.bind({});
WithMediaImage.args = {
	title: "In nature",
	mediaImage: {
		source: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
		alt: "In nature",
	},
	children: (
		<Text color="neutral">
			Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim
			neque. Aenean enim sem, pharetra et magna sit amet, luctus aliquet
			nibh. Curabitur auctor leo et libero consectetur.
		</Text>
	),
	footerContent: (
		<Text color="neutral" variant="caption">
			6 new comments
		</Text>
	),
};

export const WithHeaderInMediaImage = Template.bind({});
WithHeaderInMediaImage.args = {
	title: "In nature",
	metadata: (
		<Text color="subtle-on-dark" variant="caption">
			Improving lifestyle
		</Text>
	),
	headerInMedia: true,
	mediaImage: {
		source: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
		alt: "In nature",
	},
	mainActions: [
		{
			icon: EditIcon,
		},
	],
	actionsGroup: {
		icon: MoreIcon,
		actions: [
			{
				content: "Remove properties",
				danger: true,
			},
			{
				content: "Edit properties",
				disabled: true,
			},
		],
	},
	children: (
		<Text color="neutral">
			Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim
			neque. Aenean enim sem, pharetra et magna sit amet, luctus aliquet
			nibh. Curabitur auctor leo et libero consectetur.
		</Text>
	),
};
