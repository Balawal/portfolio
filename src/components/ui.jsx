import { motion } from "framer-motion";
import { GithubIcon, LinkedInIcon, MailIcon } from "./Icons";

export const SOCIALS = [
	{ label: "GitHub", href: "https://github.com/Balawal", Icon: GithubIcon },
	{ label: "LinkedIn", href: "https://www.linkedin.com/in/balawal-chaudry/", Icon: LinkedInIcon },
	{ label: "Email", href: "mailto:bchaudry818@gmail.com", Icon: MailIcon },
];

export const RESUME = "/BalawalChaudryResume.pdf";

export const SectionTitle = ({ children }) => (
	<h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-none tracking-[-0.03em]">{children}</h2>
);

// One-time fade/slide used for project rows and timeline entries.
export const Reveal = ({ as = "div", children, delay = 0, className = "" }) => {
	const Comp = motion[as];
	return (
		<Comp
			className={className}
			initial={{ opacity: 0, y: 28 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "0px 0px -12% 0px" }}
			transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}>
			{children}
		</Comp>
	);
};
