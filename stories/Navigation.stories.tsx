/* eslint-disable */

import React from "react";
import type { ComponentMeta } from "@storybook/react";

import { Navigation } from "../src/components";
import type { NavigationProps } from "../src/components";
import type { NavigationSectionItemProps } from "../src/components/Navigation/components";

export default {
	title: "AllComponents/Navigation",
	component: Navigation,
} as ComponentMeta<typeof Navigation>;

const Logo = (
	<svg
		width="136"
		height="34"
		viewBox="0 0 136 34"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g clipPath="url(#clip0_33_1617)">
			<path
				d="M0.781143 25.0505L0.781146 8.35016L9.13129 12.9892V20.4579L15.8115 24.2155L22.4916 20.4579V12.9892L30.8418 8.35016V25.0505L15.8115 33.4006L0.781143 25.0505Z"
				fill="#1A202C"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M4.95623 10.6697L0.781143 8.35017L15.8115 0L30.8418 8.35017L26.6667 10.6697V22.9629L15.8115 29.2256L4.95622 22.9629L4.95623 10.6697ZM26.2144 10.921L22.4916 12.9892V12.9428L15.8115 9.18515L9.13129 12.9428V12.9892L5.40853 10.921V22.706L15.8115 28.7077L26.2144 22.706V10.921Z"
				fill="url(#paint0_linear_33_1617)"
			/>
			<path
				d="M38.8445 23.7307V9.70239H41.4899V21.3258H47.9028V23.7307H38.8445Z"
				fill="#1A202C"
			/>
			<path
				d="M53.6141 24.0112C52.6255 24.0112 51.7371 23.8108 50.9488 23.41C50.1605 23.0092 49.5393 22.428 49.0851 21.6665C48.6307 20.905 48.4036 19.9898 48.4036 18.921V18.6003C48.4036 17.5315 48.6307 16.6163 49.0851 15.8548C49.5393 15.0932 50.1605 14.5121 50.9488 14.1113C51.7371 13.7104 52.6255 13.51 53.6141 13.51C54.6028 13.51 55.4913 13.7104 56.2795 14.1113C57.0678 14.5121 57.6891 15.0932 58.1433 15.8548C58.5975 16.6163 58.8247 17.5315 58.8247 18.6003V18.921C58.8247 19.9898 58.5975 20.905 58.1433 21.6665C57.6891 22.428 57.0678 23.0092 56.2795 23.41C55.4913 23.8108 54.6028 24.0112 53.6141 24.0112ZM53.6141 21.7667C54.3891 21.7667 55.0304 21.5196 55.538 21.0252C56.0458 20.5175 56.2996 19.796 56.2996 18.8608V18.6604C56.2996 17.7252 56.0458 17.0104 55.538 16.5161C55.0437 16.0084 54.4024 15.7546 53.6141 15.7546C52.8393 15.7546 52.198 16.0084 51.6903 16.5161C51.1826 17.0104 50.9288 17.7252 50.9288 18.6604V18.8608C50.9288 19.796 51.1826 20.5175 51.6903 21.0252C52.198 21.5196 52.8393 21.7667 53.6141 21.7667Z"
				fill="#1A202C"
			/>
			<path
				d="M59.7727 18.8007V18.4801C59.7727 17.438 59.9797 16.5495 60.3939 15.8147C60.8081 15.0665 61.3559 14.4987 62.0372 14.1113C62.732 13.7104 63.4868 13.51 64.3018 13.51C65.2103 13.51 65.8984 13.6704 66.3659 13.991C66.8336 14.3116 67.1743 14.6457 67.388 14.9931H67.7488V13.7906H70.2338V25.4942C70.2338 26.1756 70.0333 26.7166 69.6325 27.1175C69.2317 27.5316 68.6973 27.7388 68.0293 27.7388H61.3759V25.5343H67.1475C67.5216 25.5343 67.7087 25.3339 67.7087 24.9331V22.3478H67.3479C67.2143 22.5616 67.0273 22.782 66.7868 23.0092C66.5463 23.2229 66.2257 23.4033 65.8249 23.5503C65.4241 23.6972 64.9163 23.7708 64.3018 23.7708C63.4868 23.7708 62.732 23.577 62.0372 23.1895C61.3559 22.7887 60.8081 22.2209 60.3939 21.4861C59.9797 20.738 59.7727 19.8428 59.7727 18.8007ZM65.0233 21.5663C65.7981 21.5663 66.4461 21.3191 66.9672 20.8248C67.4883 20.3305 67.7488 19.6357 67.7488 18.7406V18.5402C67.7488 17.6316 67.4883 16.937 66.9672 16.456C66.4595 15.9617 65.8115 15.7145 65.0233 15.7145C64.2483 15.7145 63.6004 15.9617 63.0794 16.456C62.5583 16.937 62.2978 17.6316 62.2978 18.5402V18.7406C62.2978 19.6357 62.5583 20.3305 63.0794 20.8248C63.6004 21.3191 64.2483 21.5663 65.0233 21.5663Z"
				fill="#1A202C"
			/>
			<path
				d="M76.8611 24.0112C75.8723 24.0112 74.9839 23.8108 74.1956 23.41C73.4074 23.0092 72.7861 22.428 72.3319 21.6665C71.8777 20.905 71.6506 19.9898 71.6506 18.921V18.6003C71.6506 17.5315 71.8777 16.6163 72.3319 15.8548C72.7861 15.0932 73.4074 14.5121 74.1956 14.1113C74.9839 13.7104 75.8723 13.51 76.8611 13.51C77.8497 13.51 78.7381 13.7104 79.5264 14.1113C80.3147 14.5121 80.9359 15.0932 81.3901 15.8548C81.8444 16.6163 82.0715 17.5315 82.0715 18.6003V18.921C82.0715 19.9898 81.8444 20.905 81.3901 21.6665C80.9359 22.428 80.3147 23.0092 79.5264 23.41C78.7381 23.8108 77.8497 24.0112 76.8611 24.0112ZM76.8611 21.7667C77.6359 21.7667 78.2772 21.5196 78.7849 21.0252C79.2926 20.5175 79.5465 19.796 79.5465 18.8608V18.6604C79.5465 17.7252 79.2926 17.0104 78.7849 16.5161C78.2906 16.0084 77.6493 15.7546 76.8611 15.7546C76.0861 15.7546 75.4449 16.0084 74.9371 16.5161C74.4295 17.0104 74.1756 17.7252 74.1756 18.6604V18.8608C74.1756 19.796 74.4295 20.5175 74.9371 21.0252C75.4449 21.5196 76.0861 21.7667 76.8611 21.7667Z"
				fill="#1A202C"
			/>
			<path
				d="M83.5005 23.7307V13.7906H86.0256V23.7307H83.5005ZM84.763 12.6283C84.3088 12.6283 83.9213 12.4813 83.6007 12.1874C83.2934 11.8934 83.1398 11.506 83.1398 11.0251C83.1398 10.5441 83.2934 10.1566 83.6007 9.86267C83.9213 9.56881 84.3088 9.42178 84.763 9.42178C85.2307 9.42178 85.6181 9.56881 85.9254 9.86267C86.2327 10.1566 86.3863 10.5441 86.3863 11.0251C86.3863 11.506 86.2327 11.8934 85.9254 12.1874C85.6181 12.4813 85.2307 12.6283 84.763 12.6283Z"
				fill="#1A202C"
			/>
			<path
				d="M87.922 27.7388V13.7906H90.4071V14.9931H90.768C90.9947 14.6056 91.3485 14.2649 91.8302 13.9709C92.3111 13.6636 92.9991 13.51 93.8942 13.51C94.696 13.51 95.4373 13.7104 96.1182 14.1113C96.8 14.4987 97.3476 15.0732 97.7618 15.8348C98.176 16.5963 98.3831 17.5181 98.3831 18.6003V18.921C98.3831 20.0031 98.176 20.925 97.7618 21.6865C97.3476 22.4481 96.8 23.0292 96.1182 23.43C95.4373 23.8175 94.696 24.0112 93.8942 24.0112C93.2925 24.0112 92.7849 23.9377 92.3707 23.7908C91.9698 23.6572 91.6427 23.4835 91.3893 23.2697C91.1485 23.0426 90.9547 22.8155 90.808 22.5884H90.4471V27.7388H87.922ZM93.1325 21.8068C93.9209 21.8068 94.5689 21.5596 95.0765 21.0652C95.5973 20.5576 95.8578 19.8228 95.8578 18.8608V18.6604C95.8578 17.6985 95.5973 16.9703 95.0765 16.476C94.5556 15.9684 93.9076 15.7145 93.1325 15.7145C92.3573 15.7145 91.7093 15.9684 91.1885 16.476C90.6676 16.9703 90.4071 17.6985 90.4071 18.6604V18.8608C90.4071 19.8228 90.6676 20.5576 91.1885 21.0652C91.7093 21.5596 92.3573 21.8068 93.1325 21.8068Z"
				fill="#1A202C"
			/>
			<path
				d="M103.928 24.0112C102.632 24.0112 101.57 23.7307 100.741 23.1695C99.9138 22.6084 99.4124 21.8068 99.2382 20.7646L101.564 20.1635C101.657 20.631 101.811 20.9985 102.024 21.2657C102.252 21.5329 102.525 21.7266 102.846 21.8468C103.18 21.9537 103.54 22.0072 103.928 22.0072C104.516 22.0072 104.95 21.9069 105.231 21.7066C105.511 21.4928 105.652 21.2323 105.652 20.925C105.652 20.6177 105.518 20.3839 105.251 20.2236C104.984 20.0499 104.556 19.9096 103.968 19.8028L103.407 19.7025C102.712 19.5689 102.077 19.3885 101.503 19.1614C100.929 18.921 100.468 18.5936 100.12 18.1795C99.7733 17.7652 99.5991 17.2308 99.5991 16.5762C99.5991 15.5876 99.96 14.8327 100.682 14.3116C101.403 13.7772 102.352 13.51 103.527 13.51C104.636 13.51 105.558 13.7572 106.292 14.2516C107.028 14.7459 107.508 15.3939 107.736 16.1955L105.391 16.9169C105.284 16.4092 105.064 16.0484 104.73 15.8348C104.409 15.621 104.008 15.514 103.527 15.514C103.046 15.514 102.679 15.6009 102.425 15.7746C102.172 15.9349 102.044 16.162 102.044 16.456C102.044 16.7766 102.178 17.0171 102.445 17.1774C102.712 17.3244 103.073 17.438 103.527 17.5181L104.088 17.6183C104.836 17.7519 105.511 17.9323 106.113 18.1594C106.727 18.3732 107.208 18.6871 107.556 19.1013C107.916 19.5021 108.097 20.0499 108.097 20.7446C108.097 21.7868 107.716 22.595 106.954 23.1695C106.206 23.7307 105.197 24.0112 103.928 24.0112Z"
				fill="#1A202C"
			/>
			<path
				d="M113.195 23.8909C112.42 23.8909 111.739 23.7172 111.151 23.37C110.577 23.0092 110.129 22.5148 109.808 21.8869C109.488 21.259 109.327 20.5375 109.327 19.7226V13.7906H111.852V19.5221C111.852 20.2703 112.033 20.8315 112.394 21.2055C112.767 21.5796 113.295 21.7667 113.977 21.7667C114.751 21.7667 115.353 21.5128 115.78 21.0052C116.208 20.4841 116.421 19.7627 116.421 18.8408V13.7906H118.947V23.7307H116.461V22.428H116.101C115.94 22.762 115.64 23.0893 115.199 23.41C114.758 23.7307 114.09 23.8909 113.195 23.8909Z"
				fill="#1A202C"
			/>
			<path
				d="M120.855 23.7307V13.7906H123.34V14.8728H123.7C123.874 14.5388 124.162 14.2516 124.562 14.011C124.963 13.7572 125.491 13.6303 126.146 13.6303C126.853 13.6303 127.421 13.7706 127.849 14.0511C128.276 14.3183 128.604 14.6724 128.831 15.1132H129.191C129.419 14.6858 129.74 14.3317 130.154 14.0511C130.568 13.7706 131.156 13.6303 131.917 13.6303C132.532 13.6303 133.086 13.7639 133.58 14.0311C134.088 14.2849 134.489 14.679 134.783 15.2135C135.09 15.7345 135.244 16.3958 135.244 17.1975V23.7307H132.718V17.3779C132.718 16.83 132.579 16.4226 132.298 16.1554C132.017 15.8748 131.623 15.7345 131.116 15.7345C130.541 15.7345 130.093 15.9216 129.772 16.2956C129.466 16.6564 129.312 17.1774 129.312 17.8588V23.7307H126.787V17.3779C126.787 16.83 126.646 16.4226 126.366 16.1554C126.085 15.8748 125.692 15.7345 125.183 15.7345C124.609 15.7345 124.162 15.9216 123.841 16.2956C123.533 16.6564 123.38 17.1774 123.38 17.8588V23.7307H120.855Z"
				fill="#1A202C"
			/>
		</g>
		<defs>
			<linearGradient
				id="paint0_linear_33_1617"
				x1="4.95622"
				y1="6.49456"
				x2="27.5017"
				y2="6.49457"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#548CFF" />
				<stop offset="0.307292" stopColor="#B8405E" />
				<stop offset="0.604167" stopColor="#FFC93C" />
				<stop offset="1" stopColor="#42C2FF" />
			</linearGradient>
			<clipPath id="clip0_33_1617">
				<rect width="136" height="33.7778" fill="white" />
			</clipPath>
		</defs>
	</svg>
);

