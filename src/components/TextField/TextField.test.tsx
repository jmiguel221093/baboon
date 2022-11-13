import { screen, render } from "@testing-library/react";
import TextField from "./TextField";

describe("TextField", () => {
	it("should be mounted", () => {
		render(<TextField />);
		expect(screen).toBeTruthy();
	});
});
