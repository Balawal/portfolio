import React, { useEffect } from "react";
import Suitcase from "../assets/icons/suitcase-svgrepo-com.svg";
import Graduation from "../assets/icons/graduation-cap-svgrepo-com.svg";
import HeadShot from "../assets/icons/headshot.png";
import { useMediaQuery } from "react-responsive";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const HISTORY = [
	{
		year: "2024",
		events: [
			{
				title: "College graduate!",
				details: "Cum Laude graduate from Hunter College with a B.A in Computer Science",
				date: "Jun 2024",
				icon: Graduation,
				bg: "#daebfb",
			},
			{
				title: "Looking for a new opportunity... 🙏",
				details: "Eager to join a dynamic team to grow as a developer!",
				date: "TBD",
				icon: Suitcase,
				bg: "#e3e3e3",
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
				icon: Suitcase,
				bg: "#e3e3e3",
			},
			{
				title: "Software Engineer",
				details:
					"Part of a Wall Street investment firm's data visualization team, collaborated closely with analysts to craft dynamic solutions, empowering clients in automating business workflows, encompassing trade management, allocation, compliance, position management and modeling. ",
				date: "July 2023",
				icon: Suitcase,
				bg: "#e3e3e3",
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
				icon: Suitcase,
				bg: "#e3e3e3",
			},
			{
				title: "Software Engineer",
				details:
					"Joined NASA where I worked alongside Dr. Matteo Ottaviani studying machine learning approaches to accelerate the detection of oil spills on the ocean surface and retrieval of environmental parameters. ",
				date: "Jun 2022",
				icon: Suitcase,
				bg: "#e3e3e3",
			},
		],
	},
];

const About = () => {
	return (
		<section data-scroll-id="about" className="bg-asif">
			<div className="container mx-auto pt-[1.5rem] pb-[2.5rem] font-normal text-white text-[clamp(.9375rem,_2.4vw,_1.09375rem)] md:text-[clamp(1rem,_1.5vw,_1.075rem)] md:leading-[1.45rem]">
				<div id="sticky" className="relative md:flex md:justify-between md:gap-[2em] md:items-start">
					<AboutMeList>
						<div className="">
							<h3 className="mt-[1em] mb-[.5em] text-[1.75em] md:text-[clamp(1.75rem,_2.5vw,_2rem)] font-medium tracking-tight md:mt-[2rem] md:mb-[.9rem]">
								About me 
							</h3>
							<ul className="flex flex-col gap-[.7em] list-disc list-inside text-gray-200 ">
								<li>
									I'm a full-stack software engineer with experience working in diverse sectors like Fintech, Transportation, and NASA. 
									I've contributed to projects at both large companies and early-stage startups.
								</li>
								<li>I enjoy designing and building out seamless and intuitive mobile applications.</li>
								<li>In my free time I enjoy lifting weights, drawing, reading and going for long walks.</li>
							</ul>
						</div>
					</AboutMeList>
					<Timeline />
				</div>
			</div>
		</section>
	);
};

const AboutMeList = (props) => {
	const isMd = useMediaQuery({ query: "(min-width: 803px)" });
	const { scroll } = useLocomotiveScroll();
	
	useEffect(() => {
	  scroll?.update();
	}, [isMd]);
  
	return (
	  <div className={`sticky mb-[3em] ${isMd ? "md:basis-[25%] md:max-w-[17rem]" : ""}`}>
		<img
		  className={`mt-[clamp(4rem,_11vw,_4em)] lg:mt-[clamp(4rem,_10vw,_5.5rem)] ${
			isMd ? "max-w-[90%]" : "max-w-[70%]" // Set a smaller width for mobile screens
		  } mx-auto`}
		  src={HeadShot}
		  alt="Headshot"
		/>
		{props.children}
	  </div>
	);
  };

const Timeline = () => {
	return (
		<div className="md:basis-[70%]">
			<h4 className="mb-[.25em] text-[1.75em] text-right font-medium tracking-tight md:text-[clamp(1.75rem,_2.5vw,_2rem)] md:pt-[.6em] md:pb-[.2em] lg:pt-[1em] lg:pb-[.4em]">
				Timeline ⏳
			</h4>
			<div>
				{HISTORY.map((year, i) => (
					<YearCard {...year} key={i} />
				))}
			</div>
		</div>
	);
};

const YearCard = ({ year, events }) => {
	return (
		<div className="[&:not(:first-child)]:mt-[2em]">
			<div className="grid grid-cols-[auto,1fr] gap-x-[.85em] grid-flow-row">
				{/* empty gap */}
				<div></div>
				{/* year */}
				<div className="flex items-center gap-[1em] mb-[1.25em]">
					<h3 className="text-[1.5em] font-bold">{year}</h3>
					<div className="grow h-[1px] bg-gray-100"></div>
				</div>
				{events.map((event, i) => (
					<React.Fragment key={i}>
						{/* pinpoint */}
						{/* <div className="flex flex-col gap-[.5rem] items-center"> */}
						<div className="flex flex-col items-center">
							<div style={{ backgroundColor: event.bg }} className="p-[.55em] rounded-full">
								<img className="max-w-[1.55em]" src={event.icon} alt="" />
							</div>
							<div className="w-[1px] h-full bg-gray-300"></div>
						</div>

						{/* event details */}
						<div className="flex flex-col mb-[1.5em]">
							<b className="block text-[1.125em]">{event.title}</b>
							<span className="inline-block mt-[.1em] text-[.925em] text-gray-400">{event.date}</span>
							<p className="mt-[.5em] tracking-wide text-[.95em] text-gray-200">{event.details}</p>
						</div>
					</React.Fragment>
				))}
			</div>
		</div>
	);
};

export default About;
