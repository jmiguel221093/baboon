import { Children } from "react";
import { cssClassNames, isComponentTypeOf } from "../../utils";

import { Item } from "./components";
import { CustomListContext, getItemId } from "./utils";
import type { CustomListContextType } from "./utils";

import type { CustomListProps } from "./CustomList.props";

import "./CustomList.styles.scss";

const COMPONENT_NAME = "CustomList";

const CustomList = function CustomList<TItemType>({
	items,
	renderItem,
	borderless,
	splitItems,
	onSelectionChange,
	selectedItems,
	checkIcon,
}: CustomListProps<TItemType>) {
	const className = cssClassNames(
		COMPONENT_NAME,
		borderless && "borderless",
		splitItems && "split-items"
	);

	const hasItems = items && items.length > 0;

	const renderItemElement = (item: TItemType, index: number) => {
		const itemId = getItemId(item, index);
		const itemComponent = renderItem(item, itemId, index);
		if (
			process.env.NODE_ENV === "development" &&
			!isComponentTypeOf(itemComponent, Item)
		) {
			console.warn(
				"CustomList: renderItem must return a CustomList.Item component"
			);
		}
		return itemComponent;
	};

	const handleSelectionChange = (selected: boolean, id: string) => {
		if (!selectedItems || !onSelectionChange) {
			return;
		}
		let newSelectedItems = [...selectedItems];
		const selectedIds: string[] = [id];
		newSelectedItems = [...new Set([...newSelectedItems, ...selectedIds])];
		if (!selected) {
			newSelectedItems = newSelectedItems.filter(
				(selectedId) => selectedId !== id
			);
		}
		onSelectionChange(newSelectedItems);
	};

	const listMarkup = hasItems ? (
		<ul className={className}>
			{Children.toArray(items.map(renderItemElement))}
		</ul>
	) : null;

	const context: CustomListContextType = {
		borderless,
		onSelectionChange: handleSelectionChange,
		selectedItems,
		checkIcon,
		splitItems,
	};

	return (
		<CustomListContext.Provider value={context}>
			{listMarkup}
		</CustomListContext.Provider>
	);
};

CustomList.Item = Item;

export default CustomList;
