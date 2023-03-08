import { forwardRef } from "react";
import { cssClassNames } from "../../../../utils";
import type { DialogProps } from "./Dialog.props";

import "./Dialog.styles.scss";

const COMPONENT_NAME = "Modal";

const Dialog = forwardRef<HTMLDivElement, DialogProps>(
	({ children, size = "medium", height }, ref) => {
		const className = cssClassNames(
			COMPONENT_NAME,
			size,
			height && "has-height"
		);
		const styles: { [key: string]: string | number } | undefined = height
			? { "--modal-dialog-height": `${height}px` }
			: undefined;

		return (
			<div ref={ref} className={className} style={styles}>
				{children}
			</div>
		);
	}
);

export default Dialog;
