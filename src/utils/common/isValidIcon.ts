import type { IconSourceType } from "../../components";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isValidIcon = (icon: any): icon is IconSourceType =>
	typeof icon === "string" || typeof icon === "function";

export default isValidIcon;
