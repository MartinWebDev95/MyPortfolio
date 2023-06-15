import { useState } from 'react';
import ToggleTheme from './ToggleTheme';
import MenuMobile from './MenuMobile';
import Navigation from './Navigation';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`w-full ${isMenuOpen ? 'bg-white dark:bg-black md:bg-white/30 md:dark:bg-black/30' : 'bg-white/30 dark:bg-black/30'} h-20 flex fixed lg:shadow-lg`}>
      <div className="flex justify-between items-center container mx-auto px-4 md:px-0">
        <MenuMobile isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        <p className="text-pink-700 font-bold lg:text-xl">
          Juan Antonio Martín
        </p>

        <Navigation isMenuOpen={isMenuOpen} />

        <div>
          <ToggleTheme />
        </div>

      </div>
    </header>
  );
}

export default Header;
