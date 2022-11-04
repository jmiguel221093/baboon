import type { ActionProps } from "../../types";

export interface UnstyledButtonProps extends ActionProps {
	/** The content of the button */
	children?: React.ReactNode;
	/** HTML class attribute for custom class name */
	className?: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
}
