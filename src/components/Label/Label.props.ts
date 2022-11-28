import type { ActionType } from "../../types";

export interface LabelProps {
	/** The label text */
	children?: React.ReactNode;
	/** The identifier for the label */
	id?: string;
	/** The label action */
	action?: ActionType;
}
