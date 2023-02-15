import { shallow } from "enzyme";
import Popover from "./Popover";

describe("Popover component", () => {
	it("renders without crashing", () => {
		const component = shallow(<Popover trigger={<button />} />);
		expect(component).toMatchSnapshot();
	});

	it("renders the correct children", () => {
		const children = <div>test children</div>;
		const component = shallow(
			<Popover trigger={<button />} open>
				{children}
			</Popover>
		);
		expect(component.find("div").contains(children)).toEqual(true);
	});

	it("does not render when open is false", () => {
		const component = shallow(<Popover trigger={<button />} />);
		expect(component.find(".Popover").length).toEqual(0);
	});

	it("renders when open is true", () => {
		const component = shallow(
			<Popover trigger={<button />} open={true}>
				<div>test children</div>
			</Popover>
		);
		expect(component.find(".Popover").length).toEqual(1);
	});
});
