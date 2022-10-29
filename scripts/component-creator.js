/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const { createDirectory, createFile, readFile } = require("./utils");

const componentFile = `import { cssClassNames } from "../../utils";

import type { %name%Props } from "./$name.props";

import "./$name.styles.scss";

const COMPONENT_NAME = "$name";

const $name = (props: %name%Props) => {
	const className = cssClassNames(COMPONENT_NAME);
	return <>$name</>
};

export default $name;
`;

const propsFile = `export interface %name%Props {}
`;

const testFile = `import { screen, render } from "@testing-library/react";
import $name from "./$name";

describe("$name", () => {
	it("should be mounted", () => {
		render(<$name />);
		expect(screen).toBeTruthy();
	});
});
`;

const stylesFile = `.$name {

}
`;

const indexFile = `import $name from "./$name";

export * from "./$name.props";
export { $name };
`;

const storyFile = `import React from "react";
import type { ComponentMeta } from "@storybook/react";

import { $name } from "../src/components";
import type { %name%Props } from "../src/components";

export default {
	title: "AllComponents/$name",
	component: $name,
} as ComponentMeta<typeof $name>;

const Template = (args: %name%Props) => <$name {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
`;

const COMPONENT_FILES = {
	component: {
		fileName: "$name.tsx",
		content: componentFile,
	},
	props: {
		fileName: "$name.props.ts",
		content: propsFile,
	},
	test: {
		fileName: "$name.test.tsx",
		content: testFile,
	},
	styles: {
		fileName: "$name.styles.scss",
		content: stylesFile,
	},
	index: {
		fileName: "index.ts",
		content: indexFile,
	},
};

const commandArgs = process.argv.slice(2);

/** Process the arguments from command line to transform as we need to create each file that component needs */

const componentName = commandArgs[0];
const hasStyles = Boolean(commandArgs[1]);

const MAIN_ROUTE = `/src/components/${componentName}`;
const STORIES_ROUTE = `stories`;

if (!fs.existsSync(`${process.cwd()}/${MAIN_ROUTE}`)) {
	createDirectory(MAIN_ROUTE);
} else {
	console.error(`Component ${componentName} already exists`);
	process.exit(1);
}
if (
	!fs.existsSync(
		`${process.cwd()}/${STORIES_ROUTE}/${componentName}.stories.tsx`
	)
) {
	const content = storyFile
		.replace(/\$name/g, componentName)
		.replace(/%name%/g, componentName);
	createFile(`${STORIES_ROUTE}/${componentName}.stories.tsx`, content);
}

const updateComponentsIndex = async () => {
	const componentExport = `export * from "./${componentName}";`;
	const componentsIndex = await readFile("/src/components/index.ts");
	const orderedComponents = componentsIndex.split("\r");
	if (orderedComponents.includes(componentExport)) {
		return;
	}
	orderedComponents.push(componentExport);
	orderedComponents.sort();

	const newContent = orderedComponents.join("\r");

	createFile("/src/components/index.ts", newContent);
};

/* Iterate each component files key to generate the file output depending on the key */
Object.keys(COMPONENT_FILES).forEach((key) => {
	if (key === "styles" && !!hasStyles) {
		return;
	}
	const { fileName, content } = COMPONENT_FILES[key];

	const fileContent = content
		.replace(/\$name/g, componentName)
		.replace(/%name%/g, componentName);

	const componentFileName = fileName.replace(/\$name/g, componentName);

	createFile(`${MAIN_ROUTE}/${componentFileName}`, fileContent);
});

updateComponentsIndex();
