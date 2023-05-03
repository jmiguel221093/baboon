export type IconType =
	| React.FunctionComponent<React.SVGProps<SVGSVGElement>>
	| string;

export type IconProp = {
	icon: IconType;
	outlined?: boolean;
	filled?: boolean;
};
