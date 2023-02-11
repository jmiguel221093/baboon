import { cssClassNames } from "../../../../utils";
import { Text } from "../../../Text";
import type { TitleProps } from "./Title.props";

const COMPONENT_NAME = "Page__Title";

const Title = ({ subtitle, title }: TitleProps) => {
	const className = cssClassNames(COMPONENT_NAME);

	const titleMarkup = title ? (
		<Text variant="displayLarge" element="h1">
			{title}
		</Text>
	) : null;

	const subtitleMarkup = subtitle ? (
		<Text variant="body" element="p" color="neutral">
			{subtitle}
		</Text>
	) : null;

	const titleWrapperMarkup = titleMarkup ? (
		<div className={`${COMPONENT_NAME}__TitleWrapper`}>
			{titleMarkup}
			{subtitleMarkup}
		</div>
	) : null;

	return <div className={className}>{titleWrapperMarkup}</div>;
};

export default Title;
