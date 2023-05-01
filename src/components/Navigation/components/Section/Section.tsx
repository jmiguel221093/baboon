import { useContext } from "react";
import { cssClassNames } from "../../../../utils";
import { Button } from "../../../Button";
import { Text } from "../../../Text";
import { NavigationContext } from "../../utils";
import type { NavigationContextType } from "../../utils";

import { Item } from "../Item";
import type { NavigationSectionItemProps } from "../Item";
import type { NavigationSectionProps } from "./Section.props";

import "./Section.styles.scss";

const COMPONENT_NAME = "Navigation__Section";

const Section = ({ items, title, action }: NavigationSectionProps) => {
	const { collapsed } = useContext<NavigationContextType>(NavigationContext);

	const className = cssClassNames(COMPONENT_NAME, collapsed && "collapsed");

	const renderNavigationItem = (
		item: NavigationSectionItemProps,
		index: number
	): React.ReactNode => <Item key={index} {...item} />;

	const itemsMarkup = items ? (
		<ul className={`${COMPONENT_NAME}__Items`}>
			{items.map(renderNavigationItem)}
		</ul>
	) : null;

	const dividerMarkup =
		title || action ? (
			<div className={`${COMPONENT_NAME}__DividerWrapper`}>
				<div className={`${COMPONENT_NAME}__TitleWrapper`}>
					{title && (
						<Text
							variant="caption"
							color="neutral"
							fontWeight="semibold"
						>
							{title}
						</Text>
					)}
				</div>
				{action && (
					<div className={`${COMPONENT_NAME}__ActionWrapper`}>
						<Button
							id={action.id}
							icon={action.icon}
							clean
							onClick={action.onPress}
							disabled={action.disabled}
							onMouseEnter={action.onMouseEnter}
							onTouchStart={action.onTouchStart}
							loading={action.loading}
							danger={action.danger}
							size="extra-small"
						/>
					</div>
				)}
			</div>
		) : null;

	return (
		<div className={className}>
			{dividerMarkup}
			{itemsMarkup}
		</div>
	);
};

export default Section;
