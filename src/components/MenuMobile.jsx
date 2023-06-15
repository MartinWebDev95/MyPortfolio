function MenuMobile({ isMenuOpen, setIsMenuOpen }) {
  return (
    <button
      type="button"
      className="relative w-6 h-5 md:hidden flex"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <span className={`absolute ${isMenuOpen ? 'rotate-45 top-2' : 'rotate-0 top-0'} left-0 w-6 h-1 bg-pink-700 rounded-r-full rounded-l-full transition-all duration-300 ease-in-out`} />
      <span className={`absolute ${isMenuOpen ? 'w-0' : 'w-6'} h-1 bg-pink-700 top-2 left-0 rounded-r-full rounded-l-full transition-all duration-300 ease-in-out`} />
      <span className={`absolute ${isMenuOpen ? '-rotate-45 top-2' : 'rotate-0 top-4'} w-6 h-1 bg-pink-700 left-0 rounded-r-full rounded-l-full transition-all duration-300 ease-in-out`} />
    </button>
  );
}

export default MenuMobile;
