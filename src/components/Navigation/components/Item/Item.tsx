import { useContext } from "react";
import { cssClassNames, isValidIcon } from "../../../../utils";
import { Icon } from "../../../Icon";
import type {
	NavigationSectionItemProps,
	SubNavigationItemType,
} from "./Item.props";

import "./Item.styles.scss";
import { NavigationContext } from "../../utils";
import type { NavigationContextType } from "../../utils";
import { Badge } from "../../../Badge";

const COMPONENT_NAME = "Navigation__Item";

const Item = ({
	anchorProps,
	badge,
	disabled,
	icon,
	label,
	onClick,
	selected,
	truncateText,
	subItems = [],
}: NavigationSectionItemProps) => {
	const { anchorComponent, collapsed } =
		useContext<NavigationContextType>(NavigationContext);

	const className = cssClassNames(
		COMPONENT_NAME,
		selected && "selected",
		disabled && "disabled",
		collapsed && "collapsed",
		truncateText && "truncateText"
	);

	const AnchorComponent = anchorComponent || "a";

	const renderSubItem = (
		subItem: SubNavigationItemType,
		index: number
	): React.ReactNode => {
		const {
			anchorProps: subItemAnchorProps,
			disabled: subItemDisabled,
			label: subItemLabel,
			onClick: subItemOnClick,
			selected: subItemSelected,
			truncateText: subItemTruncateText,
		} = subItem;
		const subItemClassName = cssClassNames(
			`${COMPONENT_NAME}__SubItem`,
			subItemSelected && "selected",
			subItemDisabled && "disabled",
			subItemTruncateText && "truncateText"
		);
		return (
			<li key={index} className={subItemClassName}>
				<AnchorComponent
					{...subItemAnchorProps}
					onClick={subItemOnClick}
				>
					<span className={`${COMPONENT_NAME}__SubItem__Text`}>
						{subItemLabel}
					</span>
				</AnchorComponent>
			</li>
		);
	};

	const subItemsMarkup =
		subItems.length && selected && !collapsed ? (
			<ul className={`${COMPONENT_NAME}__SubItems`}>
				{subItems.map(renderSubItem)}
			</ul>
		) : null;

	const iconSource = isValidIcon(icon) ? (
		<Icon source={icon} size="tiny" color="neutral" />
	) : (
		<>{icon}</>
	);

	const iconMarkup = icon ? (
		<div className={`${COMPONENT_NAME}__IconWrapper`}>
			{iconSource as React.ReactNode}
		</div>
	) : null;

	const labelMarkup = label ? (
		<span className={`${COMPONENT_NAME}__Text`}>{label}</span>
	) : null;

	const badgeMarkup = badge ? (
		<div className={`${COMPONENT_NAME}__BadgeWrapper`}>
			<Badge>{badge}</Badge>
		</div>
	) : null;

	return (
		<li className={className}>
			<AnchorComponent {...anchorProps} onClick={onClick}>
				{iconMarkup}
				{labelMarkup}
				{badgeMarkup}
			</AnchorComponent>
			{subItemsMarkup}
		</li>
	);
};

export default Item;
