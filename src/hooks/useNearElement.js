import { useEffect, useRef, useState } from 'react';

const useNearElement = () => {
  const visorRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onChange = (entries) => {
      // Update the visible state depending if the ref element is visible in the viewport or not
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const observer = new IntersectionObserver(onChange, { rootMargin: '450px' });

    // If the ref element exists then observe it
    if (visorRef.current) observer.observe(visorRef.current);

    return () => observer.disconnect();
  }, []);

  return { visorRef, isVisible };
};

export default useNearElement;
