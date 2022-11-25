import { cssClassNames } from "../../utils";
import { getButton } from "../Button";

import type { LabelProps } from "./Label.props";

import "./Label.styles.scss";

const COMPONENT_NAME = "Label";

const Label = ({ children, action, id }: LabelProps) => {
	const className = cssClassNames(COMPONENT_NAME);

	const actionMarkup = action ? (
		<div className={`${COMPONENT_NAME}__action`}>
			{getButton({
				...action,
				children: action.content,
				link: true,
				onClick: action.onPress,
			})}
		</div>
	) : null;

	return (
		<div className={className}>
			<label id={id}>{children}</label>
			{actionMarkup}
		</div>
	);
};

export default Label;
