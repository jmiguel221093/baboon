import { cssClassNames, isValidIcon } from "../../utils";
import { Avatar } from "../Avatar";
import type { AvatarProps } from "../Avatar";
import { Clickable } from "../Clickable";
import { Icon } from "../Icon";
import { Text } from "../Text";

import type { UserProps } from "./User.props";

import "./User.styles.scss";

const COMPONENT_NAME = "User";

const AVATAR_SIZES = {
	small: "tiny",
	medium: "medium",
	large: "large",
};

const User = ({
	userIcon,
	username,
	initials,
	metadata,
	size,
	source,
	disabled,
	chevronIcon: chevronIconProp,
	minWidth = 200,
	maxWidth = 220,
	onBlur,
	onClick,
	onFocus,
	onKeyDown,
	onKeyPress,
	onKeyUp,
	onMouseEnter,
	onMouseLeave,
	onTouchEnd,
	onTouchStart,
}: UserProps) => {
	const chevronIcon =
		chevronIconProp && chevronIconProp.icon ? (
			<>
				{isValidIcon(chevronIconProp.icon) ? (
					<Icon
						source={chevronIconProp.icon}
						outlined={chevronIconProp.outlined}
						filled={chevronIconProp.filled}
					/>
				) : (
					<>{chevronIconProp.icon}</>
				)}
			</>
		) : null;

	const className = cssClassNames(
		COMPONENT_NAME,
		chevronIcon && "has-chevron"
	);

	const avatarMarkup =
		source || userIcon || initials ? (
			<div className={`${COMPONENT_NAME}__AvatarWrapper`}>
				<Avatar
					icon={userIcon}
					initials={initials}
					size={
						AVATAR_SIZES[
							size as keyof typeof AVATAR_SIZES
						] as AvatarProps["size"]
					}
					source={source}
				/>
			</div>
		) : null;

	const userDataMarkup =
		username || metadata ? (
			<div className={`${COMPONENT_NAME}__UserData`}>
				{username && (
					<span className={`${COMPONENT_NAME}__UsernameWrapper`}>
						<Text fontWeight="semibold" element="span">
							{username}
						</Text>
					</span>
				)}
				{metadata && (
					<span className={`${COMPONENT_NAME}__MetadataWrapper`}>
						{metadata}
					</span>
				)}
			</div>
		) : null;

	const chevronMarkup = chevronIcon ? (
		<div className={`${COMPONENT_NAME}__ChevronWrapper`}>{chevronIcon}</div>
	) : null;

	const clickableClassName = cssClassNames(`${COMPONENT_NAME}__Clickable`);

	return (
		<div
			className={className}
			style={
				{
					"--user-min-width": `${minWidth}px`,
					"--user-max-width": `${maxWidth}px`,
				} as React.CSSProperties
			}
		>
			<Clickable
				className={clickableClassName}
				disabled={disabled}
				onBlur={onBlur}
				onClick={onClick}
				onFocus={onFocus}
				onKeyDown={onKeyDown}
				onKeyPress={onKeyPress}
				onKeyUp={onKeyUp}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				onTouchEnd={onTouchEnd}
				onTouchStart={onTouchStart}
			>
				{avatarMarkup}
				{userDataMarkup}
				{chevronMarkup}
			</Clickable>
		</div>
	);
};

export default User;
