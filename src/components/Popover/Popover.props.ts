export interface PopoverProps {
	/** Content to display in the popover */
	children?: React.ReactNode;
	/** Whether the popover is open or not */
	open?: boolean;
	/** Element to trigger the popover */
	trigger: React.ReactElement | HTMLElement;
	/** Event to detect when popover needs to be closed */
	onClose?: () => void;
	/** Fills the popover width with the trigger width size */
	fullWidth?: boolean;
	/**
	 * Whether the popover should be displayed on the left, center or right of the
	 * @default "left"
	 */
	align?: "left" | "right" | "center";
	/** Sets the popover position as fixed */
	fixed?: boolean;
}
