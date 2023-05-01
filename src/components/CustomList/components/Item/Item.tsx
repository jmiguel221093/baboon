import { useCallback, useContext, useState } from "react";
import {
	cssClassNames,
	generateUUID,
	isComponentTypeof,
} from "../../../../utils";
import { Checkbox } from "../../../Checkbox";
import { CustomListContext } from "../../utils";

import type { IconType } from "../../../../types";

import type { ItemProps } from "./Item.props";

import "./Item.styles.scss";
import { Icon } from "../../../Icon";
import { Thumbnail } from "../../../Thumbnail";
import { Button, getButton } from "../../../Button";
import type { ButtonProps } from "../../../Button";
import { Popover } from "../../../Popover";
import { MenuList } from "../../../MenuList";

const COMPONENT_NAME = "CustomList__Item";

const isSelected = (id: string, selectedItems?: string[]) =>
	Boolean(
		selectedItems &&
			Array.isArray(selectedItems) &&
			selectedItems.includes(id)
	);

const mediaSourceMarkup = (media: ItemProps["media"]) => {
	if (
		media &&
		media.source &&
		isComponentTypeof(media.source as React.FunctionComponent, "svg")
	) {
		return (
			<Icon
				source={media.source as IconType}
				backdrop
				color={media.color}
				size="medium"
			/>
		);
	}
	if (media && typeof media.source === "string" && media.source !== "") {
		return (
			<Thumbnail
				source={media.source as string}
				borderless
				size="small"
			/>
		);
	}
	return null;
};

function getItemAction(action: ItemProps["action"]) {
	if (!action) {
		return null;
	}
	const actionsProps: Partial<ButtonProps> = {
		...action,
		children: action.content,
		size: "small",
	};
	if (action.style) {
		actionsProps[action.style] = true;
	}
	return (
		<div className={`${COMPONENT_NAME}__Action`}>
			{getButton(actionsProps)}
		</div>
	);
}

const Item = ({
	children,
	id,
	media,
	action,
	actionsGroup,
	verticalAlignment = "top",
}: ItemProps) => {
	const [areActionsGroupOpen, setAreActionsGroupOpen] = useState(false);

	const toggleActionsGroupPopover = useCallback(() => {
		setAreActionsGroupOpen((open) => !open);
	}, [actionsGroup]);

	const {
		borderless,
		onSelectionChange,
		selectedItems,
		checkIcon,
		splitItems,
	} = useContext(CustomListContext);
	const checkboxId = generateUUID();
	const className = cssClassNames(
		COMPONENT_NAME,
		borderless && "borderless",
		verticalAlignment && `vertical-alignment-${verticalAlignment}`,
		splitItems && "split"
	);

	const isSelectable = Boolean(
		selectedItems && (Array.isArray(selectedItems) || onSelectionChange)
	);

	const isSelectedItem = isSelected(id, selectedItems);

	const handleSelection = (checked: boolean) => {
		if (id === null || !onSelectionChange) {
			return;
		}
		onSelectionChange(checked, id);
	};

	const checkboxMarkup = isSelectable ? (
		<div className={`${COMPONENT_NAME}__CheckboxWrapper`}>
			<Checkbox
				id={checkboxId}
				checkIcon={checkIcon}
				onChange={handleSelection}
				checked={isSelectedItem}
			/>
		</div>
	) : null;

	const mediaSource = media && media.source ? mediaSourceMarkup(media) : null;

	const mediaMarkup = mediaSource ? (
		<div className={`${COMPONENT_NAME}__MediaWrapper`}>{mediaSource}</div>
	) : null;

	const selectionMediaMarkup =
		checkboxMarkup || mediaMarkup ? (
			<div className={`${COMPONENT_NAME}__SelectionMediaWrapper`}>
				{checkboxMarkup}
				{mediaMarkup}
			</div>
		) : null;

	const contentMarkup = children ? (
		<div className={`${COMPONENT_NAME}__ContentWrapper`}>{children}</div>
	) : null;

	const actionsGroupTrigger = actionsGroup ? (
		<Button
			icon={actionsGroup.icon}
			clean
			size="small"
			onClick={toggleActionsGroupPopover}
		/>
	) : null;

	const actionsGroupMarkup =
		actionsGroup && actionsGroupTrigger ? (
			<div className={`${COMPONENT_NAME}__ActionsGroupWrapper`}>
				<Popover
					open={areActionsGroupOpen}
					trigger={actionsGroupTrigger}
					onClose={toggleActionsGroupPopover}
					align="right"
				>
					<MenuList items={actionsGroup.actions} />
				</Popover>
			</div>
		) : null;

	const actionsMarkup =
		action || actionsGroup ? (
			<>
				{action && action.content && getItemAction(action)}
				{actionsGroup && actionsGroupMarkup}
			</>
		) : null;

	const mainContentMarkup =
		contentMarkup || actionsMarkup ? (
			<div className={`${COMPONENT_NAME}__MainContentWrapper`}>
				{contentMarkup}
				{actionsMarkup}
			</div>
		) : null;

	return (
		<li className={className}>
			{selectionMediaMarkup}
			{mainContentMarkup}
		</li>
	);
};

export default Item;
