import { useCallback, useMemo } from "react";

import type { ImageProps } from "./Image.props";

const Image = ({
	alt,
	sourceSet,
	source,
	crossOrigin,
	onLoad,
	className,
	...rest
}: ImageProps) => {
	const fSourceSet = useMemo(() => {
		if (!sourceSet) {
			return null;
		}
		return sourceSet
			.map(
				({ source: ssSource, descriptor }) =>
					`${ssSource} ${descriptor}`
			)
			.join(", ");
	}, [sourceSet]);
	const handleLoad = useCallback(() => {
		if (onLoad) {
			onLoad();
		}
	}, [onLoad]);

	return (
		<img
			alt={alt}
			className={className}
			crossOrigin={crossOrigin}
			src={source}
			onLoad={handleLoad}
			{...(fSourceSet ? { srcSet: fSourceSet } : {})}
			{...rest}
		/>
	);
};

export default Image;
