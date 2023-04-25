import type { IconType } from "./IconType";

export interface ActionType {
	/** Unique identifier for the action */
	id?: string;
	/** The content of the action */
	content?: string;
	/** Callback triggered when click on the action */
	onPress?: () => void;
	/** Callback triggered when the cursor enters to the action area */
	onMouseEnter?: () => void;
	/** Callback triggered when the actions is touched */
	onTouchStart?: () => void;
	/** Indicates weather the action is disabled */
	disabled?: boolean;
	/** Sets a loading state */
	loading?: boolean;
	/** Sets a danger appearance */
	danger?: boolean;
	/** The icon of the action */
	icon?: IconType;
}
