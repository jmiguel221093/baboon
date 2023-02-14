import { screen, render } from "@testing-library/react";
import Popover from "./Popover";

describe("Popover", () => {
	it("should be mounted", () => {
		render(<Popover />);
		expect(screen).toBeTruthy();
	});
});
