import { useCallback, useState } from "react";
import { cssClassNames } from "../../../../utils";
import { Button } from "../../../Button";
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
}: HeaderProps) => {
	const [isActionsGroupOpen, setIsActionsGroupOpen] = useState(false);
	const isHeaderInMedia = mediaImage && headerInMedia;

	const className = cssClassNames(COMPONENT_NAME);

	const triggerActionsGroupPopover = useCallback(() => {
		setIsActionsGroupOpen((open) => !open);
	}, [actionsGroup]);

	const titleMarkup =
		title || metadata ? (
			<div className={`${COMPONENT_NAME}__TitleWrapper`}>
				<Text variant="heading">{title}</Text>
				{metadata ? (
					<div className={`${COMPONENT_NAME}__MetadataWrapper`}>
						{metadata}
					</div>
				) : null}
			</div>
		) : null;

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

	const titleActionsMarkup =
		titleMarkup || actionsMarkup ? (
			<div className={`${COMPONENT_NAME}__TitleActionsWrapper`}>
				{titleMarkup}
				{actionsMarkup}
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
