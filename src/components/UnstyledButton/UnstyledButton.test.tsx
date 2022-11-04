import { screen, render } from "@testing-library/react";
import UnstyledButton from "./UnstyledButton";

describe("UnstyledButton", () => {
	it("should be mounted", () => {
		render(<UnstyledButton />);
		expect(screen).toBeTruthy();
	});
});
