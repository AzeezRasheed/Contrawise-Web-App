import { FC } from "react";

const ArrowIcon: FC<{ color?: string }> = ({ color }) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z"
				fill={color || "#22237F"}
			/>
		</svg>
	);
};

export default ArrowIcon
