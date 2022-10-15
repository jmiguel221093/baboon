import type { SampleProps } from "./Sample.props";

import "./Sample.styles.scss";

const MAIN_CLASS = "Sample";

const Sample = ({ children, title }: SampleProps) => {
	const classNames = [MAIN_CLASS, title && `${MAIN_CLASS}--withTitle`]
		.filter(Boolean)
		.join(" ");

	return (
		<div className={classNames}>
			{title && <h2 className={`${MAIN_CLASS}__Title`}>{title}</h2>}
			{children}
		</div>
	);
};

export default Sample;
