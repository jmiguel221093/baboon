import { cssClassNames } from "../../utils";

import { Header } from "./components";

import type { PageProps } from "./Page.props";

import "./Page.styles.scss";

const COMPONENT_NAME = "Page";

const Page = ({ children, divider, ...rest }: PageProps) => {
	const className = cssClassNames(COMPONENT_NAME);
	const bodyClassName = cssClassNames(
		`${COMPONENT_NAME}__Body`,
		divider && `divider`
	);

	const showHeader =
		rest.title ||
		rest.subtitle ||
		rest.metadata ||
		rest.breadcrumb ||
		rest.primaryAction ||
		rest.secondaryActions;

	const headerMarkup = showHeader ? <Header {...rest} /> : null;

	return (
		<div className={className}>
			{headerMarkup}
			<div className={bodyClassName}>{children}</div>
		</div>
	);
};

export default Page;
