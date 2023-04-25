import type { BasicIconActionType } from "../../../../types";
import type { NavigationSectionItemProps } from "../Item/Item.props";

export interface NavigationSectionProps {
	/** Items for the links list */
	items?: NavigationSectionItemProps[];
	/** The title of the section */
	title?: string;
	/** The action used in the section divider*/
	action?: BasicIconActionType;
}
