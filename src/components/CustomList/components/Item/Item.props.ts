import type {
	ActionType,
	ActionsGroupType,
	IconType,
	ImageSourceType,
} from "../../../../types";
import type { IconProps } from "../../../Icon";

type CustomListItemActionType = ActionType & {
	style?: "primary" | "outline" | "clean" | "link";
};

export interface ItemProps {
	/** The content of the Item */
	children?: React.ReactNode;
	/** Unique identifier for each item */
	id: string;
	/** The media to be showed behind the item content */
	media?: {
		source: IconType | ImageSourceType;
		color?: IconProps["color"];
	};
	/** The button action to show next to the item content */
	action?: CustomListItemActionType;
	/** Group of actions to be displayed into a Popover */
	actionsGroup?: ActionsGroupType;
	/** The item content alignment */
	verticalAlignment?: "top" | "center" | "bottom";
}