const CollapsedLogo = (
	<svg
		width="32"
		height="34"
		viewBox="0 0 32 34"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M0.969696 25.0504L0.969699 8.3501L9.31984 12.9891V20.4578L16 24.2154L22.6801 20.4578V12.9891L31.0303 8.3501V25.0504L16 33.4006L0.969696 25.0504Z"
			fill="#1A202C"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M5.14479 10.6697L0.969696 8.35017L16 0L31.0303 8.35017L26.8552 10.6697V22.9629L16 29.2256L5.14478 22.9629L5.14479 10.6697ZM26.403 10.921L22.6801 12.9892V12.9428L16 9.18515L9.31984 12.9428V12.9892L5.59708 10.921V22.706L16 28.7077L26.403 22.706V10.921Z"
			fill="url(#paint0_linear_33_1889)"
		/>
		<defs>
			<linearGradient
				id="paint0_linear_33_1889"
				x1="5.14478"
				y1="6.49456"
				x2="27.6902"
				y2="6.49457"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#548CFF" />
				<stop offset="0.307292" stop-color="#B8405E" />
				<stop offset="0.604167" stop-color="#FFC93C" />
				<stop offset="1" stop-color="#42C2FF" />
			</linearGradient>
		</defs>
	</svg>
);

const HomeIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24">
		<path
			id="Home_2"
			d="M9.14373 20.7822V17.7154C9.14372 16.9382 9.77567 16.3068 10.5584 16.3019H13.4326C14.2189 16.3019 14.8563 16.9348 14.8563 17.7154V20.7733C14.8562 21.4474 15.404 21.9952 16.0829 22.0001H18.0438C18.9596 22.0025 19.8388 21.6429 20.4872 21.0008C21.1356 20.3587 21.5 19.4869 21.5 18.5776V9.86597C21.5 9.13151 21.1721 8.43483 20.6046 7.96362L13.943 2.67439C12.7785 1.74924 11.1154 1.77913 9.98539 2.74551L3.46701 7.96362C2.87274 8.42094 2.51755 9.11968 2.5 9.86597V18.5688C2.5 20.4638 4.04738 22.0001 5.95617 22.0001H7.87229C8.19917 22.0025 8.51349 21.8752 8.74547 21.6465C8.97746 21.4179 9.10793 21.1068 9.10792 20.7822H9.14373Z"
		/>
	</svg>
);

