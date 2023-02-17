import type { ReactNode } from "react";
import type { IconType } from "../../../../types";

export interface MenuItemProps {
	/** Text content of the action */
	content?: string;
	/** Hint to help user about the action */
	helpText?: string;
	/** Icon source */
	icon?: ReactNode | IconType;
	/** Indicates if the action is danger */
	danger?: boolean;
	/** Prefix source */
	prefix?: ReactNode;
	/** Suffix source */
	suffix?: ReactNode;
	/** Indicates if the action is disabled */
	disabled?: boolean;
	/** Callback triggered when user clicks over the action */
	onPress?: () => void;
	/** Callback triggered when mouse enters the action */
	onMouseEnter?: () => void;
	/** Callback triggered when touch starts */
	onTouchStart?: () => void;
	/** Indicates if the action is selected or active */
	active?: boolean;
	/** Unique identifier */
	id?: string;
}
