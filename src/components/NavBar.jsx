import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useMediaQuery } from "react-responsive";

import GmailIcon from "../assets/icons/gmail.png";
import CvIcon from "../assets/icons/cv.png";
import GithubIcon from "../assets/icons/github.png";
import LinkedInIcon from "../assets/icons/linkedin.png";
import ArrowDown from "../assets/icons/ArrowDown";
import Plus from "../assets/icons/Plus";
import { MobileNavLinks } from "./IntroSection";

const MOBILELINKS = [
	{
		label: "Home",
		to: "intro",
	},
	{
		label: "Skills",
		to: "skills",
	},
	{
		label: "Projects",
		to: "projects",
	},
	{
		label: "About Me",
		to: "about",
	},
];

const navDropVar = {
	initial: {
		opacity: 0,
		top: -20,
	},
	animate: {
		opacity: 1,
		top: 0,
		transition: {
			duration: 0.7,
			ease: "easeIn",
			type: "tween",
		},
	},
};

const navLinkVar = {
	hover: {
		color: "#9eb7b7",
		transition: {
			duration: 0.2,
		},
	},
};

const placeHolderVar = {
	initial: {
		opacity: 0,
		pointerEvents: "none",
	},
	hover: {
		opacity: 1,
		pointerEvents: "unset",
		transition: {
			duration: 0.2,
		},
	},
};

const floatVar = {
	initial: {
		opacity: 0,
		pointerEvents: "none",
		transition: {
			duration: 0.1,
			type: "tween",
			ease: "easeOut",
		},
	},
	hover: {
		opacity: 1,
		pointerEvents: "unset",
		top: 35,
		transition: {
			duration: 0.2,
			type: "tween",
			ease: "linear",
		},
	},
};

const mobileMenuBGVar = {
	initial: {
		y: "-100%",
	},
	animate: {
		y: 0,
		transition: {
			duration: 0.8,
			ease: [0.86, 0, 0.15, 1],
			type: "tween",
			delay: 0,
		},
	},
	exit: {
		y: "-100%",
		transition: {
			type: "tween",
			duration: 0.8,
			ease: [0.86, 0, 0.15, 1],
		},
	},
};

const nameRise = {
	initial: {
		y: "-100%",
	},
	animate: {
		y: 0,
		transition: {
			duration: 0.35,
			ease: "easeOut",
			type: "tween",
		},
	},
	exit: {
		y: "-100%",
	},
};

const appear = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 0.4,
		},
	},
	exit: {
		opacity: 0,
	},
};

const DummyPresenceParentVar = {
	exit: {
		transition: { delayChildren: 0, staggerChildren: 0, type: "tween" },
	},
	animate: {
		transition: { delayChildren: 0.45, staggerChildren: 0.05, type: "tween" },
	},
};

