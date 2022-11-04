import { screen, render } from "@testing-library/react";
import { mount } from "enzyme";
import Alert from "./Alert";
import { XIcon } from "../../utils";

describe("Alert", () => {
	it("should be mounted", () => {
		render(<Alert />);
		expect(screen).toBeTruthy();
	});
	describe("children", () => {
		it("passes prop", () => {
			const mockChildren = "mock children";
			const alert = render(<Alert>{mockChildren}</Alert>);
			expect(alert.getByText(mockChildren).textContent).toBe(
				mockChildren
			);
		});
	});
	describe("title", () => {
		it("passes prop", () => {
			const mockTitle = "mock title";
			const alert = render(<Alert title={mockTitle} />);
			expect(alert.getByText(mockTitle).textContent).toBe(mockTitle);
		});
	});
	describe("status", () => {
		const mockChildren = "mock children";
		it("passes prop: default", () => {
			const mockStatus = "default";
			const alert = mount(
				<Alert status={mockStatus}>{mockChildren}</Alert>
			);
			expect(alert.prop("status")).toBe(mockStatus);
		});
		it("passes prop: success", () => {
			const mockStatus = "success";
			const alert = mount(
				<Alert status={mockStatus}>{mockChildren}</Alert>
			);
			expect(alert.prop("status")).toBe(mockStatus);
		});
		it("passes prop: warning", () => {
			const mockStatus = "warning";
			const alert = mount(
				<Alert status={mockStatus}>{mockChildren}</Alert>
			);
			expect(alert.prop("status")).toBe(mockStatus);
		});
		it("passes prop: danger", () => {
			const mockStatus = "danger";
			const alert = mount(
				<Alert status={mockStatus}>{mockChildren}</Alert>
			);
			expect(alert.prop("status")).toBe(mockStatus);
		});
		it("passes prop: info", () => {
			const mockStatus = "info";
			const alert = mount(
				<Alert status={mockStatus}>{mockChildren}</Alert>
			);
			expect(alert.prop("status")).toBe(mockStatus);
		});
		it("passes prop: primary", () => {
			const mockStatus = "primary";
			const alert = mount(
				<Alert status={mockStatus}>{mockChildren}</Alert>
			);
			expect(alert.prop("status")).toBe(mockStatus);
		});
	});
	describe("icon", () => {
		it("passes prop", () => {
			const mockIcon = () => (
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
			const alert = mount(<Alert icon={mockIcon} />);
			expect(alert.prop("icon")).toBe(mockIcon);
		});
	});
	describe("onDismiss", () => {
		it("passes prop", () => {
			const onDismiss = jest.fn();
			const alert = mount(<Alert onDismiss={onDismiss} />);
			alert.find("button").simulate("click");
			expect(onDismiss).toHaveBeenCalledTimes(1);
		});
	});
	describe("dismissIcon", () => {
		it("passes prop", () => {
			const mockIcon = XIcon;
			const alert = mount(<Alert dismissIcon={mockIcon} />);
			expect(alert.prop("dismissIcon")).toBe(mockIcon);
		});
	});
	describe("primaryAction", () => {
		it("passes prop", () => {
			const mockPrimaryAction = {
				content: "mock label",
				onPress: jest.fn(),
			};
			const alert = mount(<Alert primaryAction={mockPrimaryAction} />);
			expect(alert.prop("primaryAction")).toBe(mockPrimaryAction);
		});
	});
	describe("secondaryAction", () => {
		it("passes prop", () => {
			const mockPrimaryAction = {
				content: "mock label",
				onPress: jest.fn(),
			};
			const mockSecondaryAction = {
				content: "mock label",
				onPress: jest.fn(),
			};
			const alert = mount(
				<Alert
					primaryAction={mockPrimaryAction}
					secondaryAction={mockSecondaryAction}
				/>
			);
			expect(alert.prop("primaryAction")).toBe(mockPrimaryAction);
		});
	});
});
