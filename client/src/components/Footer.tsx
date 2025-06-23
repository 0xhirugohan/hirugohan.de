import { FC } from 'react';

interface FooterProps {
  mounted: boolean;
}

export const Footer: FC<FooterProps> = ({ mounted }) => {
  return (
    <section
      className={`flex flex-col items-center justify-center py-12 transition-all duration-700 ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <p className="text-zinc-600 dark:text-zinc-300 mb-4">
        Made with ❤️ by Hirugohan
      </p>
    </section>
  );
};
