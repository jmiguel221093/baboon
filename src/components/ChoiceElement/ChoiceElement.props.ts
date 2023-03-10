import type { ErrorLegendProps } from "../ErrorLegend";

export interface ChoiceElementProps {
	/** Unique identifier for Choice */
	id: string;
	/** The label text for the Choice */
	label: React.ReactNode;
	/** Sets the Choice as disabled */
	disabled?: boolean;
	/** The error message to display */
	error?: ErrorLegendProps | boolean;
	/** Content to display inside the choice */
	children?: React.ReactNode;
	/** Hint to help user with the field */
	helpText?: React.ReactNode;
	/** Callback when mouse is over */
	onMouseEnter?: () => void;
	/** Callback when mouse is leaving */
	onMouseLeave?: () => void;
	/** Callback when the choice is selected */
	onClick?: () => void;
	/** Sets appearance to render Toggle as switch size */
	fancy?: boolean;
}
