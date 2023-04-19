import type { ReactNode } from "react";
import type {
	ActionsGroupType,
	BasicIconActionType,
	IconType,
} from "../../../../types";

type CardMediaImageType = {
	source: string;
	alt?: string;
};

export interface HeaderProps {
	/** The title of the card */
	title?: string;
	/** The metadata elements to complement the card aspect */
	metadata?: ReactNode;
	/** The actions that will be displayed in the header as contextual menu */
	actionsGroup?: ActionsGroupType;
	/** The actions that will be displayed in the header as buttons */
	mainActions?: BasicIconActionType[];
	/** The image that will be displayed in the header */
	mediaImage?: CardMediaImageType;
	/** The header content will be displayed in the media image */
	headerInMedia?: boolean;
	/** The icon that will be displayed in the header */
	icon?: ReactNode | IconType;
}
