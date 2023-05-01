function isComponentTypeof(component: React.FunctionComponent, type: string) {
	if (!component) {
		return false;
	}
	if (typeof component !== "function") {
		return false;
	}
	const Component = component({ ...component.defaultProps });
	if (!Component) {
		return false;
	}
	return Component.type === type;
}

export default isComponentTypeof;
