import { Children, useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import { cssClassNames } from "../../utils";

import { Section } from "./components";
import { setPosition } from "./utils";
import type { PopoverProps } from "./Popover.props";

import "./Popover.styles.scss";

const COMPONENT_NAME = "Popover";

const Popover = ({
	children,
	trigger,
	onClose,
	open,
	fullWidth = false,
	align = "left",
	fixed = false,
	borderLess,
}: PopoverProps) => {
	const popoverRef = useRef<HTMLDivElement>(null);
	const triggerRef = useRef<HTMLDivElement>(null);
	const [popoverStyle, setPopoverStyle] = useState<React.CSSProperties>({
		top: 0,
		left: 0,
	});
	const [popoverWidth, setPopoverWidth] = useState<number | undefined>();

	const className = cssClassNames(
		COMPONENT_NAME,
		fixed && "fixed",
		borderLess && "borderLess"
	);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				popoverRef.current &&
				!popoverRef.current.contains(event.target as Node) &&
				triggerRef.current &&
				event.target !== triggerRef.current.children[0] &&
				!triggerRef.current.children[0].contains(event.target as Node)
			) {
				if (onClose) {
					onClose();
				}
			}
		};
		if (open) {
			document.addEventListener("click", handleClickOutside);
		}
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [open]);

	const setPopoverPosition = useCallback(setPosition, [
		popoverRef,
		triggerRef,
		open,
	]);

	useEffect(() => {
		const handleScroll = () => {
			if (fixed) {
				return;
			}
			const popoverStyleObj = setPopoverPosition(
				triggerRef,
				popoverStyle,
				popoverRef,
				fixed,
				align
			);
			setPopoverStyle({
				...popoverStyleObj,
			});
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [fixed]);

	useEffect(() => {
		if (open && popoverRef.current) {
			const popoverStyleObj = setPopoverPosition(
				triggerRef,
				popoverStyle,
				popoverRef,
				fixed,
				align
			);
			setPopoverStyle({
				...popoverStyleObj,
			});
		}
	}, [popoverRef, open]);

	useEffect(() => {
		if (triggerRef.current && fullWidth) {
			setPopoverWidth(
				triggerRef.current.children[0].getBoundingClientRect().width
			);
		}
	}, [fullWidth, triggerRef]);

	useEffect(() => {
		if (
			(popoverStyle.top === 0 && popoverStyle.left === 0) ||
			!open ||
			!popoverRef.current
		) {
			return;
		}
		if (
			open &&
			!popoverRef.current.classList.contains(`${COMPONENT_NAME}--open`)
		) {
			popoverRef.current.classList.add(`${COMPONENT_NAME}--open`);
		}
		return () => {
			if (
				!open &&
				popoverRef.current?.classList.contains(
					`${COMPONENT_NAME}--open`
				)
			) {
				popoverRef.current?.classList.remove(`${COMPONENT_NAME}--open`);
			}
		};
	}, [open, popoverRef, popoverStyle]);

	return (
		<>
			<div ref={triggerRef}>{Children.only(trigger as ReactNode)}</div>
			{open &&
				createPortal(
					<div
						className={className}
						ref={popoverRef}
						style={{
							...popoverStyle,
							width: popoverWidth,
						}}
					>
						<div className={`${COMPONENT_NAME}__Body`}>
							{children}
						</div>
					</div>,
					document.body
				)}
		</>
	);
};

Popover.Section = Section;

export default Popover;
