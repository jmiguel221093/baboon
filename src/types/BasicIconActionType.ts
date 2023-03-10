import type { IconType } from "./IconType";

export interface BasicIconActionType {
	/** Unique identifier for the action */
	id?: string;
	/** Callback triggered when actions is pressed */
	onPress?: () => void;
	/** Callback triggered when mouse enters in action */
	onMouseEnter?: () => void;
	/** Callback triggered when touch stars in action */
	onTouchStart?: () => void;
	/** If actions is disabled */
	disabled?: boolean;
	/** If actions is loading */
	loading?: boolean;
	/** The icon of the action */
	icon?: IconType;
	/** If actions is danger style */
	danger?: boolean;
}
