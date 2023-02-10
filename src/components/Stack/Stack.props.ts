import type { SizeType } from "../../types";

type AlignmentType = "start" | "center" | "end" | "baseline" | "fill";
type DistributionType = "start" | "center" | "end" | "fill" | "fillEvenly";

export interface StackProps {
	children?: React.ReactNode;
	wrap?: boolean;
	direction?: "horizontal" | "vertical";
	spacing?: SizeType;
	type?: "detached" | "joined";
	alignment?: AlignmentType;
	distribution?: DistributionType;
}
