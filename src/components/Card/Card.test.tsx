import { screen, render } from "@testing-library/react";
import Card from "./Card";

describe("Card", () => {
	it("should be mounted", () => {
		render(<Card />);
		expect(screen).toBeTruthy();
	});
});
