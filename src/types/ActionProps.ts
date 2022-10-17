export interface ActionProps {
	/** Unique identifier for the action */
	id?: string;
	/** Allows a button to execute form onSubmit event */
	submit?: boolean;
	/** Disables the button */
	disabled?: boolean;
	/** Shows a spinner over button content when an action is performed in background */
	loading?: boolean;
	/** Sets button style in hovered state */
	hovered?: boolean;
	/** Sets button style in pressed state */
	pressed?: boolean;
	/** Sets button style in focused state */
	focused?: boolean;
	/** Callback triggered when button is clicked */
	onClick?: boolean;
	/** Callback triggered when button is focused */
	onFocus?: boolean;
	/** Callback triggered when button is blurred */
	onBlur?: boolean;
	/** Callback triggered when button has registered keypress event */
	onKeyPress?: boolean;
	/** Callback triggered when button has registered keyup event */
	onKeyUp?: boolean;
	/** Callback triggered when button has registered keydown event */
	onKeyDown?: boolean;
	/** Callback triggered when mouse enters to button surface */
	onMouseEnter?: boolean;
	/** Callback triggered when mouse leaves the button surface */
	onMouseLeave?: boolean;
	/** Callback triggered when button is touched */
	onTouchStart?: boolean;
	/** Callback triggered when touch ends */
	onTouchEnd?: boolean;
}
