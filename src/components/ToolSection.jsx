import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "./ui";

import HTML from "../assets/icons/icons8-html-5.svg";
import CSS from "../assets/icons/icons8-css3.svg";
import JS from "../assets/icons/icons8-javascript.svg";
import Python from "../assets/icons/icons8-python.svg";
import CPP from "../assets/icons/icons8-c++.svg";
import DB from "../assets/icons/icons8-database.png";
import ASP_NET from "../assets/icons/icons8-asp-net.svg";
import Flutter from "../assets/icons/icons8-flutter.svg";
import AWS from "../assets/icons/icons8-aws.svg";
import CH from "../assets/icons/icons8-ch.svg";
import Dart from "../assets/icons/icons8-dart.svg";
import R from "../assets/icons/icons8-r.svg";
import Reactt from "../assets/icons/icons8-react.svg";
import BootStrap from "../assets/icons/icons8-bootstrap.svg";
import Firebase from "../assets/icons/icons8-firebase.svg";
import Git from "../assets/icons/icons8-git.svg";
import Gitlab from "../assets/icons/icons8-gitlab.svg";
import Django from "../assets/icons/icons8-django-96.png";

// `invert` flips dark glyphs so they stay visible on the dark background.
const tools = [
	{
		type: "framework",
		label: "Frameworks",
		icons: [
			{ name: "React", Icon: Reactt },
			{ name: "Flutter", Icon: Flutter },
			{ name: "ASP.NET", Icon: ASP_NET },
			{ name: "Django", Icon: Django },
			{ name: "Bootstrap", Icon: BootStrap },
		],
	},
	{
		type: "language",
		label: "Languages",
		icons: [
			{ name: "HTML", Icon: HTML },
			{ name: "CSS", Icon: CSS },
			{ name: "JavaScript", Icon: JS },
			{ name: "Dart", Icon: Dart },
			{ name: "Python", Icon: Python },
			{ name: "C++", Icon: CPP },
			{ name: "C#", Icon: CH },
			{ name: "SQL", Icon: DB, invert: true },
			{ name: "R", Icon: R },
		],
	},
	{
		type: "utility",
		label: "Tools",
		icons: [
			{ name: "Git", Icon: Git },
			{ name: "Gitlab", Icon: Gitlab },
			{ name: "PostgreSQL", Icon: DB, invert: true },
			{ name: "Firebase", Icon: Firebase },
			{ name: "AWS", Icon: AWS },
		],
	},
];

const list = { hidden: {}, show: { transition: { staggerChildren: 0.04 } } };
const cell = { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { duration: 0.3 } } };

const ToolSection = () => {
	const [selected, setSelected] = useState("framework");
	const current = tools.find((t) => t.type === selected);

	return (
		<section id="skills" className="border-t border-line py-24 md:py-32">
			<div className="wrap">
				<div className="mb-12 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">
					<SectionTitle>Skills</SectionTitle>
					<div role="tablist" aria-label="Skill categories" className="flex w-fit rounded-full border border-line p-1">
						{tools.map(({ type, label }) => {
							const isActive = type === selected;
							return (
								<button
									key={type}
									type="button"
									role="tab"
									aria-selected={isActive}
									onClick={() => setSelected(type)}
									className={`relative rounded-full px-4 py-2 text-[15px] transition-colors md:px-5 ${
										isActive ? "text-night" : "text-muted hover:text-ink"
									}`}>
									{isActive && (
										<motion.span
											layoutId="skill-pill"
											className="absolute inset-0 rounded-full bg-accent"
											transition={{ type: "spring", stiffness: 420, damping: 34 }}
										/>
									)}
									<span className="relative">{label}</span>
								</button>
							);
						})}
					</div>
				</div>

				<AnimatePresence mode="wait">
					<motion.ul
						key={selected}
						variants={list}
						initial="hidden"
						animate="show"
						exit={{ opacity: 0, transition: { duration: 0.12 } }}
						className="grid grid-cols-2 border-l border-t border-line md:grid-cols-3 lg:grid-cols-5">
						{current.icons.map(({ name, Icon, invert }) => (
							<motion.li
								key={name}
								variants={cell}
								className="group flex min-h-[9rem] flex-col justify-between border-b border-r border-line p-5 transition-colors hover:bg-white/[0.03] md:p-6">
								<img
									className={`h-11 w-11 transition-transform duration-300 group-hover:-translate-y-1 ${
										invert ? "invert" : ""
									}`}
									src={Icon}
									alt=""
								/>
								<span className="font-display text-xl font-semibold tracking-tight">{name}</span>
							</motion.li>
						))}
					</motion.ul>
				</AnimatePresence>
			</div>
		</section>
	);
};

export default ToolSection;
