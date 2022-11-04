import { screen, render } from "@testing-library/react";
import Text from "./Text";

describe("Text", () => {
	it("should be mounted", () => {
		render(<Text />);
		expect(screen).toBeTruthy();
	});
});
