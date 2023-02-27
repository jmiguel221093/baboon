import { cssClassNames, XIcon } from "../../utils";
import { Button } from "../Button";
import { Icon } from "../Icon";
import { Text } from "../Text";
import { UnstyledButton } from "../UnstyledButton";

import type { AlertProps } from "./Alert.props";

import "./Alert.styles.scss";

const COMPONENT_NAME = "Alert";

const Alert = ({
	children,
	title,
	onDismiss,
	dismissIcon,
	primaryAction,
	secondaryAction,
	status = "default",
	icon,
}: AlertProps) => {
	const iconMarkup = icon ? (
		<div className={`${COMPONENT_NAME}__Icon`}>
			<Icon source={icon} />
		</div>
	) : null;

	const titleMarkup = title ? (
		<div className={`${COMPONENT_NAME}__Heading`}>
			<Text variant="heading">{title}</Text>
		</div>
	) : null;

	const contentMarkup = children ? (
		<div className={`${COMPONENT_NAME}__Content`}>{children}</div>
	) : null;

	const dismissButtonMarkup = onDismiss ? (
		<div className={`${COMPONENT_NAME}__DismissButton`}>
			<UnstyledButton onClick={onDismiss}>
				<Icon source={dismissIcon || XIcon} />
			</UnstyledButton>
		</div>
	) : null;

	const secondaryActionMarkup = secondaryAction ? (
		<div className={`${COMPONENT_NAME}__SecondaryAction`}>
			<UnstyledButton
				{...secondaryAction}
				onClick={secondaryAction.onPress}
				className="Button"
			>
				{secondaryAction.content}
			</UnstyledButton>
		</div>
	) : null;

	const primaryActionButton =
		status !== "primary" ? (
			<Button {...primaryAction} onClick={primaryAction?.onPress} primary>
				{primaryAction?.content}
			</Button>
		) : (
			<UnstyledButton onClick={primaryAction?.onPress}>
				{primaryAction?.content}
			</UnstyledButton>
		);

	const primaryActionMarkup = primaryAction ? (
		<div className={`${COMPONENT_NAME}__PrimaryAction`}>
			{primaryActionButton}
		</div>
	) : null;

	const footerActionsMarkup = primaryActionMarkup ? (
		<div className={`${COMPONENT_NAME}__FooterActions`}>
			{primaryActionMarkup}
			{secondaryActionMarkup}
		</div>
	) : null;

	const mainContentMarkup =
		titleMarkup || contentMarkup ? (
			<div className={`${COMPONENT_NAME}__MainContent`}>
				{titleMarkup}
				{contentMarkup}
				{footerActionsMarkup}
			</div>
		) : null;

	const className = cssClassNames(
		COMPONENT_NAME,
		status,
		onDismiss && "dismissible"
	);
	return (
		<div className={className}>
			{dismissButtonMarkup}
			{iconMarkup}
			{mainContentMarkup}
		</div>
	);
};

export default Alert;
