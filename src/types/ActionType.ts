export interface ActionType {
	id?: string;
	content?: string;
	onPress?: () => void;
	onMouseEnter?: () => void;
	onTouchStart?: () => void;
	disabled?: boolean;
	loading?: boolean;
}
