import type { ErrorType, IconType } from "../../types";
import type { LabelProps } from "../Label";

type ErrorLegendType = {
	message?: ErrorType;
	icon?: IconType;
};

export interface LabelledFieldProps {
	/** The label of the field */
	label: React.ReactNode;
	/** The content of the LabelledField */
	children: React.ReactNode;
	/** The error message which will be displayed below the content */
	error?: ErrorLegendType;
	/** The hint text which will be displayed below the content */
	helpText?: string;
	/** The action next to label text */
	action?: LabelProps["action"];
	/** The id of the field */
	id?: LabelProps["id"];
}
