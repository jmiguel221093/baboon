import type { ReactNode } from "react";
import type { ActionType, IconType } from "../../types";

export interface EmptyStateProps {
	/** The title of the empty state */
	title?: string;
	/** The Icon item to be rendered above the title */
	icon?: ReactNode | IconType;
	/** The content of the empty state */
	children?: ReactNode;
	/** The primary action of the empty state */
	primaryAction?: ActionType;
	/** The secondary action of the empty state */
	secondaryAction?: ActionType;
	/** The tertiary action of the empty state */
	tertiaryAction?: ActionType;
}
