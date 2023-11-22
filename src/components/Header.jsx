import { useState } from 'react';
import ToggleTheme from './ToggleTheme';
import MenuMobile from './MenuMobile';
import Navigation from './Navigation';
import useOpacity from '../hooks/useOpacity';
import ChangeLanguage from './ChangeLanguage';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isScrolled } = useOpacity();

  return (
    <header className={`w-full ${isScrolled ? 'bg-white/60 dark:bg-black/60' : 'bg-white/20 dark:bg-black/20'} ${(isMenuOpen) && 'bg-white/95 dark:bg-black/95 md:bg-transparent md:dark:bg-transparent'} backdrop-blur-lg h-20 z-30 flex sticky top-0 md:shadow-lg`}>
      <div className="flex justify-between items-center container mx-auto px-4 md:px-0">
        <MenuMobile isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        <div className="flex gap-2 relative">
          <ChangeLanguage />

          <ToggleTheme />
        </div>
      </div>
    </header>
  );
}

export default Header;
