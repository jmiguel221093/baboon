import { isValidElement } from "react";

export const isComponentTypeOf = <TProps>(
	childComponent: React.ReactNode | null | undefined,
	parentComponent: React.ComponentType<TProps> | React.ComponentType<TProps>[]
): boolean => {
	if (
		childComponent === null ||
		!isValidElement(childComponent) ||
		typeof childComponent === "string"
	) {
		return false;
	}
	const { type: childComponentType } = childComponent;
	const Components = Array.isArray(parentComponent)
		? parentComponent
		: [parentComponent];
	const type = childComponent.props?.__type__ || childComponentType;
	return Components.some(
		(Component) => typeof type !== "string" && type === Component
	);
};
