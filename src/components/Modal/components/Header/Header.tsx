import { cssClassNames, XIcon } from "../../../../utils";
import { Button } from "../../../Button";
import { Text } from "../../../Text";
import type { HeaderProps } from "./Header.props";

import "./Header.styles.scss";

const COMPONENT_NAME = "Modal__Header";

const Header = ({ title, onClose, closeIcon, metaData }: HeaderProps) => {
	const className = cssClassNames(COMPONENT_NAME);

	const dismissButtonMarkup = onClose ? (
		<div className={`${COMPONENT_NAME}__DismissButton`}>
			<Button
				icon={closeIcon || XIcon}
				size="small"
				clean
				onClick={onClose}
			/>
		</div>
	) : null;

	const titleActionsMarkup =
		title || metaData || dismissButtonMarkup ? (
			<div className={`${COMPONENT_NAME}__TitleActionsWrapper`}>
				<div
					// eslint-disable-next-line max-len
					className={`${COMPONENT_NAME}__TitleActionsWrapper__HeaderMainInfoWrapper`}
				>
					{metaData && (
						<div
							// eslint-disable-next-line max-len
							className={`${COMPONENT_NAME}__TitleActionsWrapper__HeaderMainInfoWrapper__MetaData`}
						>
							{typeof metaData === "string" ? (
								/* eslint-disable no-extra-parens */
								<Text variant="label" color="neutral">
									{metaData}
								</Text>
							) : (
								metaData
							)}
						</div>
						/* eslint-enable no-extra-parens */
					)}
					{title && <Text variant="displaySmall">{title}</Text>}
				</div>
				{dismissButtonMarkup}
			</div>
		) : null;

	return <div className={className}>{titleActionsMarkup}</div>;
};

export default Header;
