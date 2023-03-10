import type { ActionType } from "../../../../types";

export interface FooterProps {
	primaryAction?: ActionType;
	secondaryActions?: ActionType[];
	children?: React.ReactNode;
}
