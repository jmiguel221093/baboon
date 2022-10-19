import { screen, render } from "@testing-library/react";
import { mount } from "enzyme";
import Button from "./Button";

describe("Button", () => {
	it("should be mounted", () => {
		render(<Button>Label</Button>);
		expect(screen).toBeTruthy();
	});
	describe("children", () => {
		it("passes prop", () => {
			const mockChildren = "mock children";
			const button = render(<Button>{mockChildren}</Button>);
			expect(button.getByText(mockChildren).textContent).toBe(
				mockChildren
			);
		});
	});
	describe("fullWidth", () => {
		it("passes prop", () => {
			const button = mount(<Button fullWidth />);
			expect(button.prop("fullWidth")).toBeTruthy();
		});
	});
});