const NavBar = () => {
	const { scroll } = useLocomotiveScroll();
	const [sections, setSections] = useState();

	const isMobile = useMediaQuery({ query: "(max-width: 802px)" });
	const [menuOpened, setMenuOpened] = useState(false);
	const scrollToOption = useRef();
	useEffect(() => {
		if (!scroll) return;

		const intro = document.querySelector('[data-scroll-id="intro"]');
		const skills = document.querySelector('[data-scroll-id="skills"]');
		const projects = document.querySelector('[data-scroll-id="projects"]');
		const about = document.querySelector('[data-scroll-id="about"]');
		setSections({
			intro,
			skills,
			projects,
			about,
		});
	}, [scroll]);

	const scrollTo = (sectionName) => {
		if (!sectionName) return;
		scroll.scrollTo(sections[sectionName], {
			duration: 500,
		});
	};

	return (
		<>
			<AnimatePresence initial={false}>
				{menuOpened && (
					<motion.div
						initial="initial"
						animate="animate"
						exit="exit"
						onAnimationComplete={(type) => {
							if (type === "exit") {
								scrollTo(scrollToOption.current);
								scrollToOption.current = null;
							}
						}}
						onAnimationStart={(type) => {
							if (type === "animate") scroll?.stop();
						}}
						variants={DummyPresenceParentVar}
						transition={{ delayChildren: 0.45, staggerChildren: 0.05, type: "tween" }}
						className="fixed inset-0 z-[100]">
						{/* background drop */}
						<motion.div
							variants={mobileMenuBGVar}
							// exit="initial"
							className=" fixed inset-0 bg-asif"
						/>

						{/* content */}
						<motion.div className="relative text-white">
							<motion.button
								variants={appear}
								className="ml-auto mr-[4%] flex items-center py-[1.25rem]"
								onClick={() => setMenuOpened(false)}>
								Close
								<span className="ml-[.25rem] max-w-[1.5em] rotate-45">
									<Plus />
								</span>
							</motion.button>
							<ul className="fixed inset-0 top-[60px] w-full">
								{MOBILELINKS.map(({ label, to }) => (
									<li className="py-8 border-t-[1px] border-gray-50 border-opacity-20 leading-normal" key={to}>
										<div className="overflow-hidden">
											<motion.button
												variants={nameRise}
												className="px-[6%] w-full text-left leading-[1.125] "
												onClick={() => {
													setMenuOpened(false);
													scrollToOption.current = to;
												}}>
												<span className="text-[2.75rem] font-medium tracking-tighter">{label}</span>
											</motion.button>
										</div>
									</li>
								))}
								<div className="border-t-[1px] border-gray-50 border-opacity-20 mx-[6%] text-[.85rem]">
									<MobileNavLinks />
								</div>
							</ul>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
			<motion.ul
				initial="initial"
				animate="animate"
				variants={navDropVar}
				className="relative z-10 flex items-center text-[.9375rem] md:text-[1rem] ">
				<motion.li whileHover="hover" variants={navLinkVar}>
					<button onClick={() => scrollTo("intro")}>Home</button>
				</motion.li>
				{isMobile ? (
					<div className="relative ml-auto">
						<button onClick={() => setMenuOpened(true)} className="flex items-center">
							Menu
							<span className="ml-[.25rem] max-w-[1.2em]">
								<Plus />
							</span>
						</button>
					</div>
				) : (
					<NavLinks scrollTo={scrollTo} />
				)}
			</motion.ul>
		</>
	);
};

const NavLinks = ({ scrollTo }) => {
	return (
		<>
			<motion.li whileHover="hover" variants={navLinkVar} className="ml-auto">
				<button onClick={() => scrollTo("skills")}>Skills</button>
			</motion.li>
			<motion.li whileHover="hover" variants={navLinkVar} className="ml-8">
				<button onClick={() => scrollTo("projects")}>Projects</button>
			</motion.li>
			<motion.li whileHover="hover" variants={navLinkVar} className="ml-8">
				<button onClick={() => scrollTo("about")}>About me</button>
			</motion.li>
			<motion.li whileHover={["hover"]} animate="initial" className="relative ml-8">
				<motion.div variants={navLinkVar} className="flex-c cursor-pointer">
					<span className="mr-3">Connect</span>
					<ArrowDown />
				</motion.div>
				<motion.div
					className="absolute min-w-[120px] h-[12px] abs-c md:min-w-[160px]"
					variants={placeHolderVar}></motion.div>
				<motion.ul
					className="before:content-[''] before:absolute before:top-0 before:w-0 before:h-0 before:border-t-[12px] before:border-r-[12px] border-solid before:border-t-bg-bg before:border-r-transparent before:rotate-45 p-abs-c before:-translate-y-1/2 absolute abs-c flex flex-col border-[2px] border-border gap-4 p-[1rem] min-w-[120px] font-sm bg-bg md:min-w-[160px] md:p-[22px]"
					variants={floatVar}>
					<li>
						<a className="flex-c" href="mailto:bchaudry818@gmail.com?" target="_blank" rel="noopener noreferrer">
							<img className="mr-[14px] w-[22px]" src={GmailIcon} alt="gmail-icon" />
							<span className="font-md">Gmail</span>
						</a>
					</li>
					<li>
						<a className="flex-c" href="https://github.com/Balawal" target="_blank" rel="noopener noreferrer">
							<img className="mr-[14px] w-[22px]" src={GithubIcon} alt="github-icon" />
							<span className="font-md">Github</span>
						</a>
					</li>
					<li>
						<a
							className="flex-c"
							href="https://www.linkedin.com/in/balawal-chaudry/"
							target="_blank"
							rel="noopener noreferrer">
							<img className="mr-[14px] w-[22px]" src={LinkedInIcon} alt="linkedin-icon" />
							<span className="font-md">LinkedIn</span>
						</a>
					</li>
					<li>
						<a className="flex-c" href="/BalawalChaudryResume.pdf" target="_blank" rel="noopener noreferrer">
							<img className="mr-[14px] w-[22px]" src={CvIcon} alt="resume-icon" />
							<span className="font-md">Resume</span>
						</a>
					</li>
				</motion.ul>
			</motion.li>
		</>
	);
};
export default NavBar;
