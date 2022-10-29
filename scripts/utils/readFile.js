/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");

const readFile = async (path) => {
	const content = await fs.promises.readFile(
		`${process.cwd()}/${path}`,
		"utf8"
	);
	return content;
};

module.exports = readFile;
