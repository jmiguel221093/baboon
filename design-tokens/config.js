module.exports = {
	source: ["tokens/**/*.json"],
	platforms: {
		scss: {
			transformGroup: "scss",
			transforms: ["size/rem", "name/cti/kebab", "color/rgb"],
			buildPath: "build/scss/",
			files: [
				{
					destination: "initial_variables.scss",
					format: "css/variables",
				},
			],
		},
		js: {
			transformGroup: "js",
			transforms: ["size/rem", "name/cti/camel", "color/rgb"],
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
