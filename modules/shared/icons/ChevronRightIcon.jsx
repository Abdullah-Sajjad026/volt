/**
 * @param {import('@mui/material').SvgIconProps} props
 */
export default function ChevronRightIcon(props) {
	return (
		<svg
			{...props}
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M6 12L10 8L6 4"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
