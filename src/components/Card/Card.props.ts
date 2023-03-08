import type { ActionType } from "../../types";
import type { HeaderProps } from "./components";

export interface CardProps extends HeaderProps {
	/** Content of the card */
	children?: React.ReactNode;
	/** Footer content of the card */
	footerContent?: React.ReactNode;
	/** Subtle style of the card */
	subtle?: boolean;
	/** Primary action of the card */
	primaryFooterAction?: ActionType;
	/** Secondary actions of the card */
	secondaryFooterActions?: ActionType[];
}
