import { mount } from "enzyme";
import Modal from "./Modal";

describe("Modal", () => {
	it("should not render the dialog when closed", () => {
		const wrapper = mount(<Modal open={false} />);
		expect(wrapper.find(".Modal__MainContainer").exists()).toBe(false);
	});

	it("should render the dialog when open", () => {
		const wrapper = mount(<Modal open={true} />);
		expect(wrapper.find(".Modal__MainContainer").exists()).toBe(true);
	});

	it("should render the dialog with the correct size", () => {
		const wrapper = mount(<Modal open={true} size="large" />);
		expect(wrapper.find(".Modal").hasClass("Modal--large")).toBe(true);
	});

	it("should render the dialog with a footer", () => {
		const footer = <button>Submit</button>;
		const wrapper = mount(<Modal open={true} footer={footer} />);
		expect(
			wrapper.find(".Modal__Footer__ContentWrapper").contains(footer)
		).toBe(true);
	});

	it("should render the dialog with a primary action", () => {
		const primaryAction = { content: "Save" };
		const wrapper = mount(
			<Modal open={true} primaryAction={primaryAction} />
		);
		expect(
			wrapper
				.find(".Modal__Footer")
				.find(".Modal__Footer__ActionsWrapper")
				.find("button")
				.find(".Button__TextContent")
				.text()
		).toBe("Save");
	});

	it("should render the dialog with secondary actions", () => {
		const secondaryActions = [
			{ content: "Secondary 1" },
			{ content: "Secondary 2" },
		];
		const wrapper = mount(
			<Modal open={true} secondaryActions={secondaryActions} />
		);
		expect(wrapper.find(".Modal__Footer").find("button")).toHaveLength(2);
	});

	it("should call onClose when the close icon is clicked", () => {
		const onClose = jest.fn();
		const wrapper = mount(<Modal open={true} onClose={onClose} />);
		wrapper
			.find(".Modal__Header .Modal__Header__DismissButton button")
			.simulate("click");
		expect(onClose).toHaveBeenCalled();
	});
});
