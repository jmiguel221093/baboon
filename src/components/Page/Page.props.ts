import type { HeaderProps } from "./components";

export interface PageProps extends HeaderProps {
	/** The content of the page */
	children?: React.ReactNode;
	/** Border which divides header and content */
	divider?: boolean;
}
