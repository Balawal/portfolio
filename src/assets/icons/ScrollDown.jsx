import * as React from "react";
import { motion } from "framer-motion";

const infiniteHover = {
	initial: {
		y: -3,
	},
	animate: {
		y: [3, -3],
		transition: {
			repeat: "Infinity",
			repeatType: "reverse",
			duration: 0.55,
			type: "spring",
			ease: "easeInOut",
		},
	},
};
const ScrollDown = () => (
	<motion.svg
		variants={infiniteHover}
		width="1em"
		height="1em"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<path d="M12 4v16m0 0-6-6m6 6 6-6" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
	</motion.svg>
);

export default ScrollDown;
