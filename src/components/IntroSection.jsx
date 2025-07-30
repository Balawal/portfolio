import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import GmailIcon from "../assets/icons/gmail.png";
import GithubIcon from "../assets/icons/github.png";
import LinkedInIcon from "../assets/icons/linkedin.png";

import NavBar from "./NavBar";
import ScrollDown from "../assets/icons/ScrollDown";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const floating = {
	animate: ({ bottom, top, delay }) => ({
		...(bottom ? { bottom: [...bottom] } : {}),
		...(top ? { top: [...top] } : {}),
		transition: {
			delay: delay ?? 0,
			duration: 2 + (delay ?? 0),
			repeat: "Infinity",
			repeatType: "reverse",
			repeatDelay: 1,
		},
	}),
};

const floatRing = {
	hover: {
		width: "10em",
		height: "10em",
		transition: {
			type: "spring",
			duration: 0.25,
		},
	},
};

const parentFloatingLink = {
	initial: {},
	inflate: (i = 0) => ({
		transition: {
			delayChildren: i,
			staggerChildren: 0.25,
		},
	}),
};

const floatingBg = {
	initial: {
		opacity: 0,
		scale: 0,
	},
	inflate: {
		opacity: 1,
		scale: 1,
		transition: {
			type: "spring",
			duration: 0.4,
		},
	},
};

const floatingBgHover = {
	hover: {
		scale: 1.3,
		transition: {
			type: "tween",
			ease: "easeInOut",
			duration: 0.2,
		},
	},
};

const floatingLink = {
	initial: {
		opacity: 0,
		scale: 0,
	},
	inflate: {
		opacity: 1,
		scale: 1,
		transition: {
			type: "tween",
			duration: 0.15,
			ease: "easeOut",
		},
	},
};

const nameRise = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: [0, 0.5, 1],
		transition: {
			duration: 0.6,
			type: "tween",
			ease: "easeIn",
		},
	},
};

const descriptionRise = {
	initial: {
		opacity: 0,
		y: "40%",
	},
	animate: {
		opacity: [0, 0.5, 1],
		y: 0,
		transition: {
			duration: 0.5,
			type: "tween",
			ease: "easeInOut",
		},
	},
};

const header = {
	animate: {
		transition: {
			duration: 0.5,
			ease: "easeInOut",
		},
	},
};

const IntroVar = {
	initial: {},
	animate: {
		transition: {
			delayChildren: 0.4,
			staggerChildren: 0.3,
		},
	},
};

const popIntoViewVar = {
	initial: {
		scale: 0,
		opacity: 0,
	},
	animate: {
		scale: 1,
		opacity: 1,
		transition: {
			duration: 0.3,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.2,
			ease: "easeOut",
		},
	},
};

const appearIntoView = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			delay: 1,
			duration: 0.4,
		},
	},
};

const staggerTransition = (delayAmt = 0, staggerAmt = 0.3) => ({
	delayChildren: delayAmt,
	staggerChildren: staggerAmt,
});

