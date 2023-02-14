import { Children, useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import { cssClassNames } from "../../utils";

import type { PopoverProps } from "./Popover.props";

import "./Popover.styles.scss";

const COMPONENT_NAME = "Popover";

const Popover = ({
	children,
	trigger,
	onClose,
	open,
	fullWidth,
	align = "left",
	fixed,
}: PopoverProps) => {
	const popoverRef = useRef<HTMLDivElement>(null);
	const triggerRef = useRef<HTMLDivElement>(null);
	const [popoverStyle, setPopoverStyle] = useState<React.CSSProperties>({
		top: 0,
		left: 0,
		width: undefined,
	});

	const triggerRect = triggerRef.current?.children[0].getBoundingClientRect();

	const className = cssClassNames(COMPONENT_NAME, fixed && "fixed");

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

	const setAlignment = useCallback(
		(popoverWidth: number) => {
			if (!triggerRect) {
				return;
			}
			if (align === "left") {
				return triggerRect.left;
			}
			if (align === "center") {
				return (
					triggerRect.left + triggerRect.width / 2 - popoverWidth / 2
				);
			}
			if (align === "right") {
				return triggerRect.left + triggerRect.width - popoverWidth;
			}
		},
		[align, open]
	);

	useEffect(() => {
		if (open && popoverRef.current && triggerRect) {
			const popoverStyleObj = structuredClone(popoverStyle);
			const popoverWidth = popoverRef.current.offsetWidth;
			const popoverHeight = popoverRef.current.offsetHeight;
			popoverStyleObj.top = triggerRect.bottom;
			popoverStyleObj.left = setAlignment(popoverWidth);
			if (window.innerHeight < triggerRect.bottom + popoverHeight) {
				popoverStyleObj.top =
					triggerRect.top - popoverHeight + window.pageYOffset;
			}
			if (fullWidth) {
				popoverStyleObj.width = triggerRect.width;
				popoverStyleObj.left = triggerRect.left;
			}
			setPopoverStyle({ ...popoverStyleObj });
		}
	}, [popoverRef, open]);

	return (
		<>
			<div ref={triggerRef}>{trigger as ReactNode}</div>
			{open &&
				createPortal(
					<div
						className={className}
						ref={popoverRef}
						style={popoverStyle}
					>
						{Children.only(children)}
					</div>,
					document.body
				)}
		</>
	);
};

export default Popover;
