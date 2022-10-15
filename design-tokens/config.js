const config = {
	source: ["tokens/**/*.json"],
	platforms: {
		scss: {
			transforms: ["name/cti/kebab", "color/rgb", "sizing/pxToRem"],
			buildPath: "build/scss/",
			basePxFontSize: 16,
			files: [
				{
					destination: "initial_variables.scss",
					format: "css/variables",
				},
			],
		},
		js: {
			transformGroup: "js",
			transforms: ["name/cti/camel", "color/rgb", "sizing/pxToRem"],
			buildPath: "build/js/",
			files: [
				{
					destination: "design-tokens.js",
					format: "javascript/es6",
				},
				{
					destination: "design-tokens.json",
					format: "json/flat",
				},
			],
		},
	},
};

module.exports = config;
