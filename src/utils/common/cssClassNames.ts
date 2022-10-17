type Falsy = boolean | undefined | null | 0;

const cssClassNames = (mainClass: string, ...classes: (string | Falsy)[]) => {
	const filteredClasses = classes
		.filter(Boolean)
		.map((clss) => `${mainClass}--${clss}`);
	filteredClasses.unshift(mainClass);
	return filteredClasses.join(" ");
};

export default cssClassNames;
