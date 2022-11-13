import { cssClassNames } from "../../utils";
import { Icon } from "../Icon";

import type { BadgeProps } from "./Badge.props";

import "./Badge.styles.scss";

const COMPONENT_NAME = "Badge";

const Badge = ({ children, icon, onClick, variant }: BadgeProps) => {
	const className = cssClassNames(
		COMPONENT_NAME,
		variant,
		onClick && "clickable"
	);

	const iconMarkup = icon ? (
		<span className={`${COMPONENT_NAME}__Icon`}>
			<Icon source={icon} />
		</span>
	) : null;

	return (
		<span className={className} onClick={onClick}>
			{iconMarkup}
			<span className={`${COMPONENT_NAME}__Content`}>{children}</span>
		</span>
	);
};

export default Badge;
