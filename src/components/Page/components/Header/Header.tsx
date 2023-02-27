import { cssClassNames } from "../../../../utils";
import { Button } from "../../../Button";
import { Stack } from "../../../Stack";

import type { ActionType } from "../../../../types";

import { Title } from "../Title";

import type { HeaderProps } from "./Header.props";

import "./Header.styles.scss";
import { Thumbnail } from "../../../Thumbnail";

const COMPONENT_NAME = "Page__Header";

const Header = ({
	primaryAction,
	secondaryActions,
	breadcrumb,
	metadata,
	thumbnail,
	...rest
}: HeaderProps) => {
	const { subtitle, title } = rest;

	const className = cssClassNames(COMPONENT_NAME);

	const titleMarkup =
		title || subtitle ? (
			<div className={`${COMPONENT_NAME}__TitleWrapper`}>
				<Title subtitle={subtitle} title={title} />
			</div>
		) : null;

	const primaryActionMarkup = primaryAction ? (
		<Button {...primaryAction} onClick={primaryAction.onPress} primary>
			{primaryAction.content}
		</Button>
	) : null;

	const secondaryActionsMarkup =
		secondaryActions && secondaryActions.length > 0
			? secondaryActions.map(renderSecondaryActions)
			: null;

	const actionsMarkup =
		primaryActionMarkup || secondaryActionsMarkup ? (
			<div className={`${COMPONENT_NAME}__ActionsWrapper`}>
				<Stack alignment="center" distribution="start" spacing="medium">
					{secondaryActionsMarkup}
					{primaryActionMarkup}
				</Stack>
			</div>
		) : null;

	const actionsTitleWrapperMarkup = titleMarkup ? (
		<div className={`${COMPONENT_NAME}__ActionsTitleWrapper`}>
			{titleMarkup}
			{actionsMarkup}
		</div>
	) : null;

	const metadataMarkup = metadata ? (
		<div className={`${COMPONENT_NAME}__MetadataWrapper`}>{metadata}</div>
	) : null;

	const contentWrapperMarkup =
		actionsTitleWrapperMarkup || metadataMarkup ? (
			<div className={`${COMPONENT_NAME}__ContentWrapper`}>
				{actionsTitleWrapperMarkup}
				{metadataMarkup}
			</div>
		) : null;

	const thumbnailMarkup = thumbnail ? (
		<div className={`${COMPONENT_NAME}__ThumbnailWrapper`}>
			<Thumbnail {...thumbnail} />
		</div>
	) : null;

	const breadcrumbMarkup = breadcrumb ? (
		<div className={`${COMPONENT_NAME}__BreadcrumbWrapper`}>
			<Button
				icon={breadcrumb.icon}
				outline
				onClick={breadcrumb.onPress}
			/>
		</div>
	) : null;

	return (
		<div className={className}>
			{breadcrumbMarkup}
			{thumbnailMarkup}
			{contentWrapperMarkup}
		</div>
	);
};

function renderSecondaryActions(action: ActionType, index: number) {
	const { content, onPress: onClick, ...props } = action;
	return (
		<Button key={index} outline onClick={onClick} {...props}>
			{content}
		</Button>
	);
}

export default Header;
