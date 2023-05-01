import { cssClassNames } from "../../utils";
import { Label } from "../Label";
import { Text } from "../Text";

import type { ProgressBarProps } from "./ProgressBar.props";

import "./ProgressBar.styles.scss";

const COMPONENT_NAME = "ProgressBar";

function getRightProgress(progress: number, max: number) {
	if (progress < 0) {
		if (process.env.NODE_ENV === "development") {
			console.warn(
				// eslint-disable-next-line max-len
				`The number ${progress} cannot be lower than 0. By default it will be 0.`
			);
		}
		return 0;
	} else if (progress > max) {
		if (process.env.NODE_ENV === "development") {
			console.warn(
				// eslint-disable-next-line max-len
				`The number ${progress} cannot be greater than max prop. Max prop by default is 100. By default it will be ${max}.`
			);
		}
		return 100;
	}
	const progressPercentage = (progress / max) * 100;
	return progressPercentage;
}

type ProgressType = {
	value: number;
	color?: ProgressBarProps["color"];
};

function getProgressValues(
	progress: ProgressBarProps["progress"],
	color: ProgressBarProps["color"],
	max: number
): [ProgressType[], number] {
	let progressValues: ProgressType[] = [];
	let total = 0;
	if (Array.isArray(progress)) {
		progress.forEach((progressNumber) => {
			const progressValue = getRightProgress(progressNumber.value, max);
			progressValues.push({
				value: progressValue,
				color: progressNumber.color || "primary",
			});
			total += progressValue;
		});
	} else {
		const progressValue = getRightProgress(progress as number, max);
		progressValues = [{ value: progressValue, color: color }];
		total = progressValue;
	}
	return [progressValues, total];
}

const ProgressBar = ({
	color = "primary",
	label,
	metadata,
	progress = 0,
	showProgress,
	size = "small",
	max = 100,
	fixFloatProgressTo = 2,
}: ProgressBarProps) => {
	const className = cssClassNames(COMPONENT_NAME, size);
	const [progressValues, total] = getProgressValues(progress, color, max);

	if (process.env.NODE_ENV === "development" && total > 100) {
		console.warn(
			`The total progress is ${total}%. It should be less than 100%.`
		);
	}

	const labelMetadataContaineClassName = cssClassNames(
		`${COMPONENT_NAME}__LabelContainer`
	);

	const totalProgress = Number.isInteger(total)
		? total
		: total.toFixed(fixFloatProgressTo);

	const labelMarkup = label ? <Label>{label}</Label> : null;
	const showProgressMarkup = showProgress ? (
		<div className={`${COMPONENT_NAME}__MetadataItem`}>
			<Text variant="label" element="span">
				{totalProgress}%
			</Text>
		</div>
	) : null;
	const metadataMarkup = metadata ? (
		<div className={`${COMPONENT_NAME}__MetadataItem`}>{metadata}</div>
	) : null;
	const metadataProgressMarkup =
		metadataMarkup || showProgressMarkup ? (
			<div className={`${COMPONENT_NAME}__Metadata`}>
				{showProgressMarkup}
				{metadataMarkup}
			</div>
		) : null;

	const labelContainerMarkup =
		labelMarkup || metadataProgressMarkup ? (
			<div className={labelMetadataContaineClassName}>
				<div className={`${COMPONENT_NAME}__LabelWrapper`}>
					{labelMarkup}
				</div>
				{metadataProgressMarkup}
			</div>
		) : null;

	const renderIndicator = (progressValue: ProgressType, index: number) => {
		const indicatorClassName = cssClassNames(
			`${COMPONENT_NAME}__Indicator`,
			progressValue.color
		);

		const indicatorMarkup = (
			<div
				className={indicatorClassName}
				key={`${COMPONENT_NAME}__Indicator--${index}`}
				style={
					{
						"--progress-bar-size": `${progressValue.value}%`,
					} as React.CSSProperties
				}
			></div>
		);

		return indicatorMarkup;
	};

	const progressIndicatorsMarkup = progressValues.map(renderIndicator);

	const progressMarkup = (
		<div className={`${COMPONENT_NAME}__ProgressContainer`}>
			{progressIndicatorsMarkup}
		</div>
	);

	return (
		<div className={className}>
			{labelContainerMarkup}
			{progressMarkup}
		</div>
	);
};

export default ProgressBar;
