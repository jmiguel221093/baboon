const FONT_BASE = 16;
const DECIMAL_RULE = 4;

module.exports = function (token) {
	let remValue = parseInt(token.value) / FONT_BASE;
	remValue = remValue.toString().split(".");
	if (remValue.length > 1 && remValue[1].length > DECIMAL_RULE) {
		return `${parseFloat(remValue.join(".")).toFixed(DECIMAL_RULE)}rem`;
	}
	return `${remValue.join(".")}rem`;
};
