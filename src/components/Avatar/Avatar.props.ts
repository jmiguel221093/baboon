import type { IconType } from "../../types";

type AvatarSize =
	| "tiny"
	| "small"
	| "medium"
	| "large"
	| "extra-large"
	| "huge";

export interface AvatarProps {
	/** The icon to show when source has not been set */
	icon?: IconType;
	/** The initials of the user name to show if there is not an icon or image */
	initials?: string;
	/** The source of the image to show */
	source?: string;
	/**
	 * The size of the avatar
	 * @default "medium"
	 **/
	size?: AvatarSize;
}
