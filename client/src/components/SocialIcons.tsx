import { FC } from 'react';
import { Social } from '../types';

interface SocialIconsProps {
  socials: Social[];
}

export const SocialIcons: FC<SocialIconsProps> = ({ socials }) => (
  <div className="flex gap-4">
    {socials.map((s) => (
      <div key={s.name} className="relative group">
        <a
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          {s.icon}
        </a>
        <div className="absolute left-1/2 -translate-x-1/2 -top-12 z-10 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 bg-zinc-800 text-zinc-100 text-xs rounded px-3 py-2 shadow-lg whitespace-nowrap dark:bg-zinc-200 dark:text-zinc-900">
          <div className="font-semibold">{s.name}</div>
          <div className="break-all">{s.url}</div>
        </div>
      </div>
    ))}
  </div>
);
