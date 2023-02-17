/* eslint-disable max-lines */
import React from "react";
import type { ComponentMeta } from "@storybook/react";

import {
	Button,
	Icon,
	MenuList,
	Popover,
	Stack,
	Text,
} from "../src/components";

export default {
	title: "AllComponents/MenuList",
	component: MenuList,
} as ComponentMeta<typeof MenuList>;

const ImportIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24">
		<path
			opacity="0.4"
			d="M6.447 22.0001C3.996 22.0001 2 19.9699 2 17.4756V12.5145C2 10.0253 3.99 8.00012 6.437 8.00012L17.553 8.00012C20.005 8.00012 22 10.0304 22 12.5257V17.4847C22 19.975 20.01 22.0001 17.563 22.0001H16.623H6.447Z"
		/>
		<path d="M11.4548 2.22121L8.5458 5.067C8.2458 5.36113 8.2458 5.83445 8.5478 6.1276C8.8498 6.41978 9.3368 6.4188 9.6368 6.12565L11.2298 4.56641V6.06137V14.4517C11.2298 14.8656 11.5748 15.2016 11.9998 15.2016C12.4258 15.2016 12.7698 14.8656 12.7698 14.4517V4.56641L14.3628 6.12565C14.6628 6.4188 15.1498 6.41978 15.4518 6.1276C15.6028 5.98054 15.6788 5.78868 15.6788 5.59584C15.6788 5.40495 15.6028 5.21309 15.4538 5.067L12.5458 2.22121C12.4008 2.08 12.2048 2.00013 11.9998 2.00013C11.7958 2.00013 11.5998 2.08 11.4548 2.22121Z" />
	</svg>
);

const ExportIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24">
		<path
			opacity="0.4"
			d="M17.554 7.2963C20.005 7.2963 22 9.35609 22 11.8877V16.92C22 19.4455 20.01 21.5001 17.564 21.5001L6.448 21.5001C3.996 21.5001 2 19.4413 2 16.9097V11.8774C2 9.35196 3.991 7.2963 6.438 7.2963H7.378L17.554 7.2963Z"
		/>
		<path d="M12.5462 16.0375L15.4552 13.0696C15.7552 12.7629 15.7552 12.2692 15.4532 11.9635C15.1512 11.6588 14.6642 11.6598 14.3642 11.9655L12.7712 13.5907L12.7712 3.28222C12.7712 2.85054 12.4262 2.50012 12.0002 2.50012C11.5752 2.50012 11.2312 2.85054 11.2312 3.28222L11.2312 13.5907L9.63718 11.9655C9.33718 11.6598 8.85018 11.6588 8.54818 11.9635C8.39718 12.1169 8.32118 12.317 8.32118 12.5181C8.32118 12.7172 8.39718 12.9173 8.54618 13.0696L11.4552 16.0375C11.6002 16.1848 11.7962 16.2681 12.0002 16.2681C12.2052 16.2681 12.4012 16.1848 12.5462 16.0375Z" />
	</svg>
);

const DuplicateIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24">
		<path
			opacity="0.4"
			d="M16.0754 2.00012H19.4614C20.8636 2.00012 21.9999 3.14597 21.9999 4.56009V7.97465C21.9999 9.38876 20.8636 10.5346 19.4614 10.5346H16.0754C14.6731 10.5346 13.5369 9.38876 13.5369 7.97465V4.56009C13.5369 3.14597 14.6731 2.00012 16.0754 2.00012Z"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M4.53852 2.00012H7.92449C9.32676 2.00012 10.463 3.14597 10.463 4.56009V7.97465C10.463 9.38876 9.32676 10.5346 7.92449 10.5346H4.53852C3.13626 10.5346 2 9.38876 2 7.97465V4.56009C2 3.14597 3.13626 2.00012 4.53852 2.00012ZM4.53852 13.4656H7.92449C9.32676 13.4656 10.463 14.6115 10.463 16.0256V19.4402C10.463 20.8533 9.32676 22.0001 7.92449 22.0001H4.53852C3.13626 22.0001 2 20.8533 2 19.4402V16.0256C2 14.6115 3.13626 13.4656 4.53852 13.4656ZM19.4615 13.4656H16.0755C14.6732 13.4656 13.537 14.6115 13.537 16.0256V19.4402C13.537 20.8533 14.6732 22.0001 16.0755 22.0001H19.4615C20.8637 22.0001 22 20.8533 22 19.4402V16.0256C22 14.6115 20.8637 13.4656 19.4615 13.4656Z"
		/>
	</svg>
);

const ShareIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24">
		<path
			opacity="0.4"
			d="M6.70555 12.8907C6.18944 12.8907 5.77163 13.3147 5.77163 13.8385L5.51416 18.4172C5.51416 19.0847 6.04783 19.6251 6.70555 19.6251C7.36328 19.6251 7.89577 19.0847 7.89577 18.4172L7.63947 13.8385C7.63947 13.3147 7.22167 12.8907 6.70555 12.8907Z"
		/>
		<path d="M7.98037 3.67357C7.98037 3.67357 7.71236 3.39801 7.54618 3.27805C7.30509 3.09277 7.00783 3.00012 6.71173 3.00012C6.37936 3.00012 6.07039 3.10464 5.81877 3.30181C5.77313 3.34813 5.57886 3.52273 5.41852 3.68545C4.41204 4.63682 2.76539 7.12038 2.26215 8.42096C2.18257 8.61812 2.01053 9.11697 2 9.38421C2 9.63839 2.05618 9.88306 2.17087 10.1147C2.3312 10.4045 2.58282 10.6373 2.88009 10.7644C3.08606 10.8463 3.70282 10.9734 3.71453 10.9734C4.38981 11.1017 5.48757 11.1706 6.70003 11.1706C7.85514 11.1706 8.90727 11.1017 9.59308 10.9972C9.60478 10.9853 10.3702 10.8582 10.6335 10.718C11.1133 10.4627 11.4118 9.96383 11.4118 9.43053V9.38421C11.4001 9.0362 11.1016 8.30456 11.0911 8.30456C10.5879 7.07406 9.02079 4.6487 7.98037 3.67357Z" />
		<path
			opacity="0.4"
			d="M17.2947 11.1097C17.8108 11.1097 18.2286 10.6857 18.2286 10.1619L18.4849 5.58308C18.4849 4.91555 17.9524 4.37512 17.2947 4.37512C16.6369 4.37512 16.1033 4.91555 16.1033 5.58308L16.3607 10.1619C16.3607 10.6857 16.7785 11.1097 17.2947 11.1097Z"
		/>
		<path d="M21.8292 13.8854C21.6688 13.5956 21.4172 13.364 21.1199 13.2357C20.914 13.1538 20.296 13.0267 20.2855 13.0267C19.6102 12.8984 18.5124 12.8295 17.3 12.8295C16.1449 12.8295 15.0928 12.8984 14.4069 13.0029C14.3952 13.0148 13.6298 13.1431 13.3665 13.282C12.8855 13.5374 12.5883 14.0363 12.5883 14.5708V14.6171C12.6 14.9651 12.8972 15.6956 12.9089 15.6956C13.4122 16.9261 14.9781 19.3527 16.0197 20.3267C16.0197 20.3267 16.2877 20.6022 16.4538 20.721C16.6938 20.9075 16.991 21.0001 17.2895 21.0001C17.6207 21.0001 17.9285 20.8956 18.1812 20.6984C18.2269 20.6521 18.4212 20.4775 18.5815 20.316C19.5868 19.3634 21.2346 16.8798 21.7367 15.5804C21.8175 15.3832 21.9895 14.8831 22 14.6171C22 14.3617 21.9438 14.117 21.8292 13.8854Z" />
	</svg>
);

const DeleteIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24">
		<path
			opacity="0.4"
			d="M19.6432 9.48857C19.6432 9.55656 19.1103 16.2973 18.8059 19.1342C18.6152 20.8752 17.4929 21.9311 15.8094 21.9611C14.5159 21.9901 13.2497 22.0001 12.0038 22.0001C10.6812 22.0001 9.38766 21.9901 8.13209 21.9611C6.50501 21.9221 5.38171 20.8452 5.20082 19.1342C4.88766 16.2873 4.36442 9.55656 4.3547 9.48857C4.34497 9.28357 4.41111 9.08858 4.54532 8.93059C4.67758 8.78459 4.8682 8.69659 5.06855 8.69659H18.9391C19.1385 8.69659 19.3194 8.78459 19.4623 8.93059C19.5956 9.08858 19.6627 9.28357 19.6432 9.48857Z"
		/>
		<path d="M21 5.97698C21 5.566 20.6761 5.24401 20.2871 5.24401H17.3714C16.7781 5.24401 16.2627 4.82202 16.1304 4.22704L15.967 3.49807C15.7385 2.6171 14.9498 2.00012 14.0647 2.00012H9.93624C9.0415 2.00012 8.26054 2.6171 8.02323 3.54607L7.87054 4.22804C7.7373 4.82202 7.22185 5.24401 6.62957 5.24401H3.71385C3.32386 5.24401 3 5.566 3 5.97698V6.35697C3 6.75796 3.32386 7.08994 3.71385 7.08994H20.2871C20.6761 7.08994 21 6.75796 21 6.35697V5.97698Z" />
	</svg>
);

const UserIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24">
		<path d="M11.9968 15.1747C7.68376 15.1747 3.99976 15.8547 3.99976 18.5747C3.99976 21.2957 7.66076 21.9997 11.9968 21.9997C16.3098 21.9997 19.9938 21.3207 19.9938 18.5997C19.9938 15.8787 16.3338 15.1747 11.9968 15.1747Z" />
		<path
			opacity="0.4"
			d="M11.9967 12.5838C14.9347 12.5838 17.2887 10.2288 17.2887 7.29182C17.2887 4.35482 14.9347 1.99982 11.9967 1.99982C9.05971 1.99982 6.70471 4.35482 6.70471 7.29182C6.70471 10.2288 9.05971 12.5838 11.9967 12.5838Z"
		/>
	</svg>
);

const SettingsIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24">
		<path d="M12.012 14.8302C10.4075 14.8302 9.10962 13.5802 9.10962 12.0102C9.10962 10.4402 10.4075 9.18021 12.012 9.18021C13.6165 9.18021 14.8837 10.4402 14.8837 12.0102C14.8837 13.5802 13.6165 14.8302 12.012 14.8302Z" />
		<path
			opacity="0.4"
			d="M21.2301 14.3702C21.036 14.0702 20.76 13.7702 20.4023 13.5802C20.1162 13.4402 19.9322 13.2102 19.7687 12.9402C19.2475 12.0802 19.5541 10.9502 20.4228 10.4402C21.4447 9.87021 21.7718 8.60021 21.179 7.61021L20.4943 6.43021C19.9118 5.44021 18.6344 5.09021 17.6226 5.67021C16.7233 6.15021 15.5685 5.83021 15.0473 4.98021C14.8838 4.70021 14.7918 4.40021 14.8122 4.10021C14.8429 3.71021 14.7203 3.34021 14.5363 3.04021C14.1582 2.42021 13.4735 2.00021 12.7172 2.00021H11.2763C10.5302 2.02021 9.84553 2.42021 9.4674 3.04021C9.27323 3.34021 9.16081 3.71021 9.18125 4.10021C9.20169 4.40021 9.10972 4.70021 8.9462 4.98021C8.425 5.83021 7.27019 6.15021 6.38109 5.67021C5.35913 5.09021 4.09191 5.44021 3.49917 6.43021L2.81446 7.61021C2.23194 8.60021 2.55897 9.87021 3.57071 10.4402C4.43937 10.9502 4.74596 12.0802 4.23498 12.9402C4.06125 13.2102 3.87729 13.4402 3.59115 13.5802C3.24368 13.7702 2.93709 14.0702 2.77358 14.3702C2.39546 14.9902 2.4159 15.7702 2.79402 16.4202L3.49917 17.6202C3.87729 18.2602 4.58245 18.6602 5.31825 18.6602C5.66572 18.6602 6.0745 18.5602 6.40153 18.3602C6.65702 18.1902 6.96361 18.1302 7.30085 18.1302C8.31259 18.1302 9.16081 18.9602 9.18125 19.9502C9.18125 21.1002 10.1215 22.0002 11.3069 22.0002H12.6968C13.872 22.0002 14.8122 21.1002 14.8122 19.9502C14.8429 18.9602 15.6911 18.1302 16.7029 18.1302C17.0299 18.1302 17.3365 18.1902 17.6022 18.3602C17.9292 18.5602 18.3278 18.6602 18.6855 18.6602C19.411 18.6602 20.1162 18.2602 20.4943 17.6202L21.2097 16.4202C21.5776 15.7502 21.6083 14.9902 21.2301 14.3702Z"
		/>
	</svg>
);

const BellIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24">
		<path d="M19.7695 11.6455C19.039 10.7924 18.7071 10.0532 18.7071 8.79728V8.37025C18.7071 6.73366 18.3304 5.67919 17.5115 4.62472C16.2493 2.98711 14.1244 2.00012 12.0442 2.00012H11.9558C9.91935 2.00012 7.86106 2.94179 6.577 4.51292C5.71333 5.58855 5.29293 6.68834 5.29293 8.37025V8.79728C5.29293 10.0532 4.98284 10.7924 4.23049 11.6455C3.67691 12.2739 3.5 13.0816 3.5 13.9558C3.5 14.831 3.78723 15.6599 4.36367 16.3337C5.11602 17.1414 6.17846 17.657 7.26375 17.7467C8.83505 17.926 10.4063 17.9934 12.0005 17.9934C13.5937 17.9934 15.165 17.8806 16.7372 17.7467C17.8215 17.657 18.884 17.1414 19.6363 16.3337C20.2118 15.6599 20.5 14.831 20.5 13.9558C20.5 13.0816 20.3231 12.2739 19.7695 11.6455Z" />
		<path
			opacity="0.4"
			d="M14.0088 19.2285C13.5088 19.1217 10.4627 19.1217 9.96275 19.2285C9.53539 19.3272 9.07324 19.5568 9.07324 20.0604C9.09809 20.5408 9.37935 20.9648 9.76895 21.2337L9.76795 21.2347C10.2718 21.6275 10.8632 21.8772 11.4824 21.9669C11.8123 22.0122 12.1482 22.0102 12.4901 21.9669C13.1083 21.8772 13.6997 21.6275 14.2036 21.2347L14.2026 21.2337C14.5922 20.9648 14.8734 20.5408 14.8983 20.0604C14.8983 19.5568 14.4361 19.3272 14.0088 19.2285Z"
		/>
	</svg>
);

const InfoIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24">
		<path
			opacity="0.4"
			d="M16.34 1.99991H7.67C4.28 1.99991 2 4.37991 2 7.91991V16.0899C2 19.6199 4.28 21.9999 7.67 21.9999H16.34C19.73 21.9999 22 19.6199 22 16.0899V7.91991C22 4.37991 19.73 1.99991 16.34 1.99991Z"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M11.1248 8.18942C11.1248 8.67142 11.5158 9.06442 11.9948 9.06442C12.4878 9.06442 12.8798 8.67142 12.8798 8.18942C12.8798 7.70742 12.4878 7.31442 12.0048 7.31442C11.5198 7.31442 11.1248 7.70742 11.1248 8.18942ZM12.8698 11.3622C12.8698 10.8802 12.4768 10.4872 11.9948 10.4872C11.5128 10.4872 11.1198 10.8802 11.1198 11.3622V15.7822C11.1198 16.2642 11.5128 16.6572 11.9948 16.6572C12.4768 16.6572 12.8698 16.2642 12.8698 15.7822V11.3622Z"
		/>
	</svg>
);

