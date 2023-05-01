import type { NavigationSectionItemProps } from "./components";

export interface NavigationProps {
	/** The logo component to be showed on the top */
	logo?: React.ReactNode;
	/** The collapsed logo component to be showed on the top when the navigation is collapsed */
	collapsedLogo?: React.ReactNode;
	/** The link items to be rendered as children */
	children?: React.ReactNode;
	/** The anchor component to be used to render all the navigation links components */
	anchorComponent?: React.FunctionComponent;
	/** The links section to be showed at the bottom */
	userNavigation: NavigationSectionItemProps[];
	/** Sets the navigation as collapsed */
	collapsed?: boolean;
}
