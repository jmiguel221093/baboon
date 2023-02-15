import { cssClassNames } from "../../../../utils";
import { Text } from "../../../Text";
import type { SectionProps } from "./Section.props";

import "./Section.styles.scss";

const COMPONENT_NAME = "Popover__Section";

const Section = ({ children, title }: SectionProps) => {
	const className = cssClassNames(COMPONENT_NAME);

	const titleMarkup = title ? (
		<div className={`${COMPONENT_NAME}__TitleWrapper`}>
			<Text variant="label">{title}</Text>
		</div>
	) : null;

	const contentMarkup = children ? (
		<div className={`${COMPONENT_NAME}__ContentWrapper`}>{children}</div>
	) : null;

	return (
		<div className={className}>
			{titleMarkup}
			{contentMarkup}
		</div>
	);
};

export default Section;
