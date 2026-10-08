/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: { sm: "640px", md: "803px", lg: "1080px", xl: "1440px" },
		fontFamily: {
			display: ["Bricolage Grotesque", "Neue-Montreal", "system-ui", "sans-serif"],
			neue: ["Neue-Montreal", "system-ui", "sans-serif"],
		},
		extend: {
			colors: {
				night: "#151f20", // page background (your old "asif")
				raised: "#1b292b", // media stages / raised surfaces
				line: "rgba(158,183,183,0.18)", // hairlines
				ink: "#e8eeec", // primary text (soft white, not pure #fff)
				muted: "#93a8a8", // secondary text
				sage: "#9eb7b7", // your original teal-sage, now a supporting colour
				accent: "#b8b0ff", // soft lilac: links, active states, focus
			},
		},
	},
	plugins: [],
};
