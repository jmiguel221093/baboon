const StyleDictionary = require("style-dictionary");
const matcher = require("./matcher");
const transformer = require("./transformer");
const { designTokens, breakpoints } = require("../config");

const StyleDictionaryBase = StyleDictionary.extend(designTokens);
const StyleDictionaryBreakpoints = StyleDictionary.extend(breakpoints);

StyleDictionaryBase.registerTransform({
	name: "sizing/pxToRem",
	type: "value",
	transitive: true,
	matcher: matcher,
	transformer: transformer,
});

StyleDictionaryBase.registerTransformGroup({
	name: "tokens-scss",
	transforms: ["name/cti/kebab", "color/rgb", "sizing/pxToRem"],
});

StyleDictionaryBase.buildPlatform("scss");
StyleDictionaryBase.buildPlatform("js");

StyleDictionaryBreakpoints.buildPlatform("scss");
