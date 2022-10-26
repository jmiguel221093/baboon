import { screen, render } from "@testing-library/react";
import { mount } from "enzyme";
import Icon from "./Icon";

const PlusIcon = () => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M13 13V19H11V13H5V11H11V5H13V11H19V13H13Z"></path>
	</svg>
);

const StringSource = "📁";

describe("Button", () => {
	it("should be mounted", () => {
		render(<Icon source={PlusIcon} />);
		expect(screen).toBeTruthy();
	});
	describe("source", () => {
		it("passes prop", () => {
			const mockSource = PlusIcon;
			const icon = mount(<Icon source={mockSource} />);
			expect(icon.prop("source")).toEqual(mockSource);
		});
	});
	describe("source", () => {
		it("passes prop as function", () => {
			const mockSource = PlusIcon;
			const icon = mount(<Icon source={mockSource} />);
			expect(icon.prop("source")).toEqual(mockSource);
		});
		it("passes prop as string", () => {
			const mockSource = StringSource;
			const icon = mount(<Icon source={mockSource} />);
			expect(icon.prop("source")).toEqual(mockSource);
		});
	});
	describe("color", () => {
		const mockSource = PlusIcon;
		it("passes prop as primary", () => {
			const mockColor = "primary";
			const icon = mount(<Icon source={mockSource} color={mockColor} />);
			expect(icon.prop("color")).toEqual(mockColor);
		});
		it("passes prop as success", () => {
			const mockColor = "success";
			const icon = mount(<Icon source={mockSource} color={mockColor} />);
			expect(icon.prop("color")).toEqual(mockColor);
		});
		it("passes prop as danger", () => {
			const mockColor = "danger";
			const icon = mount(<Icon source={mockSource} color={mockColor} />);
			expect(icon.prop("color")).toEqual(mockColor);
		});
		it("passes prop as warning", () => {
			const mockColor = "warning";
			const icon = mount(<Icon source={mockSource} color={mockColor} />);
			expect(icon.prop("color")).toEqual(mockColor);
		});
		it("passes prop as info", () => {
			const mockColor = "info";
			const icon = mount(<Icon source={mockSource} color={mockColor} />);
			expect(icon.prop("color")).toEqual(mockColor);
		});
		it("passes prop as neutral", () => {
			const mockColor = "neutral";
			const icon = mount(<Icon source={mockSource} color={mockColor} />);
			expect(icon.prop("color")).toEqual(mockColor);
		});
		it("passes prop as on-dark", () => {
			const mockColor = "on-dark";
			const icon = mount(<Icon source={mockSource} color={mockColor} />);
			expect(icon.prop("color")).toEqual(mockColor);
		});
	});
	describe("backdrop", () => {
		it("passes prop", () => {
			const mockSource = PlusIcon;
			const mockBackdrop = true;
			const icon = mount(
				<Icon source={mockSource} backdrop={mockBackdrop} />
			);
			expect(icon.prop("backdrop")).toEqual(mockBackdrop);
		});
	});
	describe("size", () => {
		it("passes prop as tiny", () => {
			const mockSource = PlusIcon;
			const mockSize = "tiny";
			const icon = mount(<Icon source={mockSource} size={mockSize} />);
			expect(icon.prop("size")).toEqual(mockSize);
		});
		it("passes prop as small", () => {
			const mockSource = PlusIcon;
			const mockSize = "small";
			const icon = mount(<Icon source={mockSource} size={mockSize} />);
			expect(icon.prop("size")).toEqual(mockSize);
		});
		it("passes prop as medium", () => {
			const mockSource = PlusIcon;
			const mockSize = "medium";
			const icon = mount(<Icon source={mockSource} size={mockSize} />);
			expect(icon.prop("size")).toEqual(mockSize);
		});
		it("passes prop as large", () => {
			const mockSource = PlusIcon;
			const mockSize = "large";
			const icon = mount(<Icon source={mockSource} size={mockSize} />);
			expect(icon.prop("size")).toEqual(mockSize);
		});
		it("passes prop as extra-large", () => {
			const mockSource = PlusIcon;
			const mockSize = "extra-large";
			const icon = mount(<Icon source={mockSource} size={mockSize} />);
			expect(icon.prop("size")).toEqual(mockSize);
		});
		it("passes prop as huge", () => {
			const mockSource = PlusIcon;
			const mockSize = "huge";
			const icon = mount(<Icon source={mockSource} size={mockSize} />);
			expect(icon.prop("size")).toEqual(mockSize);
		});
	});
	describe("filled", () => {
		it("passes prop", () => {
			const mockSource = PlusIcon;
			const mockFilledProp = true;
			const icon = mount(
				<Icon source={mockSource} filled={mockFilledProp} />
			);
			expect(icon.prop("filled")).toBeTruthy();
		});
	});
	describe("outlined", () => {
		it("passes prop", () => {
			const mockSource = PlusIcon;
			const mockOutlinedProp = true;
			const icon = mount(
				<Icon source={mockSource} outlined={mockOutlinedProp} />
			);
			expect(icon.prop("outlined")).toBeTruthy();
		});
	});
});
