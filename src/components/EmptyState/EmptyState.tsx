import { cssClassNames } from "../../utils";
import { Button } from "../Button";
import { Icon } from "../Icon";
import { Stack } from "../Stack";
import { Text } from "../Text";

import type { IconSourceType } from "../Icon";
import type { EmptyStateProps } from "./EmptyState.props";

import "./EmptyState.styles.scss";

const COMPONENT_NAME = "EmptyState";

const EmptyState = ({
	icon,
	title,
	children,
	primaryAction,
	secondaryAction,
	tertiaryAction,
}: EmptyStateProps) => {
	const className = cssClassNames(COMPONENT_NAME);

	const iconSource = isValidIcon(icon) ? <Icon source={icon} /> : icon;

	const iconMarkup = icon ? (
		<div className={`${COMPONENT_NAME}__Icon`}>
			{iconSource as React.ReactNode}
		</div>
	) : null;

	const titleMarkup = title ? (
		<Text variant="displaySmall">{title}</Text>
	) : null;

	const childrenMarkup = children ? (
		<div className={`${COMPONENT_NAME}__Content`}>{children}</div>
	) : null;

	const textMarkup =
		titleMarkup || childrenMarkup ? (
			<div className={`${COMPONENT_NAME}__TextContainer`}>
				{titleMarkup}
				{childrenMarkup}
			</div>
		) : null;

	const primaryActionMarkup = primaryAction ? (
		<Button {...primaryAction} onClick={primaryAction.onPress} primary>
			{primaryAction.content}
		</Button>
	) : null;

	const secondaryActionMarkup = secondaryAction ? (
		<Button {...secondaryAction} onClick={secondaryAction.onPress} outline>
			{secondaryAction.content}
		</Button>
	) : null;

	const tertiaryActionMarkup = tertiaryAction ? (
		<Button {...tertiaryAction} onClick={tertiaryAction.onPress} link>
			{tertiaryAction.content}
		</Button>
	) : null;

	const actionsMarkup = primaryActionMarkup ? (
		<div className={`${COMPONENT_NAME}__Actions`}>
			<Stack alignment="center" distribution="center" spacing="medium">
				{secondaryActionMarkup}
				{primaryActionMarkup}
			</Stack>
			{tertiaryActionMarkup}
		</div>
	) : null;

	const detailsMarkup = textMarkup ? (
		<div className={`${COMPONENT_NAME}__Details`}>
			{textMarkup}
			{actionsMarkup}
		</div>
	) : null;

	return (
		<div className={className}>
			{iconMarkup}
			{detailsMarkup}
		</div>
	);
};

const isValidIcon = (icon: any): icon is IconSourceType =>
	typeof icon === "string" || typeof icon === "function";

export default EmptyState;
