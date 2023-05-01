type ImageSourceSetType = {
	source: string;
	descriptor?: string;
};

export interface ImageProps extends React.HTMLProps<HTMLImageElement> {
	alt: string;
	source: string;
	crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;
	sourceSet?: ImageSourceSetType[];
	onLoad?: () => void;
	onError?: () => void;
}
