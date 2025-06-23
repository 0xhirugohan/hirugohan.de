import { FC } from 'react';
import { Project } from '../types';

interface ProjectsSectionProps {
  mounted: boolean;
  projects: Project[];
}

export const ProjectsSection: FC<ProjectsSectionProps> = ({ mounted, projects }) => {
  return (
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
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              Visit project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
