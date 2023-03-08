import type { HeaderProps, DialogProps, FooterProps } from "./components";

export interface ModalProps extends HeaderProps, DialogProps, FooterProps {
	children?: React.ReactNode;
	open: boolean;
	footer?: React.ReactNode;
	trigger?: React.ReactElement | HTMLElement;
}
