import { cssClassNames, isValidIcon } from "../../utils";
import { Icon } from "../Icon";
import { Image } from "../Image";

import type { AvatarProps } from "./Avatar.props";

import "./Avatar.styles.scss";

const COMPONENT_NAME = "Avatar";

const Avatar = ({ icon, initials, size = "medium", source }: AvatarProps) => {
	const className = cssClassNames(COMPONENT_NAME, size);

	const iconSource = isValidIcon(icon) ? <Icon source={icon} /> : icon;

	const initialsMarkup = initials ? (
		<span className={`${COMPONENT_NAME}__Initials`}>
			<svg viewBox="0 0 40 40">
				<text
					x="50%"
					y="50%"
					textAnchor="middle"
					fill="currentColor"
					dy="0.35em"
				>
					{initials}
				</text>
			</svg>
		</span>
	) : null;

	const iconMarkup = iconSource ? (
		<span className={`${COMPONENT_NAME}__Icon`}>
			{iconSource as React.ReactNode}
		</span>
	) : null;

	const imageMarkup = source ? (
		<Image
			className={`${COMPONENT_NAME}__Image`}
			source={source}
			alt=""
			role="presentation"
		/>
	) : null;

	return (
		<span role="img" className={className}>
			{imageMarkup || iconMarkup || initialsMarkup}
		</span>
	);
};

export default Avatar;
