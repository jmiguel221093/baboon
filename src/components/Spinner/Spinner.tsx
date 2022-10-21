import { cssClassNames } from "../../utils";
import type { SpinnerProps } from "./Spinner.props";

import "./Spinner.styles.scss";

const COMPONENT_NAME = "Spinner";

const Spinner = ({ size }: SpinnerProps) => {
	const className = cssClassNames(COMPONENT_NAME, size && `size-${size}`);
	return (
		<div className={className}>
			<svg
				width={24}
				height={24}
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth={2}
				strokeDasharray="50 50"
				strokeDashoffset="-20"
				strokeLinecap="round"
			>
				<circle cx="12" cy="12" r="10" />
			</svg>
		</div>
	);
};

export default Spinner;
