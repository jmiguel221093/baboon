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
	/** Content of the card section */
	children?: React.ReactNode;
	/** Title of the card section */
	title?: string;
	/** The actions that will be displayed in the section header as buttons */
	mainActions?: BasicIconActionType[];
	/** The actions that will be displayed in the header as contextual menu */
	actionsGroup?: ActionsGroupType;
}
