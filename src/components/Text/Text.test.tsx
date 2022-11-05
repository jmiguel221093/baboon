import { screen, render } from "@testing-library/react";
import { mount } from "enzyme";
import Text from "./Text";

describe("Text", () => {
	it("should be mounted", () => {
		render(<Text />);
		expect(screen).toBeTruthy();
	});
	describe("children", () => {
		it("passes prop", () => {
			const mockChildren = "mock children";
			const text = render(<Text>{mockChildren}</Text>);
			expect(text.getByText(mockChildren).textContent).toBe(mockChildren);
		});
	});
	describe("variant", () => {
		const mockChildren = "mock children";
		it("it passes prop as displayHuge", () => {
			const mockVariant = "displayHuge";
			const text = mount(
				<Text variant={mockVariant}>{mockChildren}</Text>
			);
			expect(
				text.getDOMNode().className.includes(`Text--${mockVariant}`)
			).toBeTruthy();
		});
		it("it passes prop as displayLarge", () => {
			const mockVariant = "displayLarge";
			const text = mount(
				<Text variant={mockVariant}>{mockChildren}</Text>
			);
			expect(
				text.getDOMNode().className.includes(`Text--${mockVariant}`)
			).toBeTruthy();
		});
		it("it passes prop as displayMedium", () => {
			const mockVariant = "displayMedium";
			const text = mount(
				<Text variant={mockVariant}>{mockChildren}</Text>
			);
			expect(
				text.getDOMNode().className.includes(`Text--${mockVariant}`)
			).toBeTruthy();
		});
		it("it passes prop as displaySmall", () => {
			const mockVariant = "displaySmall";
			const text = mount(
				<Text variant={mockVariant}>{mockChildren}</Text>
			);
			expect(
				text.getDOMNode().className.includes(`Text--${mockVariant}`)
			).toBeTruthy();
		});
		it("it passes prop as heading", () => {
			const mockVariant = "heading";
			const text = mount(
				<Text variant={mockVariant}>{mockChildren}</Text>
			);
			expect(
				text.getDOMNode().className.includes(`Text--${mockVariant}`)
			).toBeTruthy();
		});
		it("it passes prop as subheading", () => {
			const mockVariant = "subheading";
			const text = mount(
				<Text variant={mockVariant}>{mockChildren}</Text>
			);
			expect(
				text.getDOMNode().className.includes(`Text--${mockVariant}`)
			).toBeTruthy();
		});
		it("it passes prop as body", () => {
			const mockVariant = "body";
			const text = mount(
				<Text variant={mockVariant}>{mockChildren}</Text>
			);
			expect(
				text.getDOMNode().className.includes(`Text--${mockVariant}`)
			).toBeTruthy();
		});
		it("it passes prop as caption", () => {
			const mockVariant = "caption";
			const text = mount(
				<Text variant={mockVariant}>{mockChildren}</Text>
			);
			expect(
				text.getDOMNode().className.includes(`Text--${mockVariant}`)
			).toBeTruthy();
		});
		it("it passes prop as label", () => {
			const mockVariant = "label";
			const text = mount(
				<Text variant={mockVariant}>{mockChildren}</Text>
			);
			expect(
				text.getDOMNode().className.includes(`Text--${mockVariant}`)
			).toBeTruthy();
		});
	});
	describe("color", () => {
		const mockChildren = "mock children";
		it("it passes prop as primary", () => {
			const mockColor = "primary";
			const text = mount(<Text color={mockColor}>{mockChildren}</Text>);
			expect(
				text.getDOMNode().className.includes(`Text--${mockColor}`)
			).toBeTruthy();
		});
		it("it passes prop as success", () => {
			const mockColor = "success";
			const text = mount(<Text color={mockColor}>{mockChildren}</Text>);
			expect(
				text.getDOMNode().className.includes(`Text--${mockColor}`)
			).toBeTruthy();
		});
		it("it passes prop as warning", () => {
			const mockColor = "warning";
			const text = mount(<Text color={mockColor}>{mockChildren}</Text>);
			expect(
				text.getDOMNode().className.includes(`Text--${mockColor}`)
			).toBeTruthy();
		});
		it("it passes prop as danger", () => {
			const mockColor = "danger";
			const text = mount(<Text color={mockColor}>{mockChildren}</Text>);
			expect(
				text.getDOMNode().className.includes(`Text--${mockColor}`)
			).toBeTruthy();
		});
		it("it passes prop as info", () => {
			const mockColor = "info";
			const text = mount(<Text color={mockColor}>{mockChildren}</Text>);
			expect(
				text.getDOMNode().className.includes(`Text--${mockColor}`)
			).toBeTruthy();
		});
		it("it passes prop as neutral", () => {
			const mockColor = "neutral";
			const text = mount(<Text color={mockColor}>{mockChildren}</Text>);
			expect(
				text.getDOMNode().className.includes(`Text--${mockColor}`)
			).toBeTruthy();
		});
		it("it passes prop as on-dark", () => {
			const mockColor = "on-dark";
			const text = mount(<Text color={mockColor}>{mockChildren}</Text>);
			expect(
				text.getDOMNode().className.includes(`Text--${mockColor}`)
			).toBeTruthy();
		});
		it("it passes prop as subtle-on-dark", () => {
			const mockColor = "subtle-on-dark";
			const text = mount(<Text color={mockColor}>{mockChildren}</Text>);
			expect(
				text.getDOMNode().className.includes(`Text--${mockColor}`)
			).toBeTruthy();
		});
	});
	describe("fontWeight", () => {
		const mockChildren = "mock children";
		it("it passes prop as regular", () => {
			const mockFontWeight = "regular";
			const text = mount(
				<Text fontWeight={mockFontWeight}>{mockChildren}</Text>
			);
			expect(
				text.getDOMNode().className.includes(`Text--${mockFontWeight}`)
			).toBeTruthy();
		});
		it("it passes prop as medium", () => {
			const mockFontWeight = "medium";
			const text = mount(
				<Text fontWeight={mockFontWeight}>{mockChildren}</Text>
			);
			expect(
				text.getDOMNode().className.includes(`Text--${mockFontWeight}`)
			).toBeTruthy();
		});
		it("it passes prop as semi bold", () => {
			const mockFontWeight = "semibold";
			const text = mount(
				<Text fontWeight={mockFontWeight}>{mockChildren}</Text>
			);
			expect(
				text.getDOMNode().className.includes(`Text--${mockFontWeight}`)
			).toBeTruthy();
		});
	});
	describe("id", () => {
		it("passes prop", () => {
			const mockId = "mockId";
			const text = mount(<Text id={mockId} />);
			expect(text.getDOMNode().id).toEqual(mockId);
		});
	});
	describe("truncated", () => {
		it("passes prop", () => {
			const text = mount(<Text truncated />);
			expect(
				text.getDOMNode().className.includes("Text--truncated")
			).toBeTruthy();
		});
	});
	describe("hidden", () => {
		it("passes prop", () => {
			const text = mount(<Text hidden />);
			expect(
				text.getDOMNode().className.includes("Text--hidden")
			).toBeTruthy();
		});
	});
	describe("textAlign", () => {
		const mockChildren = "mock children";
		it("it passes prop as left", () => {
			const mockTextAlign = "left";
			const text = mount(
				<Text textAlign={mockTextAlign}>{mockChildren}</Text>
			);
			expect(
				text
					.getDOMNode()
					.className.includes(`Text--align-${mockTextAlign}`)
			).toBeTruthy();
		});
		it("it passes prop as right", () => {
			const mockTextAlign = "right";
			const text = mount(
				<Text textAlign={mockTextAlign}>{mockChildren}</Text>
			);
			expect(
				text
					.getDOMNode()
					.className.includes(`Text--align-${mockTextAlign}`)
			).toBeTruthy();
		});
		it("it passes prop as center", () => {
			const mockTextAlign = "center";
			const text = mount(
				<Text textAlign={mockTextAlign}>{mockChildren}</Text>
			);
			expect(
				text
					.getDOMNode()
					.className.includes(`Text--align-${mockTextAlign}`)
			).toBeTruthy();
		});
		/* eslint-disable max-lines*/
		it("it passes prop as justify", () => {
			const mockTextAlign = "justify";
			const text = mount(
				<Text textAlign={mockTextAlign}>{mockChildren}</Text>
			);
			expect(
				text
					.getDOMNode()
					.className.includes(`Text--align-${mockTextAlign}`)
			).toBeTruthy();
		});
	});
});