const ProjectsIcon = () => (
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

const MessageIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24">
		<path
			opacity="0.4"
			d="M12.02 2.00012C6.21 2.00012 2 6.74012 2 12.0001C2 13.6801 2.49 15.4101 3.35 16.9901C3.51 17.2501 3.53 17.5801 3.42 17.8901L2.75 20.1301C2.6 20.6701 3.06 21.0701 3.57 20.9101L5.59 20.3101C6.14 20.1301 6.57 20.3601 7.081 20.6701C8.541 21.5301 10.36 21.9701 12 21.9701C16.96 21.9701 22 18.1401 22 11.9701C22 6.65012 17.7 2.00012 12.02 2.00012Z"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M11.9805 13.2902C11.2705 13.2802 10.7005 12.7102 10.7005 12.0002C10.7005 11.3002 11.2805 10.7202 11.9805 10.7302C12.6905 10.7302 13.2605 11.3002 13.2605 12.0102C13.2605 12.7102 12.6905 13.2902 11.9805 13.2902ZM7.37009 13.2902C6.67009 13.2902 6.09009 12.7102 6.09009 12.0102C6.09009 11.3002 6.66009 10.7302 7.37009 10.7302C8.08009 10.7302 8.65009 11.3002 8.65009 12.0102C8.65009 12.7102 8.08009 13.2802 7.37009 13.2902ZM15.3103 12.0102C15.3103 12.7102 15.8803 13.2902 16.5903 13.2902C17.3003 13.2902 17.8703 12.7102 17.8703 12.0102C17.8703 11.3002 17.3003 10.7302 16.5903 10.7302C15.8803 10.7302 15.3103 11.3002 15.3103 12.0102Z"
		/>
	</svg>
);

const BagIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24">
		<path
			opacity="0.4"
			d="M16.6203 22.0001H7.3797C4.68923 22.0001 2.5 19.8312 2.5 17.1647V11.8356C2.5 9.16906 4.68923 7.00012 7.3797 7.00012H16.6203C19.3108 7.00012 21.5 9.16906 21.5 11.8356V17.1647C21.5 19.8312 19.3108 22.0001 16.6203 22.0001Z"
		/>
		<path d="M15.7551 10.0001C15.344 10.0001 15.0103 9.67646 15.0103 9.27767V6.35702C15.0103 4.75124 13.6635 3.44503 12.0089 3.44503C11.2472 3.44503 10.4477 3.74172 9.87861 4.2879C9.30854 4.836 8.99272 5.5652 8.98974 6.34353V9.27767C8.98974 9.67646 8.65604 10.0001 8.24487 10.0001C7.8337 10.0001 7.5 9.67646 7.5 9.27767V6.35702C7.50497 5.17315 7.97771 4.0808 8.82984 3.26298C9.68098 2.44323 10.7814 2.03191 12.0119 2.00012C14.4849 2.00012 16.5 3.95461 16.5 6.35702V9.27767C16.5 9.67646 16.1663 10.0001 15.7551 10.0001Z" />
	</svg>
);

const UsersIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24">
		<path d="M9.34933 14.8578C5.38553 14.8578 2 15.4702 2 17.9175C2 20.3667 5.364 21.0001 9.34933 21.0001C13.3131 21.0001 16.6987 20.3878 16.6987 17.9405C16.6987 15.4912 13.3347 14.8578 9.34933 14.8578Z" />
		<path
			opacity="0.4"
			d="M9.34935 12.5249C12.049 12.5249 14.2124 10.4063 14.2124 7.76253C14.2124 5.11877 12.049 3.00012 9.34935 3.00012C6.65072 3.00012 4.48633 5.11877 4.48633 7.76253C4.48633 10.4063 6.65072 12.5249 9.34935 12.5249Z"
		/>
		<path
			opacity="0.4"
			d="M16.1734 7.84888C16.1734 9.1952 15.7605 10.4514 15.0364 11.495C14.9611 11.6023 15.0276 11.747 15.1587 11.77C15.3407 11.7997 15.5276 11.8179 15.7184 11.8217C17.6167 11.8706 19.3202 10.6738 19.7908 8.87132C20.4885 6.19689 18.4415 3.79556 15.8339 3.79556C15.5511 3.79556 15.2801 3.82431 15.0159 3.87701C14.9797 3.88468 14.9405 3.90193 14.921 3.93259C14.8955 3.97188 14.9141 4.02266 14.9395 4.0562C15.7233 5.1323 16.1734 6.4422 16.1734 7.84888Z"
		/>
		<path d="M21.7791 15.1695C21.4317 14.4441 20.5932 13.9468 19.3172 13.7024C18.7155 13.5587 17.0853 13.3546 15.5697 13.3833C15.5472 13.3862 15.5344 13.4015 15.5325 13.4111C15.5295 13.4264 15.5364 13.4494 15.5658 13.4657C16.2663 13.8049 18.9738 15.2806 18.6333 18.393C18.6186 18.529 18.7292 18.644 18.8671 18.6248C19.5335 18.5319 21.2478 18.1706 21.7791 17.0476C22.0736 16.4535 22.0736 15.7636 21.7791 15.1695Z" />
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

const NotificationsIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24">
		<path d="M19.7695 11.6455C19.039 10.7924 18.7071 10.0532 18.7071 8.79728V8.37025C18.7071 6.73366 18.3304 5.67919 17.5115 4.62472C16.2493 2.98711 14.1244 2.00012 12.0442 2.00012H11.9558C9.91935 2.00012 7.86106 2.94179 6.577 4.51292C5.71333 5.58855 5.29293 6.68834 5.29293 8.37025V8.79728C5.29293 10.0532 4.98284 10.7924 4.23049 11.6455C3.67691 12.2739 3.5 13.0816 3.5 13.9558C3.5 14.831 3.78723 15.6599 4.36367 16.3337C5.11602 17.1414 6.17846 17.657 7.26375 17.7467C8.83505 17.926 10.4063 17.9934 12.0005 17.9934C13.5937 17.9934 15.165 17.8806 16.7372 17.7467C17.8215 17.657 18.884 17.1414 19.6363 16.3337C20.2118 15.6599 20.5 14.831 20.5 13.9558C20.5 13.0816 20.3231 12.2739 19.7695 11.6455Z" />
		<path
			opacity="0.4"
			d="M14.0088 19.2285C13.5088 19.1217 10.4627 19.1217 9.96275 19.2285C9.53539 19.3272 9.07324 19.5568 9.07324 20.0604C9.09809 20.5408 9.37935 20.9648 9.76895 21.2337L9.76795 21.2347C10.2718 21.6275 10.8632 21.8772 11.4824 21.9669C11.8123 22.0122 12.1482 22.0102 12.4901 21.9669C13.1083 21.8772 13.6997 21.6275 14.2036 21.2347L14.2026 21.2337C14.5922 20.9648 14.8734 20.5408 14.8983 20.0604C14.8983 19.5568 14.4361 19.3272 14.0088 19.2285Z"
		/>
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

const LogoutIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24">
		<path
			opacity="0.4"
			d="M2 6.44712C2 3.99612 4.03024 2.00012 6.52453 2.00012H11.4856C13.9748 2.00012 16 3.99012 16 6.43712V17.5531C16 20.0051 13.9698 22.0001 11.4744 22.0001H6.51537C4.02515 22.0001 2 20.0101 2 17.5631V16.6231V6.44712Z"
		/>
		<path d="M21.779 11.4549L18.9332 8.54592C18.6391 8.24592 18.1657 8.24592 17.8726 8.54792C17.5804 8.84992 17.5814 9.33692 17.8745 9.63692L19.4338 11.2299H17.9388H9.5485C9.13459 11.2299 8.79858 11.5749 8.79858 11.9999C8.79858 12.4259 9.13459 12.7699 9.5485 12.7699H19.4338L17.8745 14.3629C17.5814 14.6629 17.5804 15.1499 17.8726 15.4519C18.0196 15.6029 18.2115 15.6789 18.4043 15.6789C18.5952 15.6789 18.7871 15.6029 18.9332 15.4539L21.779 12.5459C21.9202 12.4009 22 12.2049 22 11.9999C22 11.7959 21.9202 11.5999 21.779 11.4549Z" />
	</svg>
);

const PlusIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24">
		<path d="M19.75 11H12.5V3.75C12.5 3.33579 12.1642 3 11.75 3C11.3358 3 11 3.33579 11 3.75V11H3.75C3.33579 11 3 11.3358 3 11.75C3 12.1642 3.33579 12.5 3.75 12.5H11V19.75C11 20.1642 11.3358 20.5 11.75 20.5C12.1642 20.5 12.5 20.1642 12.5 19.75V12.5H19.75C20.1642 12.5 20.5 12.1642 20.5 11.75C20.5 11.3358 20.1642 11 19.75 11Z" />
	</svg>
);

const BASIC_NAVIGATION_ITEMS: NavigationSectionItemProps<{
	href?: string;
}>[] = [
	{
		label: "Dashboard",
		anchorProps: {
			href: "#",
		},
	},
	{
		label: "Projects",
		anchorProps: {
			href: "#",
		},
	},
	{
		label: "Messages",
		anchorProps: {
			href: "#",
		},
	},
	{
		label: "Services",
		anchorProps: {
			href: "#",
		},
	},
	{
		label: "Customers",
		anchorProps: {
			href: "#",
		},
	},
];
const ICONED_NAVIGATION_ITEMS: NavigationSectionItemProps<{
	href?: string;
}>[] = [
	{
		label: "Dashboard",
		icon: HomeIcon,
		anchorProps: {
			href: "#",
		},
	},
	{
		label: "Projects",
		icon: ProjectsIcon,
		anchorProps: {
			href: "#",
		},
	},
	{
		label: "Messages",
		icon: MessageIcon,
		anchorProps: {
			href: "#",
		},
	},
	{
		label: "Services",
		icon: BagIcon,
		anchorProps: {
			href: "#",
		},
	},
	{
		label: "Customers",
		icon: UsersIcon,
		anchorProps: {
			href: "#",
		},
	},
];

const BADGE_NAVIGATION_ITEMS: NavigationSectionItemProps<{
	href?: string;
}>[] = [
	{
		label: "Dashboard",
		icon: HomeIcon,
		anchorProps: {
			href: "#",
		},
	},
	{
		label: "Projects",
		icon: ProjectsIcon,
		anchorProps: {
			href: "#",
		},
	},
	{
		label: "Messages",
		icon: MessageIcon,
		badge: "12",
		anchorProps: {
			href: "#",
		},
	},
	{
		label: "Services",
		icon: BagIcon,
		anchorProps: {
			href: "#",
		},
	},
	{
		label: "Customers",
		icon: UsersIcon,
		anchorProps: {
			href: "#",
		},
	},
];

const SELECTED_NAVIGATION_ITEMS: NavigationSectionItemProps<{
	href?: string;
}>[] = [
	{
		label: "Dashboard",
		icon: HomeIcon,
		selected: true,
		anchorProps: {
			href: "#",
		},
	},
	{
		label: "Projects",
		icon: ProjectsIcon,
		anchorProps: {
			href: "#",
		},
	},
	{
		label: "Messages",
		icon: MessageIcon,
		badge: "12",
		anchorProps: {
			href: "#",
		},
	},
	{
		label: "Services",
		icon: BagIcon,
		anchorProps: {
			href: "#",
		},
	},
	{
		label: "Customers",
		icon: UsersIcon,
		anchorProps: {
			href: "#",
		},
	},
];

const DISABLED_NAVIGATION_ITEMS: NavigationSectionItemProps<{
	href?: string;
}>[] = [
	{
		label: "Dashboard",
		icon: HomeIcon,
		selected: true,
		anchorProps: {
			href: "#",
		},
	},
	{
		label: "Projects",
		icon: ProjectsIcon,
		anchorProps: {
			href: "#",
		},
	},
	{
		label: "Messages",
		icon: MessageIcon,
		badge: "12",
		anchorProps: {
			href: "#",
		},
	},
	{
		label: "Services",
		icon: BagIcon,
		anchorProps: {
			href: "#",
		},
	},
	{
		label: "Customers",
		icon: UsersIcon,
		disabled: true,
		anchorProps: {
			href: "#",
		},
	},
];

