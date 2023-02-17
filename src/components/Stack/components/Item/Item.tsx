import { cssClassNames } from "../../../../utils";

import type { ItemProps } from "./Item.props";

const COMPONENT_NAME = "Stack__Item";

const StackItem = ({ children }: ItemProps) => {
	return <div className={cssClassNames(COMPONENT_NAME)}>{children}</div>;
};

export default StackItem;
