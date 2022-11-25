import type { ErrorType, IconType } from "../../types";

export interface ErrorLegendProps {
	/** The error text */
	message?: ErrorType;
	/** Custom icon to display behind the message */
	icon?: IconType;
}
