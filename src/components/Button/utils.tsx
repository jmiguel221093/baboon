import Button from "./Button";

import type { ButtonProps } from "./Button.props";

export const getButton = (
	{ children, ...actionProps }: Partial<ButtonProps>,
	/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
	key?: any
) => (
	<Button {...actionProps} key={key}>
		{children}
	</Button>
);
