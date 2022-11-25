import { screen, render } from "@testing-library/react";
import { mount } from "enzyme";
import type { ActionType } from "../../types";
import type { ErrorLegendProps } from "../ErrorLegend";
import TextField from "./TextField";

describe("TextField", () => {
	it("should be mounted", () => {
		render(<TextField />);
		expect(screen).toBeTruthy();
	});
	describe("placeholder", () => {
		it("passes prop", () => {
			render(<TextField placeholder="Placeholder" />);
			expect(screen.getByPlaceholderText("Placeholder")).toBeTruthy();
		});
	});
	describe("label", () => {
		it("passes prop", () => {
			render(<TextField label="Label" />);
			expect(screen.getByText("Label")).toBeTruthy();
		});
	});
	describe("multiline", () => {
		it("passes prop", () => {
			const textField = mount(<TextField multiline />);
			expect(textField.find("textarea")).toBeTruthy();
		});
	});
	describe("type", () => {
		it("passes prop", () => {
			const textField = mount(<TextField type="email" />);
			expect(textField.find("input").prop("type")).toBe("email");
		});
	});
	describe("inputMode", () => {
		it("passes prop", () => {
			const textField = mount(<TextField inputMode="email" />);
			expect(textField.find("input").prop("inputMode")).toBe("email");
		});
	});
	describe("value", () => {
		it("passes prop", () => {
			const textField = mount(<TextField value="Value" />);
			expect(
				textField.find("input").getDOMNode().getAttribute("value")
			).toBe("Value");
		});
	});
	describe("disabled", () => {
		it("passes prop", () => {
			const textField = mount(<TextField disabled />);
			expect(textField.find("input").prop("disabled")).toBeTruthy();
		});
	});
	describe("readOnly", () => {
		it("passes prop", () => {
			const textField = mount(<TextField readOnly />);
			expect(textField.find("input").prop("readOnly")).toBeTruthy();
		});
	});
	describe("name", () => {
		it("passes prop", () => {
			const textField = mount(<TextField name="Name" />);
			expect(textField.find("input").prop("name")).toBe("Name");
		});
	});
	describe("id", () => {
		it("passes prop", () => {
			const textField = mount(<TextField id="Id" />);
			expect(textField.prop("id")).toBe("Id");
		});
	});
	describe("step", () => {
		it("passes prop", () => {
			const textField = mount(<TextField step={2} />);
			expect(textField.find("input").prop("step")).toBe(2);
		});
	});
	describe("max", () => {
		it("passes prop", () => {
			const textField = mount(<TextField max={2} />);
			expect(textField.prop("max")).toBe(2);
		});
	});
	describe("min", () => {
		it("passes prop", () => {
			const textField = mount(<TextField min={2} />);
			expect(textField.prop("min")).toBe(2);
		});
	});
	describe("maxLength", () => {
		it("passes prop", () => {
			const textField = mount(<TextField maxLength={2} />);
			expect(textField.prop("maxLength")).toBe(2);
		});
	});
	describe("minLength", () => {
		it("passes prop", () => {
			const textField = mount(<TextField minLength={2} />);
			expect(textField.prop("minLength")).toBe(2);
		});
	});
	describe("pattern", () => {
		it("passes prop", () => {
			const textField = mount(<TextField pattern="Pattern" />);
			expect(textField.prop("pattern")).toBe("Pattern");
		});
	});
	describe("onChange", () => {
		it("passes prop", () => {
			const onChange = jest.fn();
			const textField = mount(<TextField onChange={onChange} />);
			textField.find("input").simulate("change");
			expect(onChange).toHaveBeenCalledTimes(1);
		});
	});
	describe("onFocus", () => {
		it("passes prop", () => {
			const onFocus = jest.fn();
			const textField = mount(<TextField onFocus={onFocus} />);
			textField.find("input").simulate("focus");
			expect(onFocus).toHaveBeenCalledTimes(1);
		});
	});
	describe("onBlur", () => {
		it("passes prop", () => {
			const onBlur = jest.fn();
			const textField = mount(<TextField onBlur={onBlur} />);
			textField.find("input").simulate("blur");
			expect(onBlur).toHaveBeenCalledTimes(1);
		});
	});
	describe("autoFocus", () => {
		it("passes prop", () => {
			const textField = mount(<TextField autoFocus />);
			expect(textField.find("input").prop("autoFocus")).toBeTruthy();
		});
	});
	describe("focused", () => {
		it("passes prop", () => {
			const textField = mount(<TextField focused />);
			expect(textField.prop("focused")).toBeTruthy();
		});
	});
	describe("prefix", () => {
		it("passes prop", () => {
			render(<TextField prefix="Prefix" />);
			expect(screen.getByText("Prefix")).toBeTruthy();
		});
	});
	describe("suffix", () => {
		it("passes prop", () => {
			render(<TextField suffix="Suffix" />);
			expect(screen.getByText("Suffix")).toBeTruthy();
		});
	});
	describe("helpText", () => {
		it("passes prop", () => {
			render(<TextField helpText="Help text" />);
			expect(screen.getByText("Help text")).toBeTruthy();
		});
	});
	describe("secondaryAction", () => {
		it("passes prop", () => {
			const onClick = jest.fn();
			const mockSecondaryAction: ActionType = {
				content: "Secondary action",
				onPress: onClick,
			};
			const input = mount(
				<TextField
					label="Label"
					secondaryAction={mockSecondaryAction}
				/>
			);
			input.find(".Button").simulate("click");
			expect(onClick).toHaveBeenCalledTimes(1);
		});
	});
	describe("error", () => {
		it("passes prop", () => {
			const mockMessage = "Error message";
			const error: ErrorLegendProps = {
				message: mockMessage,
			};
			render(<TextField error={error} />);
			expect(screen.getByText(mockMessage)).toBeTruthy();
		});
	});
	describe("autoComplete", () => {
		it("passes prop", () => {
			const textField = mount(<TextField autoComplete="on" />);
			expect(textField.find("input").prop("autoComplete")).toBe("on");
		});
	});
	describe("spellCheck", () => {
		it("passes prop", () => {
			const textField = mount(<TextField spellCheck />);
			expect(textField.find("input").prop("spellCheck")).toBeTruthy();
		});
	});
	describe("action", () => {
		it("passes prop", () => {
			const onClick = jest.fn();
			const mockAction: ActionType = {
				content: "Action",
				onPress: onClick,
			};
			const input = mount(
				<TextField label="Label" action={mockAction} />
			);
			input.find(".Button").simulate("click");
			expect(onClick).toHaveBeenCalledTimes(1);
		});
	});
	describe("loading", () => {
		it("passes prop", () => {
			const textField = mount(<TextField loading />);
			expect(textField.prop("loading")).toBeTruthy();
		});
	});
});
