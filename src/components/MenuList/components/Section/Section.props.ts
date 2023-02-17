import type { MenuItemProps } from "../Item";

export interface MenuSectionType {
	/** Title of the section */
	title?: string;
	/** Items of the section */
	items?: readonly MenuItemProps[];
}

export interface MenuSectionProps {
	/** Section props */
	section: MenuSectionType;
	/** Callback triggered when an items is selected */
	onSelectItem?: (item: MenuItemProps) => void;
}
