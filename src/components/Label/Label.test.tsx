import { screen, render } from "@testing-library/react";
import { mount } from "enzyme";
import Label from "./Label";

describe("Label", () => {
	const mockChildren = "Field label";
	it("should be mounted", () => {
		render(<Label>{mockChildren}</Label>);
		expect(screen).toBeTruthy();
	});
	describe("children", () => {
		it("should render children", () => {
			render(<Label>{mockChildren}</Label>);
			expect(screen.getByText(mockChildren)).toBeTruthy();
		});
	});
	describe("action", () => {
		it("should render action", () => {
			const onPress = jest.fn();
			const mockAction = {
				content: "Secondary action",
				onPress,
			};
			const label = mount(
				<Label action={mockAction}>{mockChildren}</Label>
			);
			label.find("button").simulate("click");
			expect(onPress).toHaveBeenCalledTimes(1);
		});
	});
});
