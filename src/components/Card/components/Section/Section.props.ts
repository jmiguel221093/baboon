import type { ReactNode } from "react";
import type { BasicIconActionType, IconType } from "../../../../types";
import type { MenuListItemProps } from "../../../MenuList";

type ActionsGroupType = {
	/** The icon of the button that groups the actions */
	icon?: ReactNode | IconType;
	/** The actions that will be grouped */
	actions?: MenuListItemProps[];
};

export interface SectionProps {
	children?: React.ReactNode;
	title?: string;
	mainActions?: BasicIconActionType[];
	actionsGroup?: ActionsGroupType;
}
