import { screen, render } from "@testing-library/react";
import { mount } from "enzyme";

import Spinner from "./Spinner";
import type { SpinnerSizeType } from "./Spinner.props";

describe("Spinner", () => {
	it("should be mounted", () => {
		render(<Spinner />);
		expect(screen).toBeTruthy();
	});
	describe("size", () => {
		const sizes = Array.from({ length: 8 }, (_, i) => i + 1);
		sizes.forEach((size) => {
			it(`passes prop as ${size}`, () => {
				const mockSize = size.toString();
				const spinner = mount(
					<Spinner size={mockSize as SpinnerSizeType} />
				);
				expect(
					spinner
						.getDOMNode()
						.className.includes(`Spinner--size-${mockSize}`)
				).toBeTruthy();
			});
		});
	});
});
