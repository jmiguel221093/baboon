import { cssClassNames } from "../../../../utils";
import { Text } from "../../../Text";
import { Item } from "../Item";
import type { MenuSectionProps } from "./Section.props";

const COMPONENT_NAME = "MenuList__Section";

const Section = ({ section, onSelectItem }: MenuSectionProps) => {
	const { title, items } = section;
	const className = cssClassNames(COMPONENT_NAME);

	const titleMarkup = title ? (
		<div className={`${COMPONENT_NAME}__Title`}>
			<Text variant="label">{title}</Text>
		</div>
	) : null;

	const itemsMarkup = items?.map(({ id, ...rest }, index) => {
		const onPress = () => {
			if (onSelectItem) {
				onSelectItem({ id, ...rest });
			}
			if (rest.onPress) {
				rest.onPress();
			}
		};
		return (
			<li key={id || index}>
				<Item {...rest} onPress={onPress} />
			</li>
		);
	});

	return (
		<div className={className}>
			{titleMarkup}
			<ul>{itemsMarkup}</ul>
		</div>
	);
};

export default Section;
