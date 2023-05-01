/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-extra-parens */
function getItemId<TItemType>(item: TItemType, index: number) {
	return Object.prototype.hasOwnProperty.call(item, "id")
		? (item as any).id
		: index;
}

export default getItemId;
