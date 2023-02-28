import type { ReactNode } from "react";
import type { BasicIconActionType, IconType } from "../../../../types";

import type { MenuListItemProps } from "../../../MenuList";

type ActionsGroupType = {
	/** The icon of the button that groups the actions */
	icon?: ReactNode | IconType;
	/** The actions that will be grouped */
	actions?: MenuListItemProps[];
};

type CardMediaImageType = {
	source: string;
	alt?: string;
};

export interface HeaderProps {
	title?: string;
	metadata?: ReactNode;
	actionsGroup?: ActionsGroupType;
	mainActions?: BasicIconActionType[];
	mediaImage?: CardMediaImageType;
	headerInMedia?: boolean;
	icon?: ReactNode | IconType;
}