const ChevronRightIcon = () => (
	<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
		<path
			d="M7.5 15L12.5 10L7.5 5"
			stroke="#1A202C"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export const Basic = () => {
	const [popoverOpen, setPopoverOpen] = React.useState(false);
	const togglePopover = () => setPopoverOpen(!popoverOpen);
	const trigger = <Button onClick={togglePopover}>Click me</Button>;
	return (
		<Popover trigger={trigger} open={popoverOpen} onClose={togglePopover}>
			<MenuList
				items={[
					{
						content: "Import",
						icon: ImportIcon,
					},
					{
						content: "Export",
						icon: ExportIcon,
					},
					{
						content: "Duplicate",
						icon: DuplicateIcon,
					},
					{
						content: "Share",
						icon: ShareIcon,
					},
				]}
			/>
		</Popover>
	);
};

export const HelpText = () => {
	const [popoverOpen, setPopoverOpen] = React.useState(false);
	const togglePopover = () => setPopoverOpen(!popoverOpen);
	const trigger = <Button onClick={togglePopover}>Click me</Button>;
	return (
		<Popover trigger={trigger} open={popoverOpen} onClose={togglePopover}>
			<MenuList
				items={[
					{
						content: "Blog posts",
						helpText: "Manage your blog articles",
					},
					{
						content: "Blogs",
						helpText: "Publish posts to your website",
					},
				]}
			/>
		</Popover>
	);
};

export const Danger = () => {
	const [popoverOpen, setPopoverOpen] = React.useState(false);
	const togglePopover = () => setPopoverOpen(!popoverOpen);
	const trigger = <Button onClick={togglePopover}>Click me</Button>;
	return (
		<Popover trigger={trigger} open={popoverOpen} onClose={togglePopover}>
			<MenuList
				items={[
					{
						content: "Import",
						icon: ImportIcon,
					},
					{
						content: "Export",
						icon: ExportIcon,
					},
					{
						content: "Duplicate",
						icon: DuplicateIcon,
					},
					{
						content: "Share",
						icon: ShareIcon,
					},
					{
						content: "Delete",
						icon: DeleteIcon,
						danger: true,
					},
				]}
			/>
		</Popover>
	);
};

export const Sectioned = () => {
	const [popoverOpen, setPopoverOpen] = React.useState(false);
	const togglePopover = () => setPopoverOpen(!popoverOpen);
	const trigger = <Button onClick={togglePopover}>Click me</Button>;
	return (
		<Popover trigger={trigger} open={popoverOpen} onClose={togglePopover}>
			<MenuList
				sections={[
					{
						items: [
							{
								content: "Import",
								icon: ImportIcon,
							},
							{
								content: "Export",
								icon: ExportIcon,
							},
							{
								content: "Duplicate",
								icon: DuplicateIcon,
							},
							{
								content: "Share",
								icon: ShareIcon,
							},
						],
					},
					{
						items: [
							{
								content: "Delete",
								icon: DeleteIcon,
								danger: true,
							},
						],
					},
				]}
			/>
		</Popover>
	);
};

export const WithSectionTitle = () => {
	const [popoverOpen, setPopoverOpen] = React.useState(false);
	const togglePopover = () => setPopoverOpen(!popoverOpen);
	const trigger = <Button onClick={togglePopover}>Click me</Button>;
	return (
		<Popover trigger={trigger} open={popoverOpen} onClose={togglePopover}>
			<MenuList
				sections={[
					{
						title: "File options",
						items: [
							{
								content: "Import",
								icon: ImportIcon,
							},
							{
								content: "Export",
								icon: ExportIcon,
							},
							{
								content: "Duplicate",
								icon: DuplicateIcon,
							},
							{
								content: "Share",
								icon: ShareIcon,
							},
						],
					},
					{
						title: "Bulk actions",
						items: [
							{
								content: "Delete",
								icon: DeleteIcon,
								danger: true,
							},
						],
					},
				]}
			/>
		</Popover>
	);
};

export const WithDisabledItem = () => {
	const [popoverOpen, setPopoverOpen] = React.useState(false);
	const [popoverWithHelpTextOpen, setPopoverWithHelpTextOpen] =
		React.useState(false);
	const togglePopover = () => setPopoverOpen(!popoverOpen);
	const togglePopoverWithHelpText = () =>
		setPopoverWithHelpTextOpen(!popoverWithHelpTextOpen);
	const trigger = <Button onClick={togglePopover}>Click me</Button>;
	const triggerWithHelpText = (
		<Button onClick={togglePopoverWithHelpText}>Click me 2</Button>
	);
	return (
		<Stack spacing="medium">
			<Popover
				trigger={trigger}
				open={popoverOpen}
				onClose={togglePopover}
			>
				<MenuList
					items={[
						{
							content: "Import",
							icon: ImportIcon,
						},
						{
							content: "Export",
							icon: ExportIcon,
						},
						{
							content: "Duplicate",
							icon: DuplicateIcon,
						},
						{
							content: "Share",
							icon: ShareIcon,
							disabled: true,
						},
					]}
				/>
			</Popover>
			<Popover
				trigger={triggerWithHelpText}
				open={popoverWithHelpTextOpen}
				onClose={togglePopoverWithHelpText}
			>
				<MenuList
					items={[
						{
							content: "Blog posts",
							helpText: "Manage your blog articles",
						},
						{
							content: "Blogs",
							helpText: "Publish posts to your website",
							disabled: true,
						},
					]}
				/>
			</Popover>
		</Stack>
	);
};

export const WidthPrefixAndSuffix = () => {
	return (
		<div
			style={{
				width: 300,
			}}
		>
			<MenuList
				sections={[
					{
						title: "Settings",
						items: [
							{
								content: "Personal information",
								prefix: (
									<Icon
										source={UserIcon}
										backdrop
										color="neutral"
										size="small"
									/>
								),
								suffix: (
									<Icon
										source={ChevronRightIcon}
										size="small"
										outlined
									/>
								),
							},
							{
								content: "Account settings",
								prefix: (
									<Icon
										source={SettingsIcon}
										backdrop
										color="neutral"
										size="small"
									/>
								),
								suffix: (
									<Icon
										source={ChevronRightIcon}
										size="small"
										outlined
									/>
								),
							},
							{
								content: "Notifications",
								prefix: (
									<Icon
										source={BellIcon}
										backdrop
										color="neutral"
										size="small"
									/>
								),
								suffix: (
									<Icon
										source={ChevronRightIcon}
										size="small"
										outlined
									/>
								),
							},
							{
								content: "Help",
								prefix: (
									<Icon
										source={InfoIcon}
										backdrop
										color="neutral"
										size="small"
									/>
								),
								suffix: (
									<Icon
										source={ChevronRightIcon}
										size="small"
										outlined
									/>
								),
							},
						],
					},
					{
						title: "Personal Information",
						items: [
							{
								content: "Username",
								suffix: <Text color="neutral">john.doe</Text>,
							},
							{
								content: "Email address",
								suffix: (
									<Text color="neutral">mail@mail.com</Text>
								),
							},
							{
								content: "Phone number",
								suffix: (
									<Text color="neutral">
										+52 212 154 6565
									</Text>
								),
							},
							{
								content: "Language",
								suffix: <Text color="neutral">English</Text>,
							},
						],
					},
				]}
			/>
		</div>
	);
};

export const ActiveElement = () => {
	const [popoverOpen, setPopoverOpen] = React.useState(false);
	const togglePopover = () => setPopoverOpen(!popoverOpen);
	const trigger = <Button onClick={togglePopover}>Click me</Button>;
	return (
		<Popover trigger={trigger} open={popoverOpen} onClose={togglePopover}>
			<MenuList
				items={[
					{
						content: "Import",
						icon: ImportIcon,
						active: true,
					},
					{
						content: "Export",
						icon: ExportIcon,
					},
					{
						content: "Duplicate",
						icon: DuplicateIcon,
					},
					{
						content: "Share",
						icon: ShareIcon,
					},
				]}
			/>
		</Popover>
	);
};
