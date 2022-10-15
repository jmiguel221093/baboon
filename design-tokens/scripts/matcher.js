module.exports = function (token) {
	return (
		token.name.includes("spacing") ||
		token.name.includes("font-size") ||
		token.name.includes("line-height")
	);
};
