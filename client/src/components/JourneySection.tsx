import { FC } from 'react';
import { Journey } from '../types';

interface JourneySectionProps {
  mounted: boolean;
  journey: Journey[];
}

export const JourneySection: FC<JourneySectionProps> = ({ mounted, journey }) => {
  return (
    <section className={`max-w-2xl mx-auto px-4 py-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}> 
      <h2 className="text-2xl font-semibold text-zinc-700 dark:text-zinc-200 mb-6">Journey</h2>
      <div className="relative border-l-2 border-zinc-300 dark:border-zinc-700 ml-4">
        {journey.map((item, idx) => (
          <div key={idx} className="mb-8 ml-4 flex flex-col relative">
            <span className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-zinc-200 dark:bg-zinc-700 border-2 border-zinc-400 dark:border-zinc-600"></span>
            <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1">
              <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">{item.date}</span>
              <span className="font-semibold text-zinc-700 dark:text-zinc-200">{item.title}</span>
            </div>
            <span className="text-zinc-600 dark:text-zinc-300 text-sm">
              {item.description.map((part, i) =>
                part.link ? (
                  <a
                    key={i}
                    href={part.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-zinc-600 dark:text-blue-400 hover:text-zinc-800 dark:hover:text-blue-200"
                  >
                    {part.text}
                  </a>
                ) : (
                  <span key={i}>{part.text}</span>
                )
              )}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
