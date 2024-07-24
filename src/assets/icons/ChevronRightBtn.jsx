import * as React from "react";

const ChevronRightBtn = (props) => (
	<svg
		className="rotate-180"
		width={"1.25em"}
		height={"1.25em"}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M15.707 5.293a1 1 0 0 1 0 1.414L10.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L8.47 12.884a1.25 1.25 0 0 1 0-1.768l5.823-5.823a1 1 0 0 1 1.414 0Z"
			fill="currentColor"
		/>
	</svg>
);

export default ChevronRightBtn;
