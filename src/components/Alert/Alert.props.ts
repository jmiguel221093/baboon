import type { ActionType, IconType, StatusType } from "../../types";

export interface AlertProps {
	/** Title for the Alert */
	title?: string;
	/** The Alert content */
	children?: React.ReactNode;
	/** Main action for banner */
	primaryAction?: ActionType;
	/** Secondary action for banner */
	secondaryAction?: ActionType;
	/** Callback triggered when Alert needs to be dismissed */
	onDismiss?: () => void;
	/** Custom dismiss icon for dismiss button */
	dismissIcon?: IconType;
	/** The status of the Alert */
	status?: StatusType;
	/** The icon to show at left of content */
	icon?: IconType;
}
