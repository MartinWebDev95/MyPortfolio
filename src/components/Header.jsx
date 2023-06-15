import { useState } from 'react';
import ToggleTheme from './ToggleTheme';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`w-full ${isMenuOpen ? 'bg-white dark:bg-black md:bg-white/30 md:dark:bg-black/30' : 'bg-white/30 dark:bg-black/30'} h-20 flex fixed lg:shadow-lg`}>
      <div className="flex justify-between items-center container mx-auto px-4 md:px-0">
        <button
          type="button"
          className="relative w-6 h-5 md:hidden flex"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`absolute ${isMenuOpen ? 'rotate-45 top-2' : 'rotate-0 top-0'} left-0 w-6 h-1 bg-pink-700 rounded-r-full rounded-l-full transition-all duration-300 ease-in-out`} />
          <span className={`absolute ${isMenuOpen ? 'w-0' : 'w-6'} h-1 bg-pink-700 top-2 left-0 rounded-r-full rounded-l-full transition-all duration-300 ease-in-out`} />
          <span className={`absolute ${isMenuOpen ? '-rotate-45 top-2' : 'rotate-0 top-4'} w-6 h-1 bg-pink-700 left-0 rounded-r-full rounded-l-full transition-all duration-300 ease-in-out`} />
        </button>

        <p className="text-pink-700 font-bold lg:text-xl">
          Juan Antonio Martín
        </p>

        <nav className={`absolute md:static bg-white/50 dark:bg-black/50 top-0 left-0 w-full ${isMenuOpen ? 'h-[calc(100vh-5rem)]' : 'h-0'} overflow-hidden md:w-auto md:h-auto md:bg-transparent md:dark:bg-transparent mt-20 md:mt-0 transition-all duration-300 ease-in-out`}>
          <ul className="flex flex-col items-center md:flex-row gap-8 mt-4 md:mt-0">
            <li>
              <a
                href="#"
                className="text-pink-700 font-bold lg:text-xl hover:text-blue-600 transition-all duration-300 ease-in-out"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-pink-700 font-bold lg:text-xl hover:text-blue-600 transition-all duration-300 ease-in-out"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-pink-700 font-bold lg:text-xl hover:text-blue-600 transition-all duration-300 ease-in-out"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <ToggleTheme />
        </div>

      </div>
    </header>
  );
}

export default Header;
