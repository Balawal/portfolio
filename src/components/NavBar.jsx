import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const LINKS = [
	{ label: "Home", to: "home" },
	{ label: "Skills", to: "skills" },
	{ label: "Projects", to: "projects" },
	{ label: "About me", to: "about" },
	{ label: "Connect", to: "contact" },
];
const IDS = LINKS.map((l) => l.to);

// Highlights whichever section crosses the middle of the viewport.
const useActiveSection = (ids) => {
	const [active, setActive] = useState(ids[0]);
	useEffect(() => {
		const obs = new IntersectionObserver(
			(entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
			{ rootMargin: "-45% 0px -50% 0px" }
		);
		ids.forEach((id) => {
			const el = document.getElementById(id);
			if (el) obs.observe(el);
		});
		return () => obs.disconnect();
	}, [ids]);
	return active;
};

const NavBar = () => {
	const active = useActiveSection(IDS);
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const { scrollYProgress } = useScroll();
	const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);

	return (
		<>
			<header
				className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
					scrolled || open ? "border-line bg-night/80 backdrop-blur-md" : "border-transparent"
				}`}>
				<nav className="wrap flex h-16 items-center justify-between" aria-label="Main">
					<a href="#home" onClick={() => setOpen(false)} className="font-display text-xl font-bold tracking-tight">
						BChaudry
					</a>

					<ul className="hidden items-center gap-8 md:flex">
						{LINKS.slice(1).map(({ label, to }) => (
							<li key={to} className="relative">
								<a
									href={`#${to}`}
									className={`py-2 text-[15px] transition-colors ${
										active === to ? "text-ink" : "text-muted hover:text-ink"
									}`}>
									{label}
								</a>
								{active === to && (
									<motion.span
										layoutId="nav-underline"
										className="absolute inset-x-0 -bottom-0.5 h-px bg-accent"
										transition={{ type: "spring", stiffness: 500, damping: 40 }}
									/>
								)}
							</li>
						))}
						
					</ul>

					<button
						type="button"
						className="py-2 text-[15px] md:hidden"
						aria-expanded={open}
						aria-controls="mobile-menu"
						onClick={() => setOpen((o) => !o)}>
						{open ? "Close" : "Menu"}
					</button>
				</nav>
				<motion.div
					aria-hidden="true"
					style={{ scaleX: progress }}
					className="absolute inset-x-0 -bottom-px h-px origin-left bg-accent"
				/>
			</header>

			<AnimatePresence>
				{open && (
					<motion.div
						key="menu"
						id="mobile-menu"
						className="fixed inset-0 z-40 bg-night pt-24 md:hidden"
						initial={{ clipPath: "inset(0 0 100% 0)" }}
						animate={{ clipPath: "inset(0 0 0% 0)" }}
						exit={{ clipPath: "inset(0 0 100% 0)" }}
						transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}>
						<ul className="wrap flex flex-col">
							{LINKS.map(({ label, to }, i) => (
								<li key={to} className="overflow-hidden border-t border-line">
									<motion.a
										href={`#${to}`}
										onClick={() => setOpen(false)}
										className={`block py-5 font-display text-4xl font-semibold tracking-tight ${
											active === to ? "text-accent" : "text-ink"
										}`}
										initial={{ y: "100%" }}
										animate={{ y: 0, transition: { delay: 0.25 + i * 0.06, duration: 0.45, ease: "easeOut" } }}
										exit={{ y: "100%", transition: { duration: 0.2 } }}>
										{label}
									</motion.a>
								</li>
							))}
							
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default NavBar;
