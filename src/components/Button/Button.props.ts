import type { ReactElement } from "react";
import type { ActionProps, IconType } from "../../types";

export interface ButtonProps extends ActionProps {
	/** Content which will be displayed inside the button */
	children?: string;
	/** Sets primary style to the button letting users identify the action as primary */
	primary?: boolean;
	/** The button will indicate that a dangerous action will be triggered */
	danger?: boolean;
	/**
	 * Sets the size of the button, changing font, margin and padding dimensions
	 * @default 'medium'
	 */
	size?: "small" | "medium" | "large";
	/** Sets outline style to the button indetifying the action as a secondary action */
	outline?: boolean;
	/** Sets clean style to the button indetifying the action in a lower priority */
	clean?: boolean;
	/** Changes the content alignment */
	textAlign?: "left" | "right" | "center" | "start" | "end";
	/** Sets the button width to fill its container space */
	fullWidth?: boolean;
	/** Gives button style to looks like a link */
	link?: boolean;
	/** Renders an icon to be displayed next to button content */
	icon?: ReactElement | IconType;
	/**
	 * Where icon will be displayed in button content
	 * @default 'left'
	 */
	iconPosition?: "left" | "right";
}
