import { mount, shallow } from "enzyme";
import Navigation from "./Navigation";
import { NavigationContext } from "./utils";
import type { NavigationProps } from "./Navigation.props";

describe("<Navigation />", () => {
	const userNavigation: NavigationProps["userNavigation"] = [
		{
			label: "Home",
			anchorProps: { href: "/" },
		},
	];
	const logo = <img src="logo.png" alt="Logo" />;
	const collapsedLogo = <img src="logo-collapsed.png" alt="Collapsed Logo" />;
	const children = <div>Navigation content</div>;

	const defaultProps: NavigationProps = {
		userNavigation,
		logo,
		collapsedLogo,
		children,
	};

	const mountWithProvider = (props: NavigationProps) => {
		return mount(<Navigation {...props} />);
	};

	it("should render the logo", () => {
		const wrapper = mountWithProvider(defaultProps);

		expect(
			wrapper.find(".Navigation__LogoWrapper img").prop("src")
		).toEqual("logo.png");
	});

	it("should render the collapsed logo when the navigation is collapsed", () => {
		const wrapper = mountWithProvider({
			...defaultProps,
			collapsed: true,
		});

		expect(
			wrapper.find(".Navigation__LogoWrapper img").prop("src")
		).toEqual("logo-collapsed.png");
	});

	it("should render the anchor component", () => {
		const wrapper = mountWithProvider(defaultProps);
		expect(wrapper.find("a")).toHaveLength(1);
	});

	it("should render the user navigation", () => {
		const wrapper = mountWithProvider(defaultProps);

		expect(wrapper.find(".Navigation__UserNavigation")).toHaveLength(1);
		expect(wrapper.find(".Navigation__UserNavigation li")).toHaveLength(
			userNavigation.length
		);
		expect(
			wrapper.find(".Navigation__UserNavigation li a").prop("href")
		).toBe(userNavigation[0].anchorProps.href);
	});

	it("should render the navigation content", () => {
		const wrapper = mountWithProvider(defaultProps);

		expect(
			wrapper.find(".Navigation__NavigationContent").contains(children)
		).toBe(true);
	});

	it("should pass the collapsed state to the navigation context", () => {
		const wrapper = shallow(<Navigation {...defaultProps} collapsed />);

		expect(
			wrapper.find(NavigationContext.Provider).prop("value").collapsed
		).toBe(true);
	});
});
