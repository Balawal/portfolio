import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AppStoreIcon, ChevronLeftIcon, ChevronRightIcon, GithubIcon } from "./Icons";
import { Reveal, SectionTitle } from "./ui";

import Halal1 from "../assets/icons/halal1.png";
import Halal2 from "../assets/icons/halal2.png";
import Halal3 from "../assets/icons/halal3.png";
import Halal4 from "../assets/icons/halal4.png";

import History1 from "../assets/icons/today_in_1.png";
import History2 from "../assets/icons/today_in_2.png";
import History3 from "../assets/icons/today_in_3.png";
import History4 from "../assets/icons/today_in_4.png";
import History5 from "../assets/icons/today_in_5.png";

import Tradewise1 from "../assets/icons/Tradewise_1.png";
import Tradewise2 from "../assets/icons/Tradewise_2.png";
import Tradewise3 from "../assets/icons/Tradewise_3.png";
import Tradewise4 from "../assets/icons/Tradewise_4.png";
import Tradewise5 from "../assets/icons/Tradewise_5.png";
import Tradewise6 from "../assets/icons/Tradewise_6.png";
import Tradewise7 from "../assets/icons/Tradewise_7.png";
import Tradewise8 from "../assets/icons/Tradewise_8.png";
import Tradewise9 from "../assets/icons/Tradewise_9.png";
import Tradewise10 from "../assets/icons/Tradewise_10.png";
import Tradewise11 from "../assets/icons/Tradewise_11.png";
import Tradewise12 from "../assets/icons/Tradewise_12.png";

// `tint` is a soft glow behind each project's screenshots.
const PROJECTS = [
	{
		title: "Simply Halal",
		description:
			"Tired of scrolling through endless restaurant lists? This full-stack app is your personal halal food concierge. With smart filters and accurate location data, we'll help you find halal gems in your neighborhood.",
		links: [{ label: "GitHub", to: "https://github.com/Balawal/simplyhalal/tree/master", Icon: GithubIcon }],
		images: [Halal1, Halal2, Halal3, Halal4],
		tint: "rgba(110,200,160,0.22)",
	},
	{
		title: "Today In History",
		description:
			"Explore history, your way. Daily updates, multi-language support, and an intelligent AI chatbot make learning about the past engaging and informative.",
		links: [
			{ label: "GitHub", to: "https://github.com/Balawal/today-in-history", Icon: GithubIcon },
			{ label: "App Store", to: "https://apps.apple.com/us/app/today-through-time/id6596767515", Icon: AppStoreIcon },
		],
		images: [History1, History2, History3, History4, History5],
		tint: "rgba(240,185,120,0.2)",
	},
	{
		title: "Tradewise",
		description:
			"Elevate your investing game with our full-stack mobile app. Stay informed with real-time market data, personalized alerts, and expert insights. From interactive tools to live tweets and earning calendar reminders, our app empowers you to make informed decisions and seize market opportunities.",
		links: [
			{ label: "GitHub", to: "https://github.com/Balawal/tradewise", Icon: GithubIcon },
			{ label: "App Store", to: "https://apps.apple.com/us/app/tradeiq/id6737919391", Icon: AppStoreIcon },
		],
		images: [
			Tradewise1, Tradewise2, Tradewise3, Tradewise4, Tradewise5, Tradewise6,
			Tradewise7, Tradewise8, Tradewise9, Tradewise10, Tradewise11, Tradewise12,
		],
		tint: "rgba(120,150,255,0.24)",
	},
];

const mod = (n, m) => ((n % m) + m) % m;

const slide = {
	enter: (d) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
	center: { x: 0, opacity: 1 },
	exit: (d) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
};

const Slideshow = ({ images, title, tint }) => {
	const [[page, dir], setPage] = useState([0, 0]);
	const index = mod(page, images.length);
	const paginate = (d) => setPage([page + d, d]);

	return (
		<div
			className="relative h-[400px] overflow-hidden rounded-3xl border border-line md:h-[480px]"
			style={{ background: `radial-gradient(110% 80% at 50% 0%, ${tint}, transparent 70%), #1b292b` }}>
			<AnimatePresence initial={false} custom={dir}>
				<motion.div
					key={page}
					custom={dir}
					variants={slide}
					initial="enter"
					animate="center"
					exit="exit"
					transition={{ duration: 0.35, ease: "easeOut" }}
					drag="x"
					dragConstraints={{ left: 0, right: 0 }}
					dragElastic={0.25}
					onDragEnd={(_, { offset }) => {
						if (offset.x < -60) paginate(1);
						else if (offset.x > 60) paginate(-1);
					}}
					className="absolute inset-0 flex cursor-grab items-center justify-center px-6 pb-16 pt-6 active:cursor-grabbing">
					<img
						src={images[index]}
						alt={`${title} screenshot ${index + 1} of ${images.length}`}
						draggable={false}
						className="max-h-full max-w-full rounded-xl object-contain shadow-[0_24px_60px_-24px_rgba(0,0,0,0.7)]"
					/>
				</motion.div>
			</AnimatePresence>

			{images.length > 1 && (
				<div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-4">
					<button
						type="button"
						aria-label="Previous screenshot"
						onClick={() => paginate(-1)}
						className="grid h-9 w-9 place-items-center rounded-full border border-line bg-night/60 backdrop-blur transition hover:border-accent hover:text-accent">
						<ChevronLeftIcon className="h-4 w-4" />
					</button>
					<div className="flex items-center gap-1.5" aria-hidden="true">
						{images.map((_, i) => (
							<span
								key={i}
								className={`h-1.5 rounded-full transition-all duration-300 ${
									i === index ? "w-5 bg-accent" : "w-1.5 bg-white/25"
								}`}
							/>
						))}
					</div>
					<button
						type="button"
						aria-label="Next screenshot"
						onClick={() => paginate(1)}
						className="grid h-9 w-9 place-items-center rounded-full border border-line bg-night/60 backdrop-blur transition hover:border-accent hover:text-accent">
						<ChevronRightIcon className="h-4 w-4" />
					</button>
				</div>
			)}
		</div>
	);
};

const Project = ({ project, flip }) => (
	<Reveal as="article" className="grid items-center gap-8 md:grid-cols-12 md:gap-14">
		<div className={`md:col-span-7 ${flip ? "md:order-2" : ""}`}>
			<Slideshow images={project.images} title={project.title} tint={project.tint} />
		</div>
		<div className={`md:col-span-5 ${flip ? "md:order-1" : ""}`}>
			<h3 className="font-display text-4xl font-semibold tracking-[-0.02em] md:text-5xl">{project.title}</h3>
			<p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-muted">{project.description}</p>
			<ul className="mt-8 flex flex-wrap gap-3">
				{project.links.map(({ label, to, Icon }) => (
					<li key={to}>
						<a
							href={to}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 rounded-full border border-line px-5 py-2.5 transition hover:border-accent hover:text-accent">
							<Icon className="h-4 w-4" />
							{label}
						</a>
					</li>
				))}
			</ul>
		</div>
	</Reveal>
);

const MyWork = () => (
	<section id="projects" className="border-t border-line py-24 md:py-32">
		<div className="wrap">
			<div className="mb-16 md:mb-20">
				<SectionTitle>Selected Projects</SectionTitle>
			</div>
			<div className="flex flex-col gap-24 md:gap-32">
				{PROJECTS.map((p, i) => (
					<Project key={p.title} project={p} flip={i % 2 === 1} />
				))}
			</div>
		</div>
	</section>
);

export default MyWork;