const Intro = () => {
	const { scroll } = useLocomotiveScroll();
	const [canScroll, setCanScroll] = useState(false);

	const isSm = useMediaQuery({ query: "(max-width: 802px)" });

	useEffect(() => {
		if (canScroll) scroll?.start();
		else scroll?.stop();
	}, [canScroll]);

	return (
		<>
			<div style={isSm ? { visibility: "hidden", display: "none" } : {}}>
				<motion.div
					id="linkedIn-float"
					initial="initial"
					animate="animate"
					custom={{
						bottom: ["22%", "25%"],
					}}
					variants={floating}
					className="absolute left-[8%] flex">
					<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/balawal-chaudry/">
						<motion.div
							initial="initial"
							animate="inflate"
							whileHover="hover"
							variants={parentFloatingLink}
							custom={0.8}
							className="relative grid place-items-center">
							<motion.div variants={floatingBg} className="absolute grid place-items-center">
								<motion.div
									variants={floatingBgHover}
									className="absolute w-[4.5em] h-[4.5em] bg-blue-400 rounded-full cursor-pointer"
								/>
								<motion.div
									variants={floatRing}
									className="pointer-events-none absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] border-solid rounded-full border-[1px]"
								/>
							</motion.div>
							<motion.span variants={floatingLink} className="relative">
								<img className="max-w-[24px] md:max-w-[26px]" src={LinkedInIcon} alt="linkedIn-floating-icon" />
							</motion.span>
						</motion.div>
					</a>
				</motion.div>

				<motion.div
					id="gmail-float"
					initial={"initial"}
					animate="animate"
					custom={{ bottom: ["30%", "33%"], delay: -0.3 }}
					variants={floating}
					className="absolute right-[12%] flex">
					<a target="_blank" rel="noopener noreferrer" href="mailto:bchaudry818@gmail.com">
						<motion.div
							initial="initial"
							animate="inflate"
							whileHover="hover"
							variants={parentFloatingLink}
							custom={1.2}
							className="relative grid place-items-center">
							<motion.div variants={floatingBg} className="absolute grid place-items-center">
								<motion.div
									variants={floatingBgHover}
									className="absolute w-[4.5em] h-[4.5em] bg-red-400 rounded-full cursor-pointer"></motion.div>
								<motion.div
									variants={floatRing}
									className="pointer-events-none absolute w-[275px] h-[275px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] border-solid rounded-full border-[1px]"
								/>
							</motion.div>
							<motion.span variants={floatingLink} className="relative">
								<img className="max-w-[24px] md:max-w-[26px]" src={GmailIcon} alt="gmail-floating-icon" />
							</motion.span>
						</motion.div>
					</a>
				</motion.div>

				<motion.div
					id="github-float"
					initial="initial"
					animate="animate"
					variants={floating}
					custom={{ bottom: ["83%", "86%"], delay: 0.6 }}
					className="absolute right-[37%] flex">
					<a target="_blank" rel="noopener noreferrer" href="https://github.com/Balawal">
						<motion.div
							initial="initial"
							animate="inflate"
							whileHover="hover"
							variants={parentFloatingLink}
							custom={0.4}
							className="relative grid place-items-center">
							<motion.div variants={floatingBg} className="absolute grid place-items-center">
								<motion.div
									variants={floatRing}
									className="pointer-events-none absolute -z-1 w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] border-solid rounded-full border-[1px]"
								/>
								<motion.div
									variants={floatingBgHover}
									className="absolute w-[4.5em] h-[4.5em] bg-purple-400 rounded-full cursor-pointer"></motion.div>
							</motion.div>
							<motion.span
								variants={floatingLink}
								className="relative"
								target="_blank"
								href="https://github.com/Balawal">
								<img className="max-w-[24px] md:max-w-[26px]" src={GithubIcon} alt="github-floating-icon" />
							</motion.span>
						</motion.div>
					</a>
				</motion.div>
			</div>

			<motion.div
				id="titles"
				className="absolute top-[47.5%] md:top-[42.5%]  inset-x-[4%] -translate-y-1/2 md:inset-x-[8%]"
				variants={IntroVar}
				initial="initial"
				animate="animate">
				<motion.div
					variants={nameRise}
					className="flex items-center mb-[.75em] font-normal text-[1.375em] lg:text-[1.75em]">
					<span className="">Hi, I&lsquo;m Balawal!</span>
					<motion.span
						className="inline-block ml-[.375rem] text-[1.125em]"
						animate={{ rotate: [0, 20, 0] }}
						transition={{
							delay: 0.75,
							repeat: 1,
							ease: "easeInOut",
							duration: 0.4,
						}}>
						👋
					</motion.span>
				</motion.div>

				<motion.h1
					className="font-bold tracking-[.03em] text-[1.9em] md:text-[2.3em] lg:text-[2.8em] leading-[1.1] md:leading-[1.075]"
					variants={header}
					onAnimationComplete={() => {
						setCanScroll(true);
					}}>
					<div className="line-wrap">
						<motion.div variants={descriptionRise}>
							Senior Full-Stack Software Engineer
						</motion.div>
						
					</div>
				</motion.h1>

				<MobileNavLinks />
			</motion.div>

			<motion.div
				initial="initial"
				animate="animate"
				variants={appearIntoView}
				className="absolute bottom-[1.5em] left-1/2 -translate-x-1/2 flex items-center text-[.9375rem]">
				<ScrollDown />
				<span className="inline-block ml-[.25rem] font-medium">scroll</span>
			</motion.div>
		</>
	);
};

const IntroSection = () => {
	return (
		<section data-scroll-id="intro">
			<div className="relative mx-auto w-[88%] max-w-[1440px] h-[600px] md:h-[80vh]">
				<NavBar />
				<Intro />
			</div>
		</section>
	);
};

export const MobileNavLinks = () => {
	const isMd = useMediaQuery({ query: "(min-width: 803px)" });

	return (
		<motion.ul
			style={isMd ? { visibility: "hidden", display: "none" } : {}}
			className="flex items-center gap-[3em] mt-[3em] ml-[calc((3.75em-1.25rem)/2)]"
			transition={staggerTransition()}>
			<motion.div variants={popIntoViewVar} className="relative grid place-items-center">
				<motion.div className="absolute grid place-items-center">
					<motion.div className="absolute w-[3.75em] h-[3.75em] bg-red-400 rounded-full cursor-pointer" />
				</motion.div>
				<motion.a className="relative" target="_blank" rel="noopener noreferrer" href="mailto:bchaudry818@gmail.com">
					<img className="max-w-[1.375rem] md:max-w-[1.625rem]" src={GmailIcon} alt="linkedIn-floating-icon" />
				</motion.a>
			</motion.div>

			<motion.div variants={popIntoViewVar} className="relative grid place-items-center ml-[1px]">
				<motion.div className="absolute grid place-items-center">
					<motion.div className="absolute w-[3.75em] h-[3.75em] bg-blue-400 rounded-full cursor-pointer" />
				</motion.div>
				<motion.a className="relative" target="_blank" href="https://www.linkedin.com/in/balawal-chaudry/">
					<img className="max-w-[1.375rem] md:max-w-[1.625rem]" src={LinkedInIcon} alt="linkedIn-floating-icon" />
				</motion.a>
			</motion.div>

			<motion.div variants={popIntoViewVar} className="relative grid place-items-center">
				<motion.div className="absolute grid place-items-center">
					<motion.div className="absolute w-[3.75em] h-[3.75em] bg-purple-400 rounded-full cursor-pointer" />
				</motion.div>
				<motion.a className="relative" target="_blank" href="https://github.com/Balawal">
					<img className="max-w-[24px] md:max-w-[26px]" src={GithubIcon} alt="linkedIn-floating-icon" />
				</motion.a>
			</motion.div>
		</motion.ul>
	);
};

export default IntroSection;
