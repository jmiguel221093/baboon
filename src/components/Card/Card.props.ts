import type { ActionType } from "../../types";
import type { HeaderProps } from "./components";

export interface CardProps extends HeaderProps {
	children: React.ReactNode;
	footerContent?: React.ReactNode;
	subtle?: boolean;
	primaryFooterAction?: ActionType;
	secondaryFooterActions?: ActionType[];
}
