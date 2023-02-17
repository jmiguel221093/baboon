import { cssClassNames } from "../../utils";
import { Icon } from "../Icon";

import type { ThumbnailProps } from "./Thumbnail.props";

import "./Thumbnail.styles.scss";

const COMPONENT_NAME = "Thumbnail";

const Thumbnail = ({
	alt,
	source,
	size = "medium",
	borderless,
	fit = "cover",
	circle,
}: ThumbnailProps) => {
	const className = cssClassNames(
		COMPONENT_NAME,
		size,
		borderless && `borderless`,
		fit,
		circle && `circle`
	);

	const contentMarkup =
		typeof source === "string" ? (
			<img alt={alt} src={source} />
		) : (
			<Icon source={source} />
		);

	return <span className={className}>{contentMarkup}</span>;
};

export default Thumbnail;
