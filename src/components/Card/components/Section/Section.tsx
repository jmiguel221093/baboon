import { useCallback, useState } from "react";
import { cssClassNames } from "../../../../utils";
import { Button } from "../../../Button";
import { MenuList } from "../../../MenuList";
import { Popover } from "../../../Popover";
import { Stack } from "../../../Stack";
import { Text } from "../../../Text";
import type { SectionProps } from "./Section.props";

import "./Section.styles.scss";

const COMPONENT_NAME = "Card__Section";

const Section = ({
	children,
	title,
	mainActions = [],
	actionsGroup,
}: SectionProps) => {
	const [isActionsGroupOpen, setIsActionsGroupOpen] = useState(false);
	const className = cssClassNames(COMPONENT_NAME);

	const triggerActionsGroupPopover = useCallback(() => {
		setIsActionsGroupOpen((open) => !open);
	}, [actionsGroup]);

	const titleMarkup = title ? (
		<div className={`${COMPONENT_NAME}__TitleWrapper`}>
			<Text variant="subheading">{title}</Text>
		</div>
	) : null;

	const actionsGroupTrigger = actionsGroup ? (
		<Button
			icon={actionsGroup.icon}
			clean
			size="small"
			onClick={triggerActionsGroupPopover}
		/>
	) : null;

	const actionsGroupMarkup =
		actionsGroup && actionsGroupTrigger ? (
			<Popover
				open={isActionsGroupOpen}
				trigger={actionsGroupTrigger}
				onClose={triggerActionsGroupPopover}
				align="right"
			>
				<MenuList items={actionsGroup.actions} />
			</Popover>
		) : null;

	const actionsMarkup =
		actionsGroupMarkup || mainActions.length ? (
			<Stack spacing="medium">
				{actionsGroupMarkup}
				{mainActions.map((action, index) => (
					<Button
						key={action.id || index}
						{...action}
						clean
						size="small"
					/>
				))}
			</Stack>
		) : null;

	const headerMarkup =
		titleMarkup || actionsMarkup ? (
			<div className={`${COMPONENT_NAME}__Header`}>
				{titleMarkup}
				{actionsMarkup}
			</div>
		) : null;

	const contentMarkup = children ? (
		<div className={`${COMPONENT_NAME}__Body`}>{children}</div>
	) : null;

	return (
		<div className={className}>
			{headerMarkup}
			{contentMarkup}
		</div>
	);
};

export default Section;
