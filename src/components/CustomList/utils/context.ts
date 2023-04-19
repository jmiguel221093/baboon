import { createContext } from "react";
import type { CheckboxProps } from "../../Checkbox";

export interface CustomListContextType {
	borderless?: boolean;
	onSelectionChange?: (selected: boolean, id: string) => void;
	selectedItems?: string[];
	checkIcon?: CheckboxProps["checkIcon"];
	splitItems?: boolean;
}

const CustomListContext = createContext<CustomListContextType>({});

export default CustomListContext;
