import { useEffect, useState } from 'react';

const ThemeBackground = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check initial theme
    const darkModeMatch = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMatch.matches);

    // Listen for theme changes
    const handleThemeChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    darkModeMatch.addEventListener('change', handleThemeChange);
    return () => darkModeMatch.removeEventListener('change', handleThemeChange);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {isDarkMode ? (
        // Dark mode - Moon, waves, and sea pattern
        <div className="relative w-full h-full bg-gradient-to-b from-slate-900 to-slate-800">
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <svg className="w-full h-full">
              <rect width="100%" height="100%" fill="url(#seaPattern)" />
            </svg>
          </div>
          {/* Moon */}
          <div className="absolute right-10 top-10">
            <div className="w-20 h-20 rounded-full bg-slate-200 shadow-[0_0_50px_#fff]" />
          </div>
          {/* Waves */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              className="animate-wave w-full h-40"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <path
                fill="rgba(255, 255, 255, 0.05)"
                fillOpacity="1"
                d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
              <path
                fill="rgba(255, 255, 255, 0.1)"
                fillOpacity="1"
                d="M0,256L48,245.3C96,235,192,213,288,192C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      ) : (
        // Light mode - Sun, wind effect, and leaf pattern
        <div className="relative w-full h-full bg-gradient-to-b from-sky-200 to-sky-100">
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <svg className="w-full h-full">
              <rect width="100%" height="100%" fill="url(#leafPattern)" />
            </svg>
          </div>
          {/* Sun */}
          <div className="absolute left-10 top-10">
            <div className="w-20 h-20 rounded-full bg-yellow-400 shadow-[0_0_50px_#fbbf24] animate-pulse" />
          </div>
          {/* Wind effect */}
          <div className="absolute inset-0">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="absolute h-2 bg-white/20 rounded-full animate-wind"
                style={{
                  width: Math.random() * 200 + 100 + 'px',
                  top: Math.random() * 100 + '%',
                  left: Math.random() * 100 + '%',
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeBackground;
