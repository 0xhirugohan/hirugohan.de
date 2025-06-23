import { FC } from 'react';

export const SleepingZs: FC = () => {
  return (
    <div className="absolute -top-2 -right-4 select-none pointer-events-none">
      <span className="absolute text-zinc-300 font-bold animate-sleep-z1" style={{ fontSize: '1.2rem' }}>
        z
      </span>
      <span className="absolute text-zinc-300 font-bold animate-sleep-z2" style={{ fontSize: '1rem' }}>
        z
      </span>
      <span className="absolute text-zinc-300 font-bold animate-sleep-z3" style={{ fontSize: '0.8rem' }}>
        z
      </span>
    </div>
  );
};
