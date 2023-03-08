import {
	Children,
	useCallback,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import { cssClassNames } from "../../utils";

import { Dialog, Header, Footer } from "./components";

import type { ModalProps } from "./Modal.props";

import "./Modal.styles.scss";

const COMPONENT_NAME = "Modal";

const Modal = ({ children, open, size, footer, ...rest }: ModalProps) => {
	const [isScrollableAtBottom, setIsScrollableAtBottom] = useState(true);
	const dialogRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);

	let modalDialog: React.ReactNode = undefined;

	const calculateScrollableAtBottom = () => {
		if (contentRef.current) {
			const { scrollTop, clientHeight, scrollHeight } =
				contentRef.current;
			const isEndReached = scrollTop + clientHeight === scrollHeight;
			if (isEndReached) {
				setIsScrollableAtBottom(true);
			} else {
				setIsScrollableAtBottom(false);
			}
		}
	};

	useEffect(() => {
		if (open) {
			document.body.classList.add(`${COMPONENT_NAME}--open`);
		} else {
			document.body.classList.remove(`${COMPONENT_NAME}--open`);
		}
		return () => {
			document.body.classList.remove(`${COMPONENT_NAME}--open`);
		};
	}, [open]);

	useEffect(() => {
		window.addEventListener("resize", calculateScrollableAtBottom);
		return () => {
			window.removeEventListener("resize", calculateScrollableAtBottom);
		};
	}, []);

	useLayoutEffect(() => {
		calculateScrollableAtBottom();
	}, [open]);

	const handleScroll = useCallback(() => {
		calculateScrollableAtBottom();
	}, [open]);

	if (open) {
		const {
			title,
			onClose,
			closeIcon,
			metaData,
			primaryAction,
			secondaryActions,
			height,
		} = rest;
		const isHeaderVisible =
			title ||
			(closeIcon && onClose) ||
			(!closeIcon && onClose) ||
			metaData;
		const headerMarkup = isHeaderVisible ? (
			<Header
				metaData={metaData}
				title={title}
				onClose={onClose}
				closeIcon={closeIcon}
			/>
		) : null;

		const isFooterVisible = footer || primaryAction || secondaryActions;

		const footerMarkup = isFooterVisible ? (
			<Footer
				primaryAction={primaryAction}
				secondaryActions={secondaryActions}
			>
				{footer}
			</Footer>
		) : null;

		const containerRefClassName = cssClassNames(
			`${COMPONENT_NAME}__BodyWrapper`,
			isScrollableAtBottom && "end"
		);

		const contentMarkup = children ? (
			<div
				ref={contentRef}
				className={containerRefClassName}
				onScroll={handleScroll}
			>
				{children}
			</div>
		) : null;

		modalDialog = (
			<Dialog ref={dialogRef} size={size} height={height}>
				{headerMarkup}
				{contentMarkup}
				{footerMarkup}
			</Dialog>
		);
	}

	const portalMarkup = open ? (
		<>
			{createPortal(
				<div className={`${COMPONENT_NAME}__MainContainer`}>
					<CSSTransition
						nodeRef={dialogRef}
						in={open}
						timeout={{
							enter: 0,
							exit: 0,
						}}
						appear
						classNames={`${COMPONENT_NAME}`}
					>
						{modalDialog}
					</CSSTransition>
					<CSSTransition
						in={open}
						timeout={{
							enter: 0,
							exit: 300,
						}}
						appear
						classNames={`${COMPONENT_NAME}__Backdrop`}
					>
						<div
							className={`${COMPONENT_NAME}__Backdrop`}
							onClick={rest.onClose}
						></div>
					</CSSTransition>
				</div>,
				document.body
			)}
		</>
	) : null;

	return (
		<>
			{rest.trigger
				? Children.only(rest.trigger as React.ReactNode)
				: null}
			{portalMarkup}
		</>
	);
};

export default Modal;
