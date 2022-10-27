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
	describe("primary", () => {
		it("passes prop", () => {
			const mockChildren = "mock children";
			const button = mount(<Button primary>{mockChildren}</Button>);
			expect(button.prop("primary")).toBeTruthy();
		});
	});
	describe("danger", () => {
		it("passes prop", () => {
			const mockChildren = "mock children";
			const button = mount(<Button danger>{mockChildren}</Button>);
			expect(button.prop("danger")).toBeTruthy();
		});
	});
	describe("size", () => {
		it("passes prop as extra small", () => {
			const mockChildren = "mock children";
			const mockSize = "extra-small";
			const button = mount(
				<Button size={mockSize}>{mockChildren}</Button>
			);
			expect(button.prop("size")).toBe(mockSize);
		});
		it("passes prop as small", () => {
			const mockChildren = "mock children";
			const mockSize = "small";
			const button = mount(
				<Button size={mockSize}>{mockChildren}</Button>
			);
			expect(button.prop("size")).toBe(mockSize);
		});
		it("passes prop as medium", () => {
			const mockChildren = "mock children";
			const mockSize = "medium";
			const button = mount(
				<Button size={mockSize}>{mockChildren}</Button>
			);
			expect(button.prop("size")).toBe(mockSize);
		});
		it("passes prop as large", () => {
			const mockChildren = "mock children";
			const mockSize = "large";
			const button = mount(
				<Button size={mockSize}>{mockChildren}</Button>
			);
			expect(button.prop("size")).toBe(mockSize);
		});
	});
	describe("outline", () => {
		it("passes prop", () => {
			const mockChildren = "mock children";
			const button = mount(<Button outline>{mockChildren}</Button>);
			expect(button.prop("outline")).toBeTruthy();
		});
	});
	describe("clean", () => {
		it("passes prop", () => {
			const mockChildren = "mock children";
			const button = mount(<Button clean>{mockChildren}</Button>);
			expect(button.prop("clean")).toBeTruthy();
		});
	});
	describe("textAlign: left", () => {
		it("passes prop", () => {
			const mockChildren = "mock children";
			const mockAlignment = "left";
			const button = mount(
				<Button textAlign={mockAlignment}>{mockChildren}</Button>
			);
			expect(button.prop("textAlign")).toBe(mockAlignment);
		});
	});
	describe("textAlign: right", () => {
		it("passes prop", () => {
			const mockChildren = "mock children";
			const mockAlignment = "right";
			const button = mount(
				<Button textAlign={mockAlignment}>{mockChildren}</Button>
			);
			expect(button.prop("textAlign")).toBe(mockAlignment);
		});
	});
	describe("textAlign: center", () => {
		it("passes prop", () => {
			const mockChildren = "mock children";
			const mockAlignment = "center";
			const button = mount(
				<Button textAlign={mockAlignment}>{mockChildren}</Button>
			);
			expect(button.prop("textAlign")).toBe(mockAlignment);
		});
	});
	describe("textAlign: start", () => {
		it("passes prop", () => {
			const mockChildren = "mock children";
			const mockAlignment = "start";
			const button = mount(
				<Button textAlign={mockAlignment}>{mockChildren}</Button>
			);
			expect(button.prop("textAlign")).toBe(mockAlignment);
		});
	});
	describe("textAlign: end", () => {
		it("passes prop", () => {
			const mockChildren = "mock children";
			const mockAlignment = "end";
			const button = mount(
				<Button textAlign={mockAlignment}>{mockChildren}</Button>
			);
			expect(button.prop("textAlign")).toBe(mockAlignment);
		});
	});
	describe("fullWidth", () => {
		it("passes prop", () => {
			const button = mount(<Button fullWidth />);
			expect(button.prop("fullWidth")).toBeTruthy();
		});
	});
	describe("link", () => {
		it("passes prop", () => {
			const button = mount(<Button link />);
			expect(button.prop("link")).toBeTruthy();
		});
	});
	describe("icon", () => {
		it("passes prop", () => {
			const mockIcon = () => (
				<svg width="24" height="24" viewBox="0 0 24 24">
					<path d="M14.5715 13.5942L20.4266 7.72026C20.7929 7.35195 21 6.84889 21 6.32388V4.60112C21 3.52015 20.1423 3.00012 19.0844 3.00012H4.91556C3.85765 3.00012 3 3.52015 3 4.60112V6.35482C3 6.85189 3.18462 7.33099 3.51772 7.69431L8.89711 13.5633C8.9987 13.6741 9.14034 13.737 9.28979 13.738L14.1915 13.7519C14.3332 13.7529 14.4699 13.697 14.5715 13.5942Z" />
					<path
						opacity="0.4"
						d="M9.05627 13.6859V20.2905C9.05627 20.531 9.1774 20.7576 9.3757 20.8873C9.48901 20.9622 9.6199 21.0001 9.7508 21.0001C9.84946 21.0001 9.94812 20.9792 10.0399 20.9372L14.0059 19.0887C14.254 18.9739 14.4132 18.7214 14.4132 18.4429V13.6859H9.05627Z"
					/>
				</svg>
			);
			const button = mount(<Button icon={mockIcon} />);
			expect(button.prop("icon")).toBe(mockIcon);
		});
	});
	describe("iconPosition", () => {
		it("passes prop", () => {
			const mockIcon = () => (
				<svg width="24" height="24" viewBox="0 0 24 24">
					<path d="M14.5715 13.5942L20.4266 7.72026C20.7929 7.35195 21 6.84889 21 6.32388V4.60112C21 3.52015 20.1423 3.00012 19.0844 3.00012H4.91556C3.85765 3.00012 3 3.52015 3 4.60112V6.35482C3 6.85189 3.18462 7.33099 3.51772 7.69431L8.89711 13.5633C8.9987 13.6741 9.14034 13.737 9.28979 13.738L14.1915 13.7519C14.3332 13.7529 14.4699 13.697 14.5715 13.5942Z" />
					<path
						opacity="0.4"
						d="M9.05627 13.6859V20.2905C9.05627 20.531 9.1774 20.7576 9.3757 20.8873C9.48901 20.9622 9.6199 21.0001 9.7508 21.0001C9.84946 21.0001 9.94812 20.9792 10.0399 20.9372L14.0059 19.0887C14.254 18.9739 14.4132 18.7214 14.4132 18.4429V13.6859H9.05627Z"
					/>
				</svg>
			);
			const mockIconPosition = "right";
			const button = mount(
				<Button iconPosition={mockIconPosition} icon={mockIcon} />
			);
			expect(button.prop("iconPosition")).toBe(mockIconPosition);
		});
	});
});
