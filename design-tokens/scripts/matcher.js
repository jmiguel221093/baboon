module.exports = function (token) {
	return token.name.includes("spacing") || token.name.includes("size-font");
};
