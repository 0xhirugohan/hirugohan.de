import { useEffect, useState } from "react";

// User profile
const user = {
  name: "Hirugohan",
  avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=hirugohan",
};

// Projects data (achievements and team are now per-project)
const projects = [
	{
		name: "PixelMind",
		description: "AI-powered creative suite for artists and designers.",
		link: "#",
		logo: "https://api.dicebear.com/7.x/shapes/svg?seed=pixelmind",
		image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
		youtube: "https://www.youtube.com/embed/dQw4w9WgXcQ",
		achievements: [
			{
				title: "AI Art Award 2024",
				description: "PixelMind won the 2024 AI Art Award for best creative tool.",
				link: "https://example.com/ai-art-award",
			},
		],
		team: [
			user,
			{
				name: "Jane Doe",
				avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=janedoe",
				profile: "https://github.com/janedoe"
			}
		]
	},
	{
		name: "Lingolin",
		description: "Language learning platform with gamified lessons.",
		link: "#",
		logo: "https://api.dicebear.com/7.x/shapes/svg?seed=lingolin",
		image: null,
		youtube: null,
		achievements: [
			{
				title: "100K Users Milestone",
				description: "Lingolin reached 100,000 active users in 2025.",
			},
		],
		team: [user]
	},
	{
		name: "Sokushuu",
		description: "Productivity tool for rapid note-taking and organization.",
		link: "#",
		logo: "https://api.dicebear.com/7.x/shapes/svg?seed=sokushuu",
		image: null,
		youtube: null,
		achievements: [
			{
				title: "Product Hunt #1",
				description: "Sokushuu was #1 Product of the Day on Product Hunt.",
				link: "https://www.producthunt.com/",
			},
		],
		team: [
			user,
			{
				name: "John Smith",
				avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=johnsmith",
				profile: "https://twitter.com/johnsmith"
			}
		]
	},
	{
		name: "Sokushuu Launchpad",
		description: "Startup accelerator and project launcher.",
		link: "#",
		logo: "https://api.dicebear.com/7.x/shapes/svg?seed=launchpad",
		image: null,
		youtube: null,
		achievements: [],
		team: [user]
	},
	{
		name: "Wallet Kids",
		description: "Financial education app for children.",
		link: "#",
		logo: "https://api.dicebear.com/7.x/shapes/svg?seed=walletkids",
		image: null,
		youtube: null,
		achievements: [
			{
				title: "EdTech Innovation Finalist",
				description: "Wallet Kids was a finalist in the EdTech Innovation Awards.",
			},
		],
		team: [user]
	},
];

// Journey data (latest at top)
const journey = [
	{
		date: "October",
		title: "Participated at ETHJKT",
		description: "Chatted with Renhau (RH) from Scroll."
	},
	{
		date: "September",
		title: "Hackathon: Web3 Builder Fest",
		description: "Built a DeFi tool and networked with other builders."
	},
	{
		date: "August",
		title: "Participant at PBA-X",
		description: "Joined the PBA-X accelerator program."
	},
	{
		date: "July",
		title: "Hackathon: zkSync Summer",
		description: "Developed a privacy-focused dApp."
	},
	{
		date: "June",
		title: "Participant at OCI",
		description: "Selected as a participant in the OCI program."
	}
];

