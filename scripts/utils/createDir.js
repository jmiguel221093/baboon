/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");

const createDir = (path) => {
	fs.mkdirSync(`${process.cwd()}/${path}`, { recursive: true }, (err) => {
		if (err) {
			console.error(err);
		} else {
			// eslint-disable-next-line no-console
			console.log(`Directory ${path} created successfully!`);
		}
	});
};

module.exports = createDir;
