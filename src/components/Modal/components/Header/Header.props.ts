import type { IconType } from "../../../../types";

export interface HeaderProps {
	title?: string;
	onClose?: () => void;
	closeIcon?: React.ReactNode | IconType;
	metaData?: React.ReactNode;
}
