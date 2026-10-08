import { FileIcon } from "./Icons";
import { RESUME, SOCIALS } from "./ui";

const Footer = () => (
	<footer id="contact" className="border-t border-line">
		<div className="wrap py-24 md:py-32">
			<h2 className="font-display text-[clamp(1.75rem,6.5vw,4.5rem)] font-bold leading-none tracking-[-0.03em]">
				Let&rsquo;s connect
			</h2>
			<a
				href="mailto:bchaudry818@gmail.com"
				className="mt-8 inline-block text-[clamp(1.1rem,3.4vw,2rem)] underline decoration-line decoration-2 underline-offset-8 transition hover:text-accent hover:decoration-accent">
				bchaudry818@gmail.com
			</a>
			<ul className="mt-10 flex flex-wrap gap-3">
				{SOCIALS.filter((s) => s.label !== "Email").map(({ label, href, Icon }) => (
					<li key={label}>
						<a
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 rounded-full border border-line px-5 py-2.5 transition hover:border-accent hover:text-accent">
							<Icon className="h-4 w-4" />
							{label}
						</a>
					</li>
				))}
				<li>
					<a
						href={RESUME}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 rounded-full border border-line px-5 py-2.5 transition hover:border-accent hover:text-accent">
						<FileIcon className="h-4 w-4" />
						Resume
					</a>
				</li>
			</ul>
		</div>
		<div className="border-t border-line">
			<div className="wrap flex items-center justify-between py-6 text-sm text-muted">
				<span>&copy; {new Date().getFullYear()} Balawal Chaudry</span>
				<a href="#home" className="transition hover:text-accent">
					Back to top
				</a>
			</div>
		</div>
	</footer>
);

export default Footer;
