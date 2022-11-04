const designTokens = {
	source: ["tokens/**/*.json"],
	platforms: {
		scss: {
			transforms: ["name/cti/kebab", "color/rgb", "sizing/pxToRem"],
			buildPath: "build/scss/",
			basePxFontSize: 16,
			files: [
				{
					destination: "design-tokens.scss",
					format: "css/variables",
					filter: function (token) {
						return !token.name.includes("breakpoint");
					},
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

const breakpoints = {
	source: ["tokens/**/breakpoints.json"],
	platforms: {
		scss: {
			transforms: ["name/cti/kebab"],
			buildPath: "build/scss/",
			files: [
				{
					destination: "breakpoints.scss",
					format: "scss/variables",
				},
			],
		},
	},
};

module.exports = {
	designTokens,
	breakpoints,
};
