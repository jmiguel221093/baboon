import type { MenuListItemProps } from "./components";
import type { MenuSectionType } from "./components/Section/Section.props";

export interface MenuListProps {
	items?: readonly MenuListItemProps[];
	sections?: readonly MenuSectionType[];
	onSelectItem?: (item: MenuListItemProps) => void;
	title?: string;
}

export { MenuListItemProps };
