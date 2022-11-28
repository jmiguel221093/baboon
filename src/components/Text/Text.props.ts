import type { ColorType, TextTagNameType } from "../../types";

type TextType =
	| "displayHuge"
	| "displayLarge"
	| "displayMedium"
	| "displaySmall"
	| "heading"
	| "subheading"
	| "body"
	| "caption"
	| "label";

type FontWeightType = "regular" | "medium" | "semibold";

type TextAlignmentType = "left" | "center" | "right" | "justify";

export interface TextProps {
	/**
	 * The DOM element name to use for the Text.
	 * @default "p"
	 */
	element?: TextTagNameType;
	/** The content to display in the component */
	children?: React.ReactNode;
	/** The type of Text to display */
	variant?: TextType;
	/** The color of the Text */
	color?: ColorType | "subtle-on-dark";
	/** The font weight of the Text */
	fontWeight?: FontWeightType;
	/** HTML id attribute */
	id?: string;
	/** Avoid overflowed text with ellipsis */
	truncated?: boolean;
	/** Hide text */
	hidden?: boolean;
	/** The alignment of the Text */
	textAlign?: TextAlignmentType;
}
