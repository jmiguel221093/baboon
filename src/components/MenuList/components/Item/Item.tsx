import type { ReactNode } from "react";
import { cssClassNames, isValidIcon } from "../../../../utils";
import { Icon } from "../../../Icon";
import { Text } from "../../../Text";
import type { MenuItemProps } from "./Item.props";

import "./Item.styles.scss";

const COMPONENT_NAME = "MenuList__Item";

const Item = ({
	active,
	content,
	danger,
	disabled,
	helpText,
	icon,
	onMouseEnter,
	onPress,
	onTouchStart,
	prefix,
	suffix,
}: MenuItemProps) => {
	const className = cssClassNames(
		COMPONENT_NAME,
		danger && "danger",
		disabled && "disabled",
		active && "active"
	);
	const iconSource = isValidIcon(icon) ? <Icon source={icon} /> : icon;

	const contentMarkup = content ? (
		<Text variant="subheading">{content}</Text>
	) : null;

	const helpTextMarkup = helpText ? (
		<div className={`${COMPONENT_NAME}__HelpTextWrapper`}>
			<Text variant="body" color="neutral">
				{helpText}
			</Text>
		</div>
	) : null;

	const detailsContentMarkup =
		contentMarkup || helpTextMarkup ? (
			<div className={`${COMPONENT_NAME}__details`}>
				{contentMarkup}
				{helpTextMarkup}
			</div>
		) : null;

	const iconWrapperMarkup = iconSource ? (
		<div className={`${COMPONENT_NAME}__IconWrapper`}>
			{iconSource as ReactNode}
		</div>
	) : null;

	const prefixMarkup = prefix ? (
		<div className={`${COMPONENT_NAME}__PrefixWrapper`}>
			{prefix as ReactNode}
		</div>
	) : null;

	const iconPrefixMarkup =
		iconWrapperMarkup || prefix ? (
			<div className={`${COMPONENT_NAME}__iconPrefix`}>
				{!prefix && iconWrapperMarkup}
				{prefixMarkup}
			</div>
		) : null;

	const suffixMarkup = suffix ? (
		<div className={`${COMPONENT_NAME}__SuffixWrapper`}>
			{suffix as ReactNode}
		</div>
	) : null;

	return (
		<button
			className={className}
			onClick={onPress}
			onMouseEnter={onMouseEnter}
			onTouchStart={onTouchStart}
		>
			{iconPrefixMarkup}
			{detailsContentMarkup}
			{suffixMarkup}
		</button>
	);
};

export default Item;
