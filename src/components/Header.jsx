import ToggleTheme from './ToggleTheme';

function Header() {
  return (
    <header className="w-full bg-white/30 dark:bg-black/30 h-20 flex flex-col justify-center fixed">
      <div className="flex justify-between items-center container mx-auto">
        <p className="text-pink-700 font-bold lg:text-xl">
          Juan Antonio Martín
        </p>

        <nav>
          <ul className="flex justify-center items-center gap-8">
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
