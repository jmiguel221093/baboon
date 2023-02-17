import type { IconSourceType } from "../../components";

const isValidIcon = (icon: any): icon is IconSourceType =>
	typeof icon === "string" || typeof icon === "function";

export default isValidIcon;
