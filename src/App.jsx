import { MotionConfig } from "framer-motion";

import NavBar from "./components/NavBar";
import IntroSection from "./components/IntroSection";
import ToolSection from "./components/ToolSection";
import MyWork from "./components/MyWork";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => (
	<MotionConfig reducedMotion="user">
		<NavBar />
		<main>
			<IntroSection />
			<ToolSection />
			<MyWork />
			<About />
		</main>
		<Footer />
	</MotionConfig>
);

export default App;
