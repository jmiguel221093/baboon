import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("renders learn react link", () => {
	render(
		<div>
			<a href="#">learn react</a>
		</div>
	);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
