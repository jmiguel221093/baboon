module.exports = {
	testEnvironment: "jsdom",
	moduleNameMapper: {
		"^.+\\.(css|less|scss)$": "babel-jest",
	},
	setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};
