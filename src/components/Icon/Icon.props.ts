import type { ColorType, IconType } from "../../types";

export type IconSourceType = "function" | "string";

export interface IconProps {
	/** What Icon will display in the icon, SVG or string, For a good display the icon content should fit in a 24 x 24 box */
	source: IconType;
	/** The color of the icon */
	color?: ColorType;
	/** Sets a backdrop for the icon */
	backdrop?: boolean;
	/** Sets the size of the icon */
	size?: "tiny" | "small" | "medium" | "large" | "extra-large" | "huge";
	/** Applies the color by fill SVG property, is true by default */
	filled?: boolean;
	/** Applies the color by stroke SVG property */
	outlined?: boolean;
}
