import { FC } from 'react';

export const SingingAnimation: FC = () => {
  return (
    <div className="absolute -top-0 -left-4 select-none pointer-events-none">
      <span className="absolute text-zinc-800 font-bold animate-sleep-z1" style={{ fontSize: '1.2rem' }}>
        ♪
      </span>
      <span className="absolute text-zinc-800 font-bold animate-sleep-z2" style={{ fontSize: '1rem' }}>
        ♬
      </span>
      <span className="absolute text-zinc-800 font-bold animate-sleep-z3" style={{ fontSize: '0.8rem' }}>
        ♪
      </span>
    </div>
  );
};