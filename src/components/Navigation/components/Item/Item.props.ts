import type { MouseEvent } from "react";
import type { IconType } from "../../../../types";

export type SubNavigationItemType<TAnchorType = any> = {
	/** Indicates weather the link is disabled */
	disabled?: boolean;
	/** The text for the link */
	label?: string;
	/** Indicates weather the link is selected */
	selected?: boolean;
	/** Callback triggered when the item has been pressed */
	onClick?: (event?: MouseEvent) => void;
	/** Sets the link text truncated */
	truncateText?: boolean;
	/** The props that will be passed to the anchor component */
	anchorProps?: TAnchorType;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type NavigationSectionItemProps<TAnchorType = any> = {
	/** The icon of the link */
	icon?: React.ReactNode | IconType;
	/** The text on the badge */
	badge?: string | null;
	/** The text for the link */
	label?: string;
	/** Indicates weather the link is disabled */
	disabled?: boolean;
	/** Indicates weather the link is selected */
	selected?: boolean;
	/** Callback triggered when the item has been pressed */
	onClick?: (event?: MouseEvent) => void;
	/** Sets the link text truncated */
	truncateText?: boolean;
	/** The props that will be passed to the anchor component */
	anchorProps?: TAnchorType;
	/** The sub items of the link */
	subItems?: SubNavigationItemType[];
};
