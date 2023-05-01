import { mount, shallow } from "enzyme";
import ProgressBar from "./ProgressBar";
import type { ProgressBarProps } from "./ProgressBar.props";
import { Label } from "../Label";

describe("ProgressBar", () => {
	it("renders without crashing", () => {
		shallow(<ProgressBar />);
	});

	it("renders progress indicators correctly", () => {
		const wrapper = shallow(<ProgressBar progress={50} />);
		expect(wrapper.find(".ProgressBar__Indicator")).toHaveLength(1);
		expect(
			wrapper.find(".ProgressBar__Indicator").prop("style")
		).toHaveProperty("--progress-bar-size", "50%");
	});

	it("renders multiple progress indicators correctly", () => {
		const progress: ProgressBarProps["progress"] = [
			{ value: 20, color: "primary" },
			{ value: 30, color: "success" },
			{ value: 50, color: "warning" },
		];
		const wrapper = shallow(<ProgressBar progress={progress} />);
		expect(wrapper.find(".ProgressBar__Indicator")).toHaveLength(3);
		expect(
			wrapper.find(".ProgressBar__Indicator").at(0).prop("style")
		).toHaveProperty("--progress-bar-size", "20%");
		expect(
			wrapper.find(".ProgressBar__Indicator").at(1).prop("style")
		).toHaveProperty("--progress-bar-size", "30%");
		expect(
			wrapper.find(".ProgressBar__Indicator").at(2).prop("style")
		).toHaveProperty("--progress-bar-size", "50%");
	});

	it("renders label correctly", () => {
		const label = "Progress";
		const wrapper = mount(<ProgressBar label={label} />);
		expect(wrapper.find(Label).find("label").text()).toEqual(label);
	});

	it("renders metadata correctly", () => {
		const metadata = <span>Metadata</span>;
		const wrapper = shallow(<ProgressBar metadata={metadata} />);
		expect(
			wrapper.find(".ProgressBar__MetadataItem").contains(metadata)
		).toBe(true);
	});

	it("renders showProgress correctly", () => {
		const wrapper = shallow(<ProgressBar showProgress progress={50} />);
		expect(
			wrapper
				.find(".ProgressBar__MetadataItem")
				.find("Text")
				.prop("children")
				?.toString()
				.replace(/,/g, "")
		).toBe("50%");
	});
});
