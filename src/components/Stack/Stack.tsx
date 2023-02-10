import { Children, isValidElement } from "react";
import { cssClassNames } from "../../utils";

import { Item } from "./components";

import type { StackProps } from "./Stack.props";

import "./Stack.styles.scss";

const COMPONENT_NAME = "Stack";

const Stack = ({
	children,
	alignment,
	direction,
	spacing,
	distribution,
	type = "detached",
	wrap,
}: StackProps) => {
	const className = cssClassNames(
		COMPONENT_NAME,
		alignment && `alignment-${alignment}`,
		direction && `direction-${direction}`,
		spacing && `spacing-${spacing}`,
		distribution && `distribution-${distribution}`,
		type && `type-${type}`,
		wrap && `wrap`
	);

	const renderItems = (child: React.ReactNode, index: number) => {
		if (child === null) {
			return null;
		}
		const props = { key: index };
		return <Item {...props}>{child}</Item>;
	};

	const childrenArray = Children.toArray(children)
		.filter((child) => isValidElement(child))
		.map(renderItems);

	const childrenMarkup = children ? childrenArray : null;

	return <div className={className}>{childrenMarkup}</div>;
};

export default Stack;
