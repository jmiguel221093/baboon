import StyleDictionary from "style-dictionary";

StyleDictionary.registerFileHeader({
	name: "initialMessage",
	fileHeader: (defaultMessage) => {
		// defaultMessage are the 2 lines above that appear in the default file header
		// you can use this to add a message before or after the default message 👇

		// the fileHeader function should return an array of strings
		// which will be formatted in the proper comment style for a given format
		return [...defaultMessage];
	},
});

module.exports = {
	source: ["tokens/**/*.json"],
	platforms: {
		scss: {
			transformGroup: "scss",
			transforms: ["size/rem", "name/cti/kebab", "color/rgba"],
			buildPath: "build/scss/",
			files: [
				{
					destination: "initial_variables.scss",
					format: "scss/variables",
					options: {
						fileHeader: "initialMessage",
					},
				},
			],
		},
		js: {
			transformGroup: "js",
			transforms: ["size/rem", "name/cti/camel", "color/rgba"],
			buildPath: "build/js/",
			files: [
				{
					destination: "design-tokens.js",
					format: "javascript/es6",
					options: {
						fileHeader: "initialMessage",
					},
				},
				{
					destination: "design-tokens.json",
					format: "json/flat",
					options: {
						fileHeader: "initialMessage",
					},
				},
			],
		},
	},
};
