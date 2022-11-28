import { screen, render } from "@testing-library/react";
import { mount } from "enzyme";
import Badge from "./Badge";

const InfoIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24">
		<path
			opacity="0.4"
			d="M21.9999 11.9999C21.9999 17.5239 17.5229 21.9999 11.9999 21.9999C6.47688 21.9999 1.99988 17.5239 1.99988 11.9999C1.99988 6.47791 6.47688 1.99991 11.9999 1.99991C17.5229 1.99991 21.9999 6.47791 21.9999 11.9999Z"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M12.87 12.6308C12.87 13.1128 12.477 13.5058 11.995 13.5058C11.513 13.5058 11.12 13.1128 11.12 12.6308V8.21082C11.12 7.72882 11.513 7.33582 11.995 7.33582C12.477 7.33582 12.87 7.72882 12.87 8.21082V12.6308ZM11.125 15.8036C11.125 15.3216 11.516 14.9286 11.995 14.9286C12.488 14.9286 12.88 15.3216 12.88 15.8036C12.88 16.2856 12.488 16.6786 12.005 16.6786C11.52 16.6786 11.125 16.2856 11.125 15.8036Z"
		/>
	</svg>
);

describe("Badge", () => {
	it("should be mounted", () => {
		render(<Badge />);
		expect(screen).toBeTruthy();
	});
	describe("children", () => {
		it("should render children", () => {
			render(<Badge>Badge label</Badge>);
			expect(screen.getByText("Badge label")).toBeTruthy();
		});
	});
	describe("variant", () => {
		it("passes prop as success", () => {
			const mockVariant = "success";
			const badge = mount(
				<Badge variant={mockVariant}>Badge label</Badge>
			);
			expect(badge.prop("variant")).toEqual(mockVariant);
		});
		it("passes prop as warning", () => {
			const mockVariant = "warning";
			const badge = mount(
				<Badge variant={mockVariant}>Badge label</Badge>
			);
			expect(badge.prop("variant")).toEqual(mockVariant);
		});
		it("passes prop as danger", () => {
			const mockVariant = "danger";
			const badge = mount(
				<Badge variant={mockVariant}>Badge label</Badge>
			);
			expect(badge.prop("variant")).toEqual(mockVariant);
		});
		it("passes prop as info", () => {
			const mockVariant = "info";
			const badge = mount(
				<Badge variant={mockVariant}>Badge label</Badge>
			);
			expect(badge.prop("variant")).toEqual(mockVariant);
		});
		it("passes prop as primary", () => {
			const mockVariant = "primary";
			const badge = mount(
				<Badge variant={mockVariant}>Badge label</Badge>
			);
			expect(badge.prop("variant")).toEqual(mockVariant);
		});
	});
	describe("icon", () => {
		it("passes prop as icon", () => {
			const mockIcon = InfoIcon;
			const badge = mount(<Badge icon={mockIcon}>Badge label</Badge>);
			expect(badge.prop("icon")).toEqual(mockIcon);
		});
	});
	describe("onClick", () => {
		it("passes prop as onClick", () => {
			const mockOnClick = jest.fn();
			const badge = mount(
				<Badge onClick={mockOnClick}>Badge label</Badge>
			);
			badge.find(".Badge").simulate("click");
			expect(mockOnClick).toHaveBeenCalledTimes(1);
		});
	});
});
