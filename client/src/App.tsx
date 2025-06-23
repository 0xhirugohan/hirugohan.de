import { useEffect, useState } from "react";
import { Hero } from "./components/Hero";
import { JourneySection } from "./components/JourneySection";
import { ProjectsSection } from "./components/ProjectsSection";
import { Footer } from "./components/Footer";
import { journey, projects, socials, user } from "./constants";

function App() {
	const [mounted, setMounted] = useState(false);
	const [dark, setDark] = useState(() => {
		if (typeof window !== "undefined") {
			return window.matchMedia("(prefers-color-scheme: dark)").matches;
		}
		return false;
	});

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		if (dark) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [dark]);

	return (
		<div className={`${dark ? 'dark' : ''} min-h-screen bg-zinc-100 dark:bg-zinc-900 transition-colors duration-500 relative`}>
			<Hero mounted={mounted} socials={socials} user={user} />
			<JourneySection mounted={mounted} journey={journey} />
			<ProjectsSection mounted={mounted} projects={projects} />
			<Footer mounted={mounted} />
			<button
				aria-label={
					dark ? "Switch to light mode" : "Switch to dark mode"
				}
				className="fixed top-4 right-4 z-50 p-2 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 shadow hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-all"
				onClick={() => setDark((d) => !d)}
			>
				{dark ? (
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.93l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z"
						/>
					</svg>
				) : (
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
						/>
					</svg>
				)}
			</button>
		</div>
	);
}

export default App;
