import { cssClassNames, isValidIcon, XIcon } from "../../utils";
import { Button } from "../Button";
import { Icon } from "../Icon";
import { Thumbnail } from "../Thumbnail";

import type { TagProps } from "./Tag.props";

import "./Tag.styles.scss";

const COMPONENT_NAME = "Tag";

const Tag = ({
	children,
	disabled,
	link,
	onClick,
	onRemove,
	removeIcon,
	thumbnailSource,
	icon,
}: TagProps) => {
	const className = cssClassNames(
		COMPONENT_NAME,
		onRemove && "removable",
		disabled && "disabled",
		link && "link",
		thumbnailSource && "with-thumbnail"
	);

	const iconSource = isValidIcon(icon) ? <Icon source={icon} /> : icon;

	const thumbnailMarkup = thumbnailSource ? (
		<div className={`${COMPONENT_NAME}__ThumbnailWrapper`}>
			<Thumbnail source={thumbnailSource} borderless fit="cover" />
		</div>
	) : null;

	const iconMarkup =
		!thumbnailSource && icon ? (
			<span className={`${COMPONENT_NAME}__IconWrapper`}>
				{iconSource as React.ReactNode}
			</span>
		) : null;

	const removeButton = onRemove ? (
		<div className={`${COMPONENT_NAME}__RemoveButtonWrapper`}>
			<Button
				icon={removeIcon || XIcon}
				size="extra-small"
				onClick={onRemove}
				disabled={disabled}
			/>
		</div>
	) : null;

	const tagContent = (
		<span className={`${COMPONENT_NAME}__Text`}>{children}</span>
	);

	const mediaMarkup = iconMarkup || thumbnailMarkup;

	if (onClick) {
		return (
			<button
				type="button"
				className={className}
				onClick={onClick}
				disabled={disabled}
			>
				{mediaMarkup}
				{tagContent}
			</button>
		);
	}

	return (
		<span className={className}>
			{mediaMarkup}
			{tagContent}
			{removeButton}
		</span>
	);
};

export default Tag;
