import { cssClassNames } from "../../utils";

import { Icon } from "../Icon";

import type { ErrorLegendProps } from "./ErrorLegend.props";

import "./ErrorLegend.styles.scss";

const COMPONENT_NAME = "ErrorLegend";

const ErrorLegend = ({ icon, message }: ErrorLegendProps) => {
	if (!message) {
		return null;
	}

	const className = cssClassNames(COMPONENT_NAME);

	const iconMarkup = icon ? (
		<div className={`${className}__IconWrapper`}>
			<Icon source={icon} />
		</div>
	) : null;

	return (
		<div className={className}>
			{iconMarkup}
			<span className={`${COMPONENT_NAME}__MessageWrapper`}>
				{message}
			</span>
		</div>
	);
};

export default ErrorLegend;
