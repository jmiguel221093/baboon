import { cssClassNames } from "../../utils";
import { Button } from "../Button";
import { Stack } from "../Stack";

import type { CardProps } from "./Card.props";

import "./Card.styles.scss";
import { Header, Section } from "./components";

const COMPONENT_NAME = "Card";

const Card = ({
	children,
	footerContent,
	subtle,
	primaryFooterAction,
	secondaryFooterActions,
	...rest
}: CardProps) => {
	const className = cssClassNames(COMPONENT_NAME, subtle && "subtle");

	const {
		title,
		metadata,
		mainActions,
		actionsGroup,
		mediaImage,
		headerInMedia,
	} = rest;
	const headerMarkup = title ? (
		<Header
			title={title}
			mainActions={mainActions}
			actionsGroup={actionsGroup}
			mediaImage={mediaImage}
			headerInMedia={headerInMedia}
			metadata={metadata}
		/>
	) : null;

	const contentMarkup = children ? (
		<div className={`${COMPONENT_NAME}__Body`}>{children}</div>
	) : null;

	const footerBody = footerContent ? (
		<div className={`${COMPONENT_NAME}__Footer__Body`}>{footerContent}</div>
	) : null;

	const primaryFooterActionMarkup = primaryFooterAction ? (
		<div className={`${COMPONENT_NAME}__PrimaryFooterActionWrapper`}>
			<Button
				{...primaryFooterAction}
				fullWidth
				onClick={primaryFooterAction.onPress}
				primary
			>
				{primaryFooterAction.content}
			</Button>
		</div>
	) : null;

	const secondaryActionsClassName = cssClassNames(
		`${COMPONENT_NAME}__SecondaryFooterActionsWrapper`,
		secondaryFooterActions &&
			secondaryFooterActions.length > 1 &&
			"multiple"
	);

	const secondaryActionsMarkup = secondaryFooterActions ? (
		<div className={secondaryActionsClassName}>
			<Stack spacing="medium" distribution="fill">
				{secondaryFooterActions.map((action, index) => (
					<Button
						key={action.id || index}
						{...action}
						onClick={action.onPress}
						outline
					>
						{action.content}
					</Button>
				))}
			</Stack>
		</div>
	) : null;

	const footerActionsMarkup =
		primaryFooterActionMarkup || secondaryActionsMarkup ? (
			<div className={`${COMPONENT_NAME}__Footer__Actions`}>
				{secondaryActionsMarkup}
				{primaryFooterActionMarkup}
			</div>
		) : null;

	const footerMarkup =
		footerContent || footerActionsMarkup ? (
			<div className={`${COMPONENT_NAME}__Footer`}>
				{footerBody}
				{footerActionsMarkup}
			</div>
		) : null;

	return (
		<div className={className}>
			{headerMarkup}
			{contentMarkup}
			{footerMarkup}
		</div>
	);
};

Card.Section = Section;

export default Card;
