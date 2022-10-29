/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");

const createFile = (path, content) => {
	fs.writeFile(`${process.cwd()}/${path}`, content, (err) => {
		if (err) {
			console.error(err);
		} else {
			// eslint-disable-next-line no-console
			console.log(`File ${path} created successfully!`);
		}
	});
};

module.exports = createFile;
