export interface DialogProps {
	children?: React.ReactNode;
	/**
	 * The size of the dialog.
	 * @default "medium"
	 */
	size?: "extra-small" | "small" | "medium" | "large";
	height?: number;
}
