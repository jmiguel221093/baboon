import type { IconType } from "../../types";
import type { BadgeVariantType } from "./types";

export interface BadgeProps {
	/** The content rendered within the badge. */
	children?: React.ReactNode;
	variant?: BadgeVariantType;
	icon?: IconType;
	onClick?: () => void;
}
