import type { ActionType, IconType } from "../../../../types";
import type { ThumbnailProps } from "../../../Thumbnail";
import type { TitleProps } from "../Title";

type BreadcrumbType = {
	icon: React.ReactNode | IconType;
	onPress: () => void;
};

export interface HeaderProps extends TitleProps {
	primaryAction?: ActionType;
	secondaryActions?: ActionType[];
	breadcrumb?: BreadcrumbType;
	/** Page metadata */
	metadata?: React.ReactNode;
	thumbnail?: ThumbnailProps;
}
