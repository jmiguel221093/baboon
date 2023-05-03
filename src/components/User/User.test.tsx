import { mount, shallow } from "enzyme";
import User from "./User";
import type { UserProps } from "./User.props";

describe("User", () => {
	const props: UserProps = {
		userIcon: () => (
			<svg width="24" height="24" viewBox="0 0 24 24">
				<path d="M11.9968 15.1747C7.68376 15.1747 3.99976 15.8547 3.99976 18.5747C3.99976 21.2957 7.66076 21.9997 11.9968 21.9997C16.3098 21.9997 19.9938 21.3207 19.9938 18.5997C19.9938 15.8787 16.3338 15.1747 11.9968 15.1747Z" />
				<path
					opacity="0.4"
					d="M11.9967 12.5838C14.9347 12.5838 17.2887 10.2288 17.2887 7.29182C17.2887 4.35482 14.9347 1.99982 11.9967 1.99982C9.05971 1.99982 6.70471 4.35482 6.70471 7.29182C6.70471 10.2288 9.05971 12.5838 11.9967 12.5838Z"
				/>
			</svg>
		),
		username: "John Doe",
		initials: "JD",
		metadata: "Joined 3 months ago",
		size: "medium",
		source: "https://example.com/avatar.jpg",
		disabled: false,
		chevronIcon: {
			icon: () => (
				<svg width="20" height="20" viewBox="0 0 20 20">
					<path
						d="M5 7.5L10 12.5L15 7.5"
						stroke="#1A202C"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			),
			filled: true,
			outlined: false,
		},
		minWidth: 200,
		maxWidth: 220,
	};

	it("renders without crashing", () => {
		shallow(<User {...props} />);
	});

	it("renders the correct props", () => {
		const wrapper = mount(<User {...props} />);
		expect(wrapper.prop("userIcon")).toEqual(props.userIcon);
		expect(wrapper.prop("username")).toEqual(props.username);
		expect(wrapper.prop("initials")).toEqual(props.initials);
		expect(wrapper.prop("metadata")).toEqual(props.metadata);
		expect(wrapper.prop("size")).toEqual(props.size);
		expect(wrapper.prop("source")).toEqual(props.source);
		expect(wrapper.prop("disabled")).toEqual(props.disabled);
		expect(wrapper.prop("chevronIcon")).toEqual(props.chevronIcon);
		expect(wrapper.prop("minWidth")).toEqual(props.minWidth);
		expect(wrapper.prop("maxWidth")).toEqual(props.maxWidth);
	});

	it("renders an Avatar component when source, userIcon, or initials props are provided", () => {
		const wrapper = shallow(<User {...props} />);
		expect(wrapper.find("Avatar").exists()).toBe(true);
	});

	it("renders a Text component when username prop is provided", () => {
		const wrapper = shallow(<User {...props} />);
		expect(wrapper.find("Text").exists()).toBe(true);
	});

	it("renders a Clickable component", () => {
		const wrapper = shallow(<User {...props} />);
		expect(wrapper.find("Clickable").exists()).toBe(true);
	});

	it("renders a chevron Icon component when chevronIcon prop is provided", () => {
		const wrapper = shallow(<User {...props} />);
		expect(wrapper.find("Icon").exists()).toBe(true);
	});

	it("does not render a chevron Icon component when chevronIcon prop is not provided", () => {
		const newProps = { ...props, chevronIcon: undefined };
		const wrapper = shallow(<User {...newProps} />);
		expect(wrapper.find("Icon").exists()).toBe(false);
	});

	it("passes the correct CSS classnames to the container div", () => {
		const wrapper = shallow(<User {...props} />);
		expect(wrapper.hasClass("User")).toBe(true);
		expect(wrapper.hasClass("User--has-chevron")).toBe(true);
	});
});
