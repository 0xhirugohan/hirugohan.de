import { FC, useEffect, useState } from 'react';
import { Social } from '../types';
import { SocialIcons } from './SocialIcons';

interface HeroProps {
  mounted: boolean;
  socials: Social[];
  user: {
    name: string;
    avatar: string;
    avatarDark: string;
    bio: string;
  };
}

export const Hero: FC<HeroProps> = ({ mounted, socials, user }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const match = window.matchMedia('(prefers-color-scheme: dark)');
    const update = () => setIsDark(document.documentElement.classList.contains('dark') || match.matches);
    update();
    match.addEventListener('change', update);
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => {
      match.removeEventListener('change', update);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      className={`flex flex-col items-center justify-center py-16 transition-all duration-700 ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <img
        src={isDark ? user.avatarDark : user.avatar}
        alt="avatar"
        className="w-28 h-28 rounded-full shadow-lg border-4 border-zinc-200 dark:border-zinc-700 mb-4"
      />
      <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-100 mb-2">
        {user.name}
      </h1>
      <p className="text-zinc-600 dark:text-zinc-300 text-lg mb-4">
        {user.bio}
      </p>
      <SocialIcons socials={socials} />
    </section>
  );
};
