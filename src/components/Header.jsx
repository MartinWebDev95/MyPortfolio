import { useState } from 'react';
import ToggleTheme from './ToggleTheme';
import MenuMobile from './MenuMobile';
import Navigation from './Navigation';
import useOpacity from '../hooks/useOpacity';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isScrolled } = useOpacity();

  return (
    <header className={`w-full ${(isMenuOpen || isScrolled) ? 'bg-white dark:bg-black' : 'bg-white/30 dark:bg-black/30'} h-20 z-30 flex sticky top-0 md:shadow-lg`}>
      <div className="flex justify-between items-center container mx-auto px-4 md:px-0">
        <MenuMobile isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        <Navigation isMenuOpen={isMenuOpen} />

        <div>
          <ToggleTheme />
        </div>
      </div>
    </header>
  );
}

export default Header;
