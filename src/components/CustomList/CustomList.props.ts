import type { CheckboxProps } from "../Checkbox";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface CustomListProps<TItemType = any> {
	/**  Item data to be rendered as custom list item into renderItem */
	items: TItemType[];
	/**  Function to render custom list item */
	renderItem: (item: TItemType, id: string, index: number) => React.ReactNode;
	/** Hide the items borders */
	borderless?: boolean;
	/** Lets to show a checkbox and make multi selections for items */
	onSelectionChange?: (selectedItems: string[]) => void;
	/**  List of selected items */
	selectedItems?: string[];
	/** The icon to show when checkbox is checked */
	checkIcon?: CheckboxProps["checkIcon"];
	/** Show the items spaced from each other */
	splitItems?: boolean;
}
