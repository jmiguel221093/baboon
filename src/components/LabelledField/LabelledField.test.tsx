import { screen, render } from "@testing-library/react";
import { mount } from "enzyme";
import type { ActionType } from "../../types";
import type { ErrorLegendProps } from "../ErrorLegend";
import LabelledField from "./LabelledField";

describe("LabelledField", () => {
	it("should be mounted", () => {
		render(<LabelledField label="">Test</LabelledField>);
		expect(screen).toBeTruthy();
	});
	describe("children", () => {
		it("passes prop", () => {
			render(<LabelledField label="">Test</LabelledField>);
			expect(screen.getByText("Test")).toBeTruthy();
		});
	});
	describe("label", () => {
		it("passes prop", () => {
			render(<LabelledField label="Label">Test</LabelledField>);
			expect(screen.getByText("Label")).toBeTruthy();
		});
	});
	describe("error", () => {
		it("passes prop", () => {
			const mockMessage = "Error message";
			const error: ErrorLegendProps = {
				message: mockMessage,
			};
			render(
				<LabelledField label="" error={error}>
					Test
				</LabelledField>
			);
			expect(screen.getByText(mockMessage)).toBeTruthy();
		});
	});
	describe("helpText", () => {
		it("passes prop", () => {
			render(
				<LabelledField label="" helpText="Help text">
					Test
				</LabelledField>
			);
			expect(screen.getByText("Help text")).toBeTruthy();
		});
	});
	describe("action", () => {
		it("passes prop", () => {
			const onClick = jest.fn();
			const mockAction: ActionType = {
				content: "Action",
				onPress: onClick,
			};
			const labelledField = mount(
				<LabelledField label="Label" action={mockAction}>
					Test
				</LabelledField>
			);
			labelledField.find("button").simulate("click");
			expect(onClick).toHaveBeenCalledTimes(1);
		});
	});
	describe("id", () => {
		it("passes prop", () => {
			render(
				<LabelledField label="Label" id="test">
					Test
				</LabelledField>
			);
			expect(screen.getByText("Label").getAttribute("id")).toBe("test");
		});
	});
});
