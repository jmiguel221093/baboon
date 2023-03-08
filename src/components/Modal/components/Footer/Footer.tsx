import { cssClassNames } from "../../../../utils";
import { Button } from "../../../Button";
import type { FooterProps } from "./Footer.props";

import "./Footer.styles.scss";

const COMPONENT_NAME = "Modal__Footer";

const Footer = ({
	children,
	primaryAction,
	secondaryActions = [],
}: FooterProps) => {
	const className = cssClassNames(
		COMPONENT_NAME,
		secondaryActions.length > 1 && "MultipleActions"
	);

	const secondaryActionsMarkup = secondaryActions ? (
		<>
			{secondaryActions.map((action, index) => (
				<Button
					key={action.id || index}
					onClick={action.onPress}
					outline
					{...action}
				>
					{action.content}
				</Button>
			))}
		</>
	) : null;

	const primaryActionMarkup = primaryAction ? (
		<Button primary onClick={primaryAction.onPress} {...primaryAction}>
			{primaryAction.content}
		</Button>
	) : null;

	const actionsMarkup =
		primaryAction || secondaryActionsMarkup ? (
			<div className={`${COMPONENT_NAME}__ActionsWrapper`}>
				{secondaryActionsMarkup}
				{primaryActionMarkup}
			</div>
		) : null;

	const contentMarkup = (
		<div className={`${COMPONENT_NAME}__ContentWrapper`}>{children}</div>
	);

	return (
		<div className={className}>
			{contentMarkup}
			{actionsMarkup}
		</div>
	);
};

export default Footer;
