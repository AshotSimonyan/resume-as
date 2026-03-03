import { useEffect, useState } from 'react';

// Hook: returns true for mobile.
export const useMobile = (breakpoint = 768): boolean => {
  const query = `(max-width: ${breakpoint - 1}px)`;
  const getMatches = () => window.matchMedia(query).matches;

  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    return getMatches();
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const onChange = () => setIsMobile(mediaQuery.matches);

    onChange();
    mediaQuery.addEventListener('change', onChange);

    return () => mediaQuery.removeEventListener('change', onChange);
  }, [query]);

  return isMobile;
};
