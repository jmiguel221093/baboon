import { screen, render } from "@testing-library/react";
import UnstyledButton from "./UnstyledButton";

describe("UnstyledButton", () => {
	it("should be mounted", () => {
		render(<UnstyledButton />);
		expect(screen).toBeTruthy();
	});
	describe("children", () => {
		it("passes prop", () => {
			render(<UnstyledButton>Test</UnstyledButton>);
			expect(screen.getByText("Test")).toBeTruthy();
		});
	});
	describe("className", () => {
		it("passes prop", () => {
			render(<UnstyledButton className="test" />);
			expect(screen.getByRole("button")).toHaveClass("test");
		});
	});
});