const socials = [
	{
		name: "GitHub",
		url: "https://github.com/hirugohan",
		icon: (
			<svg
				fill="none"
				viewBox="0 0 24 24"
				className="w-6 h-6"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.091-.646.35-1.088.636-1.339-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.338 4.687-4.566 4.936.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.135 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"
				/>
			</svg>
		),
	},
	{
		name: "Twitter",
		url: "https://twitter.com/hirugohan",
		icon: (
			<svg
				fill="none"
				viewBox="0 0 24 24"
				className="w-6 h-6"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M8 19c11 0 14-9 14-14 0-.213 0-.425-.015-.636A9.936 9.936 0 0024 2.557a9.72 9.72 0 01-2.828.775A4.932 4.932 0 0023.337.365a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616 0c-2.73 0-4.942 2.21-4.942 4.932 0 .386.045.762.127 1.124C7.728 5.797 4.1 3.87 1.671.905c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099A4.904 4.904 0 01.964 6.1v.062c0 2.385 1.693 4.374 3.946 4.827-.413.112-.849.172-1.298.172-.317 0-.626-.03-.927-.086.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.015-.636A10.025 10.025 0 0024 2.557z"
				/>
			</svg>
		),
	},
	{
		name: "Farcaster",
		url: "https://warpcast.com/hirugohan",
		icon: (
			<svg
				fill="none"
				viewBox="0 0 24 24"
				className="w-6 h-6"
				stroke="currentColor"
			>
				<circle
					cx="12"
					cy="12"
					r="10"
					stroke="currentColor"
					strokeWidth="2"
				/>
				<path
					d="M8 12l2 2 4-4"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
	},
];

function SVGPatternBG() {
	// Subtle SVG pattern background
	return (
		<svg
			className="fixed inset-0 w-full h-full -z-10"
			width="100%"
			height="100%"
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				<pattern
					id="dots"
					x="0"
					y="0"
					width="20"
					height="20"
					patternUnits="userSpaceOnUse"
				>
					<circle cx="1" cy="1" r="1" fill="#d4d4d8" />
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#dots)" />
		</svg>
	);
}

function App() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<div className="min-h-screen bg-zinc-100 dark:bg-zinc-900 transition-colors duration-500 relative">
			<SVGPatternBG />
			{/* About Section */}
			<section
				className={`flex flex-col items-center justify-center py-16 transition-all duration-700 ${
					mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
				}`}
			>
				<img
					src="https://api.dicebear.com/7.x/lorelei/svg?seed=hirugohan"
					alt="avatar"
					className="w-28 h-28 rounded-full shadow-lg border-4 border-zinc-200 dark:border-zinc-700 mb-4"
				/>
				<h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-100 mb-2">
					Hirugohan
				</h1>
				<p className="text-zinc-600 dark:text-zinc-300 text-lg mb-4">
					Indie Builder & Product Engineer
				</p>
				<div className="flex gap-4 mb-2">
					{socials.map((s) => (
						<a
							key={s.name}
							href={s.url}
							target="_blank"
							rel="noopener noreferrer"
							className="hover:scale-110 transition-transform text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100"
						>
							{s.icon}
						</a>
					))}
				</div>
			</section>
			{/* Journey Section */}
			<section className={`max-w-2xl mx-auto px-4 py-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}> 
				<h2 className="text-2xl font-semibold text-zinc-700 dark:text-zinc-200 mb-6">Journey</h2>
				<div className="relative border-l-2 border-zinc-300 dark:border-zinc-700 ml-4">
					{journey.map((item, idx) => (
						<div key={idx} className="mb-8 ml-4 flex flex-col relative">
							<span className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-zinc-200 dark:bg-zinc-700 border-2 border-zinc-400 dark:border-zinc-600"></span>
							<div className="flex items-center gap-2 mb-1">
								<span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">{item.date}</span>
								<span className="font-semibold text-zinc-700 dark:text-zinc-200">{item.title}</span>
							</div>
							<span className="text-zinc-600 dark:text-zinc-300 text-sm">{item.description}</span>
						</div>
					))}
				</div>
			</section>
			{/* Projects Section */}
			<section
				className={`max-w-3xl mx-auto px-4 py-8 transition-all duration-700 ${
					mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
				}`}
			>
				<h2 className="text-2xl font-semibold text-zinc-700 dark:text-zinc-200 mb-6">
					Projects
				</h2>
				<div className="grid gap-6 md:grid-cols-2">
					{projects.map((project) => (
						<div
							key={project.name}
							className="bg-white/80 dark:bg-zinc-800/80 rounded-xl shadow-md p-5 border border-zinc-200 dark:border-zinc-700 hover:scale-105 hover:shadow-xl transition-all duration-300 flex flex-col gap-2"
						>
							<div className="flex items-center gap-3 mb-2">
								<img
									src={project.logo}
									alt="logo"
									className="w-8 h-8 rounded"
								/>
								<h3 className="text-lg font-bold text-zinc-800 dark:text-zinc-100">
									{project.name}
								</h3>
							</div>
							<p className="text-zinc-600 dark:text-zinc-300 text-sm mb-2">
								{project.description}
							</p>
							{project.image && (
								<img
									src={project.image}
									alt="project"
									className="rounded-lg mb-2 w-full object-cover max-h-40"
								/>
							)}
							{project.youtube && (
								<div className="aspect-video mb-2">
									<iframe
										src={project.youtube}
										title="YouTube video"
										allowFullScreen
										className="w-full h-full rounded-lg"
									></iframe>
								</div>
							)}
							{project.achievements.length > 0 && (
								<div className="flex flex-col gap-1 mt-2">
									{project.achievements.map((ach, idx) => (
										<div key={idx} className="bg-zinc-100 dark:bg-zinc-700 rounded p-2">
											<div className="font-semibold text-zinc-700 dark:text-zinc-200 text-xs">
												{ach.title}
											</div>
											<div className="text-zinc-500 dark:text-zinc-300 text-xs mb-1">
												{ach.description}
											</div>
										</div>
									))}
								</div>
							)}
							{/* Team Section */}
							<div className="flex items-center gap-2 mt-3">
								{project.team.map((member, idx) =>
									"profile" in member && member.profile ? (
										<a
											key={idx}
											href={member.profile}
											target="_blank"
											rel="noopener noreferrer"
											title={member.name}
											className="group"
										>
											<img
												src={member.avatar}
												alt={member.name}
												className="w-8 h-8 rounded-full border-2 border-zinc-200 dark:border-zinc-700 group-hover:ring-2 group-hover:ring-blue-400 transition-all"
											/>
										</a>
									) : (
										<div key={idx} title={member.name} className="group">
											<img
												src={member.avatar}
												alt={member.name}
												className="w-8 h-8 rounded-full border-2 border-zinc-200 dark:border-zinc-700 group-hover:ring-2 group-hover:ring-blue-400 transition-all"
											/>
										</div>
									)
								)}
							</div>
							<a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 font-semibold text-xs hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-all shadow mt-3 self-start"
							>
								<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
								Visit project
							</a>
						</div>
					))}
				</div>
			</section>
			{/* Contact Section */}
			<section
				className={`flex flex-col items-center justify-center py-12 transition-all duration-700 ${
					mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
				}`}
			>
				<h2 className="text-xl font-semibold text-zinc-700 dark:text-zinc-200 mb-2">
					Contact
				</h2>
				<p className="text-zinc-600 dark:text-zinc-300 mb-4">
					Reach out via social media:
				</p>
				<div className="flex gap-4">
					{socials.map((s) => (
						<a
							key={s.name}
							href={s.url}
							target="_blank"
							rel="noopener noreferrer"
							className="hover:scale-110 transition-transform text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100"
						>
							{s.icon}
						</a>
					))}
				</div>
			</section>
		</div>
	);
}

export default App;
