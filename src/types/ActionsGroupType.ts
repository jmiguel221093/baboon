import type { MenuListItemProps } from "../components";
import type { IconType } from "./IconType";

export type ActionsGroupType = {
	/** The icon of the button that groups the actions */
	icon?: React.ReactNode | IconType;
	/** The actions that will be grouped */
	actions?: MenuListItemProps[];
};
