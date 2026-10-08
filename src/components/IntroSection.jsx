import { useRef } from "react";
import { motion } from "framer-motion";
import { FileIcon } from "./Icons";
import { RESUME, SOCIALS } from "./ui";

const LINES = ["Senior", "Full-Stack", "Software Engineer"];

const stagger = { hidden: {}, show: { transition: { delayChildren: 0.15, staggerChildren: 0.12 } } };
const rise = { hidden: { y: "110%" }, show: { y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } } };
const fade = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

const IntroSection = () => {
	const ref = useRef(null);

	// Moves the lit patch of the graph paper under the cursor (no re-render).
	const onMove = (e) => {
		const r = ref.current.getBoundingClientRect();
		ref.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
		ref.current.style.setProperty("--my", `${e.clientY - r.top}px`);
	};

	return (
		<section
			id="home"
			ref={ref}
			onPointerMove={onMove}
			className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-28 md:items-center md:pb-24">
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(#000_55%,transparent)]">
				<div className="graph absolute inset-0" />
				<div className="graph-lit absolute inset-0" />
				<svg className="absolute inset-x-0 top-[34%] h-[46%] w-full" viewBox="0 0 1200 300" preserveAspectRatio="none">
					<motion.path
						d="M0 150 C 100 10, 200 10, 300 150 S 500 290, 600 150 S 800 10, 900 150 S 1100 290, 1200 150"
						fill="none"
						stroke="#9eb7b7"
						strokeOpacity="0.4"
						strokeWidth="1.5"
						vectorEffect="non-scaling-stroke"
						initial={{ pathLength: 0 }}
						animate={{ pathLength: 1 }}
						transition={{ duration: 2.6, delay: 0.5, ease: "easeInOut" }}
					/>
				</svg>
			</div>

			<motion.div className="wrap relative" variants={stagger} initial="hidden" animate="show">
				<motion.p variants={fade} className="mb-6 flex items-center gap-2 text-lg text-muted md:text-xl">
					Hi, I&lsquo;m Balawal!
					<motion.span
						className="inline-block origin-[70%_70%]"
						animate={{ rotate: [0, 18, -8, 18, 0] }}
						transition={{ delay: 1.2, duration: 1.1, ease: "easeInOut" }}>
						👋
					</motion.span>
				</motion.p>
		
				<h1 className="font-display text-[clamp(1.75rem,6.5vw,4.5rem)] font-bold leading-[0.98] tracking-[-0.03em]">
					{LINES.map((line) => (
						<span key={line} className="block overflow-hidden pb-[0.08em]">
							<motion.span variants={rise} className="block">
								{line}
							</motion.span>
						</span>
					))}
				</h1>

				<motion.p variants={fade} className="mt-8 text-lg text-muted md:text-xl">
					Lead engineer at GRID Platform
								</motion.p>

								<motion.div variants={fade} className="mt-10 flex flex-wrap items-center gap-4">
					<a
						href={RESUME}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-night transition hover:bg-[#d4cfff]">
						<FileIcon className="h-4 w-4" />
						Resume
					</a>
					<ul className="flex items-center gap-1 md:ml-4">
						{SOCIALS.map(({ label, href, Icon }) => (
							<li key={label}>
								<a
									href={href}
									aria-label={label}
									target={href.startsWith("mailto") ? undefined : "_blank"}
									rel="noopener noreferrer"
									className="grid h-11 w-11 place-items-center rounded-full text-muted transition hover:bg-white/5 hover:text-accent">
									<Icon className="h-5 w-5" />
								</a>
							</li>
						))}
					</ul>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default IntroSection;
