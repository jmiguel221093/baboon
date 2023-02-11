import { screen, render } from "@testing-library/react";
import Page from "./Page";
import { shallow } from "enzyme";
import { Text } from "../Text";
import { Title } from "./components/Title";
import { Button } from "../Button";
import { Header } from "./components/Header";
import { Thumbnail } from "../Thumbnail";

const PAGE_COMPONENT_NAME = "Page";
const TITLE_COMPONENT_NAME = "Page__Title";
const HEADER_COMPONENT_NAME = "Page__Header";

describe("Page", () => {
	it("should be mounted", () => {
		render(<Page />);
		expect(screen).toBeTruthy();
	});
	describe("Page", () => {
		it("should render a div with the correct class name", () => {
			const wrapper = shallow(<Page />);
			expect(wrapper.hasClass(PAGE_COMPONENT_NAME)).toBe(true);
		});

		it("should render a Header component if any of the header props are present", () => {
			const wrapper = shallow(<Page title="Test Title" />);
			expect(wrapper.find(Header).exists()).toBe(true);
		});

		it("should not render a Header component if none of the header props are present", () => {
			const wrapper = shallow(<Page />);
			expect(wrapper.find(Header).exists()).toBe(false);
		});

		it("should render the children within a div with the correct class name", () => {
			const wrapper = shallow(
				<Page>
					<p>Test Child</p>
				</Page>
			);
			expect(
				wrapper
					.find(`.${PAGE_COMPONENT_NAME}__Body`)
					.contains(<p>Test Child</p>)
			).toBe(true);
		});

		it("should add the 'divider' class to the body div if the 'divider' prop is true", () => {
			const wrapper = shallow(<Page divider />);
			expect(
				wrapper
					.find(`.${PAGE_COMPONENT_NAME}__Body`)
					.hasClass(`${PAGE_COMPONENT_NAME}__Body--divider`)
			).toBe(true);
		});
	});
	describe("Title", () => {
		it("renders the correct class name", () => {
			const wrapper = shallow(<Title />);
			expect(wrapper.hasClass(TITLE_COMPONENT_NAME)).toBe(true);
		});

		it("renders the title and subtitle", () => {
			const title = "My Title";
			const subtitle = "My Subtitle";
			const wrapper = shallow(
				<Title title={title} subtitle={subtitle} />
			);

			const titleWrapper = wrapper.find(
				`.${TITLE_COMPONENT_NAME}__TitleWrapper`
			);
			expect(titleWrapper).toHaveLength(1);

			const titleText = titleWrapper.find(Text).at(0);
			expect(titleText.prop("variant")).toEqual("displayLarge");
			expect(titleText.prop("element")).toEqual("h1");
			expect(titleText.prop("children")).toEqual(title);

			const subtitleText = titleWrapper.find(Text).at(1);
			expect(subtitleText.prop("variant")).toEqual("body");
			expect(subtitleText.prop("element")).toEqual("p");
			expect(subtitleText.prop("color")).toEqual("neutral");
			expect(subtitleText.prop("children")).toEqual(subtitle);
		});

		it("does not render the title wrapper when title is not provided", () => {
			const wrapper = shallow(<Title subtitle="My Subtitle" />);
			expect(
				wrapper.find(`.${TITLE_COMPONENT_NAME}__TitleWrapper`)
			).toHaveLength(0);
		});

		it("does not render the subtitle when subtitle is not provided", () => {
			const wrapper = shallow(<Title title="My Title" />);

			const titleWrapper = wrapper.find(
				`.${TITLE_COMPONENT_NAME}__TitleWrapper`
			);
			expect(titleWrapper).toHaveLength(1);

			const subtitleText = titleWrapper.find(Text).at(1);
			expect(subtitleText).toHaveLength(0);
		});
	});
	describe("Header", () => {
		it("renders the correct markup with all optional props", () => {
			const primaryAction = {
				content: "Primary Action",
				onPress: jest.fn(),
			};

			const secondaryActions = [
				{
					content: "Secondary Action 1",
					onPress: jest.fn(),
				},
				{
					content: "Secondary Action 2",
					onPress: jest.fn(),
				},
			];

			const breadcrumb = {
				icon: "arrow-left",
				onPress: jest.fn(),
			};

			const metadata = <p>Metadata</p>;

			const thumbnail = {
				source: "thumbnail.jpg",
				alt: "Thumbnail",
			};

			const wrapper = shallow(
				<Header
					primaryAction={primaryAction}
					secondaryActions={secondaryActions}
					breadcrumb={breadcrumb}
					metadata={metadata}
					thumbnail={thumbnail}
					title="Title"
					subtitle="Subtitle"
				/>
			);

			expect(wrapper.find(`.${HEADER_COMPONENT_NAME}`)).toHaveLength(1);
			expect(wrapper.find(Button)).toHaveLength(4);
			expect(wrapper.find(Title)).toHaveLength(1);
			expect(wrapper.find(Thumbnail)).toHaveLength(1);
			expect(wrapper.find("p").text()).toBe("Metadata");
		});

		it("renders the correct markup with minimal required props", () => {
			const wrapper = shallow(<Header />);

			expect(wrapper.find(`.${HEADER_COMPONENT_NAME}`)).toHaveLength(1);
			expect(wrapper.find(Button)).toHaveLength(0);
			expect(wrapper.find(Title)).toHaveLength(0);
			expect(wrapper.find(Thumbnail)).toHaveLength(0);
		});
	});
});
