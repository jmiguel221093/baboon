import { mount, shallow } from "enzyme";
import Header from "./Header";

describe("Header component", () => {
	const props = {
		title: "Test Title",
		metadata: "Test Metadata",
		mainActions: [
			{ id: "1", content: "Main Action 1" },
			{ id: "2", content: "Main Action 2" },
		],
		actionsGroup: {
			icon: "MoreVertical",
			actions: [
				{ id: "3", content: "Action 1" },
				{ id: "4", content: "Action 2" },
			],
		},
		mediaImage: {
			source: "test-image.jpg",
			alt: "Test Image",
		},
		headerInMedia: true,
		icon: "TestIcon",
	};

	it("renders without crashing", () => {
		const wrapper = shallow(<Header {...props} />);
		expect(wrapper.exists()).toBe(true);
	});

	it("renders the title and metadata correctly", () => {
		const wrapper = mount(<Header {...props} />);
		expect(wrapper.find(".Card__Header__TitleWrapper Text").text()).toBe(
			"Test Title"
		);
		expect(wrapper.find(".Card__Header__MetadataWrapper").text()).toBe(
			"Test Metadata"
		);
	});

	it("renders the main actions correctly", () => {
		const wrapper = shallow(<Header {...props} />);
		const mainActions = wrapper.find(".Card__Header Stack Button");
		expect(mainActions.length).toBe(2);
		expect(mainActions.at(0).prop("content")).toBe("Main Action 1");
		expect(mainActions.at(1).prop("content")).toBe("Main Action 2");
	});

	it("renders the actions group correctly", () => {
		const wrapper = shallow(<Header {...props} />);
		const actionsGroupTrigger = wrapper.find(".Card__Header Button");
		expect(actionsGroupTrigger.exists()).toBe(true);
		actionsGroupTrigger.at(0).simulate("click");
	});

	it("renders the media image correctly", () => {
		const wrapper = mount(<Header {...props} />);
		const mediaImageWrapper = wrapper.find(
			".Card__Header__MediaImageWrapper"
		);
		expect(mediaImageWrapper.exists()).toBe(true);
		expect(mediaImageWrapper.find("img").prop("src")).toBe(
			"test-image.jpg"
		);
		expect(mediaImageWrapper.find("img").prop("alt")).toBe("Test Image");
		expect(
			mediaImageWrapper.find(".Card__Header__TitleWrapper Text").text()
		).toBe("Test Title");
	});

	it("renders the icon correctly", () => {
		const wrapper = shallow(<Header {...props} />);
		const iconWrapper = wrapper.find(".Card__Header__IconWrapper");
		expect(iconWrapper.exists()).toBe(true);
		expect(iconWrapper.find("Icon").prop("source")).toBe("TestIcon");
	});
});
