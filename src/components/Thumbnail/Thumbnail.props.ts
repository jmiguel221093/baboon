type Size = "small" | "medium" | "large" | "extra-large";

export interface ThumbnailProps {
	/**
	 * The size of the thumbnail
	 * @default "medium"
	 */
	size?: Size;
	/** Url source of the image */
	source: string | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
	/** Alt attribute for img element */
	alt?: string;
	/** Hide the border of the Thumbnail */
	borderless?: boolean;
	/** Image fit */
	fit?: "cover" | "contain";
	/** Sets circle shape to thumbnail */
	circle?: boolean;
}
