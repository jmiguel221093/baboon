import type { IconProp, IconType } from "../../types";

type UserSize = "small" | "medium" | "large";

export interface UserProps {
	/**
	 * The icon to show when source has not been set
	 */
	userIcon: IconType;
	/**
	 * The name of the user
	 */
	username: string;
	/**
	 * The content to show below the username
	 */
	metadata?: React.ReactNode;
	/**
	 * The initials of the user name to show if there is not an icon or image
	 */
	initials?: string;
	/**
	 * The source of the image to show
	 */
	source?: string;
	/**
	 * The size of the user
	 * @default "medium"
	 */
	size?: UserSize;
	/** Weather the user action is disabled */
	disabled?: boolean;
	/**
	 * The icon to show to indicate that the user has dropdown actions
	 */
	chevronIcon?: IconProp;
	/** Component min width */
	minWidth?: number;
	/** Component max width */
	maxWidth?: number;
}
