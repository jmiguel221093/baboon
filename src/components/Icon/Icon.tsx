import type { ReactNode } from "react";
import type { ColorType } from "../../types";

import { cssClassNames } from "../../utils";

import type { IconProps, IconSourceType } from "./Icon.props";

import "./Icon.styles.scss";

const COMPONENT_NAME = "Icon";
const COLOR_VARIANTS: ColorType[] = [
	"primary",
	"danger",
	"success",
	"warning",
	"info",
	"neutral",
	"on-dark",
];

const Icon = ({
	source,
	color,
	backdrop,
	size,
	filled = true,
	outlined,
}: IconProps) => {
	let sourceType: IconSourceType;

	if (typeof source === "function") {
		sourceType = "function";
	} else {
		sourceType = "string";
	}

	if (backdrop && color && !COLOR_VARIANTS.includes(color)) {
		console.warn(
			// eslint-disable-next-line max-len
			`The ${color} variant is not supported as an icon color. Please use one of the following: ${COLOR_VARIANTS.join(
				","
			)}`
		);
	}

	const className = cssClassNames(
		COMPONENT_NAME,
		color && `color-${color}`,
		backdrop && "backdrop",
		size && `size-${size}`,
		filled && "filled",
		outlined && "outlined",
		sourceType && `source-${sourceType}`
	);

	const Source = source;

	const StringSource = (
		<div className={`${COMPONENT_NAME}__StringSource`}>
			<span>{source as string}</span>
		</div>
	);

	const content: { [k: string]: ReactNode | string } = {
		function: <Source />,
		string: StringSource,
	};

	return <span className={className}>{content[sourceType]}</span>;
};

export default Icon;
