import type { MenuItemProps } from "./components";
import type { MenuSectionType } from "./components/Section/Section.props";

export interface MenuListProps {
	items?: readonly MenuItemProps[];
	sections?: readonly MenuSectionType[];
	onSelectItem?: (item: MenuItemProps) => void;
	title?: string;
}
