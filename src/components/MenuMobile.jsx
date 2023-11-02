function MenuMobile({ isMenuOpen, setIsMenuOpen }) {
  const desktopMediaQuery = window.matchMedia('(min-width: 768px)');

  // Update the body overflow property when the window size is greater or less than 768px
  desktopMediaQuery.addEventListener('change', (evt) => {
    if ((evt.matches && isMenuOpen) || (!evt.matches && !isMenuOpen)) {
      document.body.style.overflow = 'auto';
    }

    if (!evt.matches && isMenuOpen) {
      document.body.style.overflow = 'hidden';
    }
  });

  const handleMenu = () => {
    if (isMenuOpen) {
      document.body.style.overflow = 'auto';
      setIsMenuOpen(false);
    } else {
      document.body.style.overflow = 'hidden';
      setIsMenuOpen(true);
    }
  };

  return (
    <button
      type="button"
      className="relative w-6 h-5 md:hidden flex"
      onClick={handleMenu}
    >
      <span className={`absolute ${isMenuOpen ? 'rotate-45 top-2' : 'rotate-0 top-0'} left-0 w-6 h-1 bg-black dark:bg-white rounded-r-full rounded-l-full transition-all duration-300 ease-in-out`} />

      <span className={`absolute ${isMenuOpen ? 'w-0' : 'w-6'} h-1 bg-black dark:bg-white top-2 left-0 rounded-r-full rounded-l-full transition-all duration-300 ease-in-out`} />

      <span className={`absolute ${isMenuOpen ? '-rotate-45 top-2' : 'rotate-0 top-4'} w-6 h-1 bg-black dark:bg-white left-0 rounded-r-full rounded-l-full transition-all duration-300 ease-in-out`} />
    </button>
  );
}

export default MenuMobile;
