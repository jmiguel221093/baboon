import { useCallback, useState } from "react";
import { cssClassNames, isValidIcon } from "../../../../utils";
import { Button } from "../../../Button";
import { Icon } from "../../../Icon";
import { MenuList } from "../../../MenuList";
import { Popover } from "../../../Popover";
import { Stack } from "../../../Stack";
import { Text } from "../../../Text";
import type { HeaderProps } from "./Header.props";

import "./Header.styles.scss";

const COMPONENT_NAME = "Card__Header";

const Header = ({
	title,
	metadata,
	mainActions = [],
	actionsGroup,
	mediaImage,
	headerInMedia,
	icon,
}: HeaderProps) => {
	const [isActionsGroupOpen, setIsActionsGroupOpen] = useState(false);
	const isHeaderInMedia = mediaImage && headerInMedia;

	/* eslint-disable no-extra-parens */
	const iconSource = isValidIcon(icon) ? (
		<Icon source={icon} backdrop color="neutral" size="extra-large" />
	) : (
		icon
	);
	/* eslint-enable no-extra-parens */

	const className = cssClassNames(
		COMPONENT_NAME,
		isHeaderInMedia && "header-in-media"
	);

	const triggerActionsGroupPopover = useCallback(() => {
		setIsActionsGroupOpen((open) => !open);
	}, [actionsGroup]);

	const actionsGroupTrigger = actionsGroup ? (
		<Button
			icon={actionsGroup.icon}
			clean
			size="small"
			onClick={triggerActionsGroupPopover}
		/>
	) : null;

	const actionsGroupMarkup =
		actionsGroup && actionsGroupTrigger ? (
			<Popover
				open={isActionsGroupOpen}
				trigger={actionsGroupTrigger}
				onClose={triggerActionsGroupPopover}
				align="right"
			>
				<MenuList items={actionsGroup.actions} />
			</Popover>
		) : null;

	const actionsMarkup =
		actionsGroupMarkup || mainActions.length ? (
			<Stack spacing="medium">
				{actionsGroupMarkup}
				{mainActions.map((action, index) => (
					<Button
						key={action.id || index}
						{...action}
						clean
						size="small"
					/>
				))}
			</Stack>
		) : null;

	const iconMarkup = icon ? (
		<div className={`${COMPONENT_NAME}__IconWrapper`}>
			{iconSource as React.ReactNode}
		</div>
	) : null;

	const titleMarkup =
		title || actionsMarkup ? (
			<div className={`${COMPONENT_NAME}__TitleWrapper`}>
				<Text variant="heading">{title}</Text>
				{actionsMarkup}
			</div>
		) : null;

	const metadataMarkup = metadata ? (
		<div className={`${COMPONENT_NAME}__MetadataWrapper`}>{metadata}</div>
	) : null;

	const titleActionsMarkup =
		titleMarkup || metadata ? (
			<div className={`${COMPONENT_NAME}__TitleActionsWrapper`}>
				{iconMarkup}
				<div className={`${COMPONENT_NAME}__HeaderMainInfoWrapper`}>
					{titleMarkup}
					{metadataMarkup}
				</div>
			</div>
		) : null;

	const mediaImageMarkup = mediaImage ? (
		<div
			className={`${COMPONENT_NAME}__MediaImageWrapper${
				isHeaderInMedia
					? ` ${COMPONENT_NAME}__MediaImageWrapper--has-content`
					: ""
			}`}
		>
			<img src={mediaImage.source} alt={mediaImage.alt || title} />
			{isHeaderInMedia && titleActionsMarkup}
		</div>
	) : null;

	return (
		<div className={className}>
			{mediaImageMarkup}
			{!isHeaderInMedia && titleActionsMarkup}
		</div>
	);
};

export default Header;
