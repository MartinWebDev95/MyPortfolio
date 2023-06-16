import { useState } from 'react';

const useOpacity = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.addEventListener('scroll', () => {
    window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
  });

  return { isScrolled };
};

export default useOpacity;