const SUBNAVIGATION_NAVIGATION_ITEMS: NavigationSectionItemProps<{
	href?: string;
}>[] = [
	{
		label: "Dashboard",
		icon: HomeIcon,
		anchorProps: {
			href: "#",
		},
	},
	{
		label: "Projects",
		icon: ProjectsIcon,
		selected: true,
		anchorProps: {
			href: "#",
		},
		subItems: [
			{
				label: "Frontend",
				anchorProps: {
					href: "#",
				},
			},
			{
				label: "Backend",
				anchorProps: {
					href: "#",
				},
			},
		],
	},
	{
		label: "Messages",
		icon: MessageIcon,
		badge: "12",
		anchorProps: {
			href: "#",
		},
	},
	{
		label: "Services",
		icon: BagIcon,
		anchorProps: {
			href: "#",
		},
	},
	{
		label: "Customers",
		icon: UsersIcon,
		disabled: true,
		anchorProps: {
			href: "#",
		},
	},
];

const SUBNAVIGATION_SELECTED_NAVIGATION_ITEMS: NavigationSectionItemProps<{
	href?: string;
}>[] = [
	{
		label: "Dashboard",
		icon: HomeIcon,
		anchorProps: {
			href: "#",
		},
	},
	{
		label: "Projects",
		icon: ProjectsIcon,
		selected: true,
		anchorProps: {
			href: "#",
		},
		subItems: [
			{
				label: "Frontend",
				selected: true,
				anchorProps: {
					href: "#",
				},
			},
			{
				label: "Backend",
				anchorProps: {
					href: "#",
				},
			},
		],
	},
	{
		label: "Messages",
		icon: MessageIcon,
		badge: "12",
		anchorProps: {
			href: "#",
		},
	},
	{
		label: "Services",
		icon: BagIcon,
		anchorProps: {
			href: "#",
		},
	},
	{
		label: "Customers",
		icon: UsersIcon,
		disabled: true,
		anchorProps: {
			href: "#",
		},
	},
];

const SUBNAVIGATION_DISABLED_NAVIGATION_ITEMS: NavigationSectionItemProps<{
	href?: string;
}>[] = [
	{
		label: "Dashboard",
		icon: HomeIcon,
		anchorProps: {
			href: "#",
		},
	},
	{
		label: "Projects",
		icon: ProjectsIcon,
		selected: true,
		anchorProps: {
			href: "#",
		},
		subItems: [
			{
				label: "Frontend",
				selected: true,
				anchorProps: {
					href: "#",
				},
			},
			{
				label: "Backend",
				disabled: true,
				anchorProps: {
					href: "#",
				},
			},
		],
	},
	{
		label: "Messages",
		icon: MessageIcon,
		badge: "12",
		anchorProps: {
			href: "#",
		},
	},
	{
		label: "Services",
		icon: BagIcon,
		anchorProps: {
			href: "#",
		},
	},
	{
		label: "Customers",
		icon: UsersIcon,
		disabled: true,
		anchorProps: {
			href: "#",
		},
	},
];

const NAVIGATION_PLATFORM_ITEMS: NavigationSectionItemProps<{
	href?: string;
}>[] = [
	{
		label: "Settings",
		icon: SettingsIcon,
		anchorProps: {
			href: "#",
		},
	},
	{
		label: "Notifications",
		icon: NotificationsIcon,
		badge: "23",
		anchorProps: {
			href: "#",
		},
	},
];

const NAVIGATION_USER_NAVIGATION: NavigationSectionItemProps<{
	href?: string;
}>[] = [
	{
		label: "Account",
		icon: UserIcon,
		anchorProps: {
			href: "#",
		},
	},
	{
		label: "Logout",
		icon: LogoutIcon,
		anchorProps: {
			href: "#",
		},
	},
];

const NavigationContainer = (props: { children: React.ReactNode }) => (
	<div
		style={{
			height: 800,
		}}
	>
		{props.children}
	</div>
);

const Template = (args: NavigationProps) => (
	<NavigationContainer>
		<Navigation {...args} />
	</NavigationContainer>
);

export const Basic = Template.bind({});
Basic.args = {
	children: <Navigation.Section items={BASIC_NAVIGATION_ITEMS} />,
};

export const WithLogo = Template.bind({});
WithLogo.args = {
	logo: Logo,
	children: <Navigation.Section items={BASIC_NAVIGATION_ITEMS} />,
};

export const WithIcons = Template.bind({});
WithIcons.args = {
	logo: Logo,
	children: <Navigation.Section items={ICONED_NAVIGATION_ITEMS} />,
};

