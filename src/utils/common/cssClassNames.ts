const cssClassNames = (...classes: (string | boolean)[]) =>
	classes.filter(Boolean).join(" ");

export default cssClassNames;
