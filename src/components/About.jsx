import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import HeadShot from "../assets/icons/headshot.png";
import { BriefcaseIcon } from "./Icons";
import { Reveal, SectionTitle } from "./ui";

const HISTORY = [
	{
		year: "2026",
		events: [
			{
				title: "Senior Software Engineer",
				details: "Lead engineer at GRID Platform",
				date: "2024 - Present",
			},
		],
	},
	{
		year: "2023",
		events: [
			{
				title: "Software Engineer",
				details:
					"Interned at PoolUp, a startup in Costa Mesa where I was part of the mobile app development team looking to revolutionize city-to-city rideshare for an exclusive college community in California. ",
				date: "Feb 2023",
			},
			{
				title: "Software Engineer",
				details:
					"Part of a Wall Street investment firm's data visualization team, collaborated closely with analysts to craft dynamic solutions, empowering clients in automating business workflows, encompassing trade management, allocation, compliance, position management and modeling. ",
				date: "July 2023",
			},
		],
	},
	{
		year: "2022",
		events: [
			{
				title: "Software Engineer",
				details:
					"Worked at the NYC Department of Transportation as an intern where I helped create a convolutional neural network for automation of asset data collection from imagery. ",
				date: "Feb 2022",
			},
			{
				title: "Software Engineer",
				details:
					"Joined NASA where I worked alongside Dr. Matteo Ottaviani studying machine learning approaches to accelerate the detection of oil spills on the ocean surface and retrieval of environmental parameters. ",
				date: "Jun 2022",
			},
		],
	},
];

const ABOUT = [
	"I love spending time in nature",
	"Long walks are my favorite way to reset",
	"Always up for exploring somewhere new",
];

const Timeline = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref, offset: ["start 65%", "end 55%"] });
	const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

	return (
		<div ref={ref} className="relative">
			<span aria-hidden="true" className="absolute bottom-0 left-[19.5px] top-0 w-px bg-line" />
			<motion.span
				aria-hidden="true"
				style={{ scaleY }}
				className="absolute bottom-0 left-[19.5px] top-0 w-px origin-top bg-accent"
			/>
			{HISTORY.map(({ year, events }) => (
				<div key={year} className="relative pb-4">
					<h4 className="mb-6 pl-16 font-display text-2xl font-semibold text-sage">{year}</h4>
					<ul>
						{events.map((event) => (
							<Reveal as="li" key={event.title + event.date} className="relative pb-10 pl-16">
								<span className="absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full border border-line bg-night text-accent">
									<BriefcaseIcon className="h-[18px] w-[18px]" />
								</span>
								<b className="block font-display text-xl font-semibold tracking-tight">{event.title}</b>
								<span className="mt-0.5 block text-sm text-muted">{event.date}</span>
								<p className="mt-3 max-w-[60ch] leading-relaxed text-muted">{event.details}</p>
							</Reveal>
						))}
					</ul>
				</div>
			))}
		</div>
	);
};

const About = () => (
	<section id="about" className="border-t border-line py-24 md:py-32">
		<div className="wrap">
			<div className="mb-16 md:mb-20">
				<SectionTitle>About me</SectionTitle>
			</div>
			<div className="grid gap-16 md:grid-cols-12 md:gap-14">
				<div className="self-start md:sticky md:top-28 md:col-span-4">
					<img className="w-full max-w-[18rem] rounded-3xl border border-line" src={HeadShot} alt="Headshot" />
					<ul className="mt-8 space-y-4">
						{ABOUT.map((line) => (
							<li key={line} className="border-l-2 border-accent/60 pl-4 text-muted">
								{line}
							</li>
						))}
					</ul>
				</div>
				<div className="md:col-span-8">
					<h3 className="mb-8 font-display text-3xl font-semibold tracking-tight">Timeline</h3>
					<Timeline />
				</div>
			</div>
		</div>
	</section>
);

export default About;
