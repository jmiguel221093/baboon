import { cssClassNames } from "../../utils";

import { Section } from "./components";
import type { NavigationProps } from "./Navigation.props";

import "./Navigation.styles.scss";
import { NavigationContext } from "./utils";
import type { NavigationContextType } from "./utils";
const COMPONENT_NAME = "Navigation";

const Navigation = ({
	children,
	logo,
	anchorComponent,
	userNavigation,
	collapsed,
	collapsedLogo,
}: NavigationProps) => {
	const className = cssClassNames(COMPONENT_NAME, collapsed && "collapsed");

	const showLogo = !collapsed ? logo : collapsedLogo;

	const logoMarkup =
		logo || collapsedLogo ? (
			<div className={`${COMPONENT_NAME}__LogoWrapper`}>{showLogo}</div>
		) : null;

	const mainContentMarkup =
		logoMarkup || children ? (
			<div className={`${COMPONENT_NAME}__MainContent`}>
				{logoMarkup}
				<div className={`${COMPONENT_NAME}__NavigationContent`}>
					{children}
				</div>
			</div>
		) : null;

	const userNavigationMarkup = userNavigation ? (
		<div className={`${COMPONENT_NAME}__UserNavigation`}>
			<Section items={userNavigation} />
		</div>
	) : null;

	const contextValue: NavigationContextType = {
		anchorComponent,
		collapsed,
	};

	return (
		<NavigationContext.Provider value={contextValue}>
			<div className={className}>
				{mainContentMarkup}
				{userNavigationMarkup}
			</div>
		</NavigationContext.Provider>
	);
};

Navigation.Section = Section;

export default Navigation;