export const WithBadges = Template.bind({});
WithBadges.args = {
	logo: Logo,
	children: <Navigation.Section items={BADGE_NAVIGATION_ITEMS} />,
};

export const MultipleSections = Template.bind({});
MultipleSections.args = {
	logo: Logo,
	children: (
		<>
			<Navigation.Section items={BADGE_NAVIGATION_ITEMS} />
			<Navigation.Section items={NAVIGATION_PLATFORM_ITEMS} />
		</>
	),
};

export const WithSectionTitle = Template.bind({});
WithSectionTitle.args = {
	logo: Logo,
	children: (
		<>
			<Navigation.Section items={BADGE_NAVIGATION_ITEMS} />
			<Navigation.Section
				title="Platform"
				items={NAVIGATION_PLATFORM_ITEMS}
			/>
		</>
	),
};

export const WithSectionAction = Template.bind({});
WithSectionAction.args = {
	logo: Logo,
	children: (
		<>
			<Navigation.Section items={BADGE_NAVIGATION_ITEMS} />
			<Navigation.Section
				title="Platform"
				items={NAVIGATION_PLATFORM_ITEMS}
				action={{
					icon: PlusIcon,
				}}
			/>
		</>
	),
};

export const WithUserNavigation = Template.bind({});
WithUserNavigation.args = {
	logo: Logo,
	children: (
		<>
			<Navigation.Section items={BADGE_NAVIGATION_ITEMS} />
			<Navigation.Section
				title="Platform"
				items={NAVIGATION_PLATFORM_ITEMS}
				action={{
					icon: PlusIcon,
				}}
			/>
		</>
	),
	userNavigation: NAVIGATION_USER_NAVIGATION,
};

export const SelectedItem = Template.bind({});
SelectedItem.args = {
	logo: Logo,
	children: (
		<>
			<Navigation.Section items={SELECTED_NAVIGATION_ITEMS} />
			<Navigation.Section
				title="Platform"
				items={NAVIGATION_PLATFORM_ITEMS}
				action={{
					icon: PlusIcon,
				}}
			/>
		</>
	),
	userNavigation: NAVIGATION_USER_NAVIGATION,
};

export const DisabledItem = Template.bind({});
DisabledItem.args = {
	logo: Logo,
	children: (
		<>
			<Navigation.Section items={DISABLED_NAVIGATION_ITEMS} />
			<Navigation.Section
				title="Platform"
				items={NAVIGATION_PLATFORM_ITEMS}
				action={{
					icon: PlusIcon,
				}}
			/>
		</>
	),
	userNavigation: NAVIGATION_USER_NAVIGATION,
};

export const SubNavigation = Template.bind({});
SubNavigation.args = {
	logo: Logo,
	children: (
		<>
			<Navigation.Section items={SUBNAVIGATION_NAVIGATION_ITEMS} />
			<Navigation.Section
				title="Platform"
				items={NAVIGATION_PLATFORM_ITEMS}
				action={{
					icon: PlusIcon,
				}}
			/>
		</>
	),
	userNavigation: NAVIGATION_USER_NAVIGATION,
};

export const SubNavigationWithSelected = Template.bind({});
SubNavigationWithSelected.args = {
	logo: Logo,
	children: (
		<>
			<Navigation.Section
				items={SUBNAVIGATION_SELECTED_NAVIGATION_ITEMS}
			/>
			<Navigation.Section
				title="Platform"
				items={NAVIGATION_PLATFORM_ITEMS}
				action={{
					icon: PlusIcon,
				}}
			/>
		</>
	),
	userNavigation: NAVIGATION_USER_NAVIGATION,
};

export const SubNavigationDisabledWithSelected = Template.bind({});
SubNavigationDisabledWithSelected.args = {
	logo: Logo,
	children: (
		<>
			<Navigation.Section
				items={SUBNAVIGATION_DISABLED_NAVIGATION_ITEMS}
			/>
			<Navigation.Section
				title="Platform"
				items={NAVIGATION_PLATFORM_ITEMS}
				action={{
					icon: PlusIcon,
				}}
			/>
		</>
	),
	userNavigation: NAVIGATION_USER_NAVIGATION,
};

export const Collapsed = Template.bind({});
Collapsed.args = {
	logo: Logo,
	collapsedLogo: CollapsedLogo,
	collapsed: true,
	children: (
		<>
			<Navigation.Section items={DISABLED_NAVIGATION_ITEMS} />
			<Navigation.Section
				title="Platform"
				items={NAVIGATION_PLATFORM_ITEMS}
				action={{
					icon: PlusIcon,
				}}
			/>
		</>
	),
	userNavigation: NAVIGATION_USER_NAVIGATION,
};
