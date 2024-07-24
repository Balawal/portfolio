import { useEffect, useRef } from "react";
import NavBar from "./components/NavBar";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import IntroSection from "./components/IntroSection";
import ToolSection from "./components/ToolSection";
import MyWork from "./components/MyWork";
import About from "./components/About";

const App = () => {
	const containerRef = useRef(null);

	useEffect(() => {
		window.history.scrollRestoration = "manual";
	}, []);

	return (
		<LocomotiveScrollProvider
			options={{
				smooth: true,
				multiplier: 0.5,
				// mobile: {
				// 	smooth: true,
				// },
				// tablet: {
				// 	smooth: true,
				// },
				tablet: {
					breakpoint: 803, // <---- Fixes The Issue 🎉
				},
			}}
			watch={[]}
			containerRef={containerRef}>
			<main data-scroll-container ref={containerRef} className="pt-8">
				<IntroSection />
				<ToolSection />
				<MyWork />
				<About />
			</main>
		</LocomotiveScrollProvider>
	);
};

export default App;
