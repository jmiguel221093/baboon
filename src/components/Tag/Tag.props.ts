import type { IconType } from "../../types";

export interface TagProps {
	children?: React.ReactNode;
	disabled?: boolean;
	onClick?: () => void;
	onRemove?: () => void;
	link?: string;
	removeIcon?: React.ReactNode | IconType;
	thumbnailSource?: string;
	icon?: React.ReactNode | IconType;
}
