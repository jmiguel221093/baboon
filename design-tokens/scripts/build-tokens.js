const StyleDictionary = require("style-dictionary");
const matcher = require("./matcher");
const transformer = require("./transformer");
const config = require("../config");

const StyleDictionaryBase = StyleDictionary.extend(config);

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
