import { screen, render } from "@testing-library/react";
import { mount } from "enzyme";
import "@testing-library/jest-dom";

import Sample from "./Sample";

describe("Sample", () => {
	it("should be mounted", () => {
		render(<Sample>Test</Sample>);
		expect(screen).toBeTruthy();
	});
	describe("children", () => {
		it("passes prop", () => {
			const mockChildren = 1;
			const sample = render(<Sample>{mockChildren}</Sample>);
			expect(
				parseInt(sample.getByText(mockChildren).textContent as string)
			).toBeTruthy();
		});
	});
	describe("title", () => {
		it("passes prop", () => {
			const mockTitle = "Test title";
			const sample = mount(<Sample title={mockTitle}>Test</Sample>);
			expect(sample.prop("title")).toBe(mockTitle);
		});
	});
});
