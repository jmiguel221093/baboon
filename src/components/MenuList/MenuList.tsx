import { cssClassNames } from "../../utils";

import { Section } from "./components";
import type { MenuSectionType } from "./components";
import type { MenuListProps } from "./MenuList.props";

import "./MenuList.styles.scss";

const COMPONENT_NAME = "MenuList";

const MenuList = ({
	items,
	onSelectItem,
	sections = [],
	title,
}: MenuListProps) => {
	let sectionsGroup: readonly MenuSectionType[] = [];
	if (items) {
		sectionsGroup = [{ items, title: title || undefined }, ...sections];
	} else {
		sectionsGroup = sections;
	}

	const sectionsMarkup = sectionsGroup.map((section, index) =>
		section.items?.length ? (
			<Section
				key={section.title || index}
				section={section}
				onSelectItem={onSelectItem}
			/>
		) : null
	);

	const className = cssClassNames(COMPONENT_NAME);

	return <div className={className}>{sectionsMarkup}</div>;
};

export default MenuList;
