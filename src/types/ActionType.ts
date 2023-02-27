import type { IconType } from "./IconType";

export interface ActionType {
	id?: string;
	content?: string;
	onPress?: () => void;
	onMouseEnter?: () => void;
	onTouchStart?: () => void;
	disabled?: boolean;
	loading?: boolean;
	danger?: boolean;
	icon?: IconType;
}
