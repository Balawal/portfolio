/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			neue: ["Neue-Montreal", "sans-serif"],
			satoshi: ["Satoshi", "sans-serif"],
		},
		extend: {
			screens: {
				sm: "0px",
				md: "803px",
				lg: "1080px",
				xl: "1440px",
			},
			colors: {
				bg: "#f5f5f5",
				cardhider: "#f9fafb",
				floatingbg: "#f1f5f9",
				border: "#E3E3E3",
				backdrop: "#00000080",
				separator: "#E5E7EB",
				pill: "#9eb7b7",
				asif: "#151f20",
				fem: "#f1f5fb",
				meditapp: "#f4ede3",
				vr: "#cce3dac2",
				success: {
					green: "#4BB543",
				},
				gold: {
					400: "D0BFAB",
				},
				purple: {
					300: "#C75AF6",
					400: "#f5ebff",
					700: "#AD1FEA",
				},
				blue: {
					25: "#F2F4FE",
					50: "#F7F8FD",
					100: "#F2F4FF",
					300: "#7C91F9",
					400: "#e5f1f8",
					500: "#4661E6",
					600: "#656EA3",
					800: "#373F68",
					900: "#3A4374",
				},
				sky: {
					blue: "#62BCFA",
				},
				peach: {
					orange: "#F49F85",
				},
				red: {
					300: "#E98888",
					400: "#fee4ee",
					700: "#D73737",
				},
			},
			backgroundImage: {
				gradient: "radial-gradient(var(--radial-gradient-steps))",
				"new-icon": "url('/public/assets/shared/icon-new-feedback.svg')",
				"edit-icon": "url('/public/assets/shared/icon-edit-feedback.svg')",
			},
		},
	},
	plugins: [],
};
