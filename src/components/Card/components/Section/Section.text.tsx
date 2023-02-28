import { shallow } from "enzyme";
import Section from "./Section";
import { Button } from "../../../Button";
import { Popover } from "../../../Popover";

const PlusIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24">
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12Z"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M12 3C12.5523 3 13 3.44772 13 4L13 20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20L11 4C11 3.44772 11.4477 3 12 3Z"
		/>
	</svg>
);

describe("Section component", () => {
	it("renders without crashing", () => {
		shallow(<Section />);
	});

	it("renders title when provided", () => {
		const wrapper = shallow(<Section title="Section Title" />);
		const title = wrapper.find(".Card__Section__TitleWrapper Text");
		expect(title.text()).toEqual("Section Title");
	});

	it("renders actions group when provided", () => {
		const actionsGroup = {
			icon: PlusIcon,
			actions: [{ content: "Action 1" }, { content: "Action 2" }],
		};
		const wrapper = shallow(<Section actionsGroup={actionsGroup} />);
		const actionsButton = wrapper.find(Button);
		expect(actionsButton.prop("icon")).toEqual("dots");
		expect(wrapper.find(Popover)).toHaveLength(1);
		expect(wrapper.find(Popover).prop("open")).toBeFalsy();
		actionsButton.simulate("click");
		expect(wrapper.find(Popover).prop("open")).toBeTruthy();
		expect(wrapper.find(".Card__Section__MenuList MenuItem")).toHaveLength(
			2
		);
	});

	it("renders main actions when provided", () => {
		const mainActions = [
			{ label: "Action 1" },
			{ label: "Action 2", disabled: true },
		];
		const wrapper = shallow(<Section mainActions={mainActions} />);
		const buttons = wrapper.find(".Card__Section__Body Button");
		expect(buttons).toHaveLength(2);
		expect(buttons.at(0).prop("label")).toEqual("Action 1");
		expect(buttons.at(1).prop("label")).toEqual("Action 2");
		expect(buttons.at(1).prop("disabled")).toBeTruthy();
	});

	it("renders children when provided", () => {
		const wrapper = shallow(<Section>Section Body</Section>);
		const body = wrapper.find(".Card__Section__Body");
		expect(body.text()).toEqual("Section Body");
	});
});
