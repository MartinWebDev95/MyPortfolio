import useLanguageContext from '../hooks/useLanguageContext';
import NavigationLink from './NavigationLink';

function Navigation({ isMenuOpen, setIsMenuOpen }) {
  const { text } = useLanguageContext();

  return (
    <nav className={`absolute md:static bg-white/95 dark:bg-black/95 top-0 left-0 w-full ${isMenuOpen ? 'h-[calc(100vh-5rem)]' : 'h-0'} overflow-hidden md:w-auto md:h-auto md:bg-transparent md:dark:bg-transparent mt-20 md:mt-0 transition-all duration-300 ease-in-out`}>
      <ul className="flex flex-col items-center md:flex-row gap-8 mt-4 md:mt-0">
        <NavigationLink text={text.navigation.firstItem} setIsMenuOpen={setIsMenuOpen} />
        <NavigationLink text={text.navigation.secondItem} setIsMenuOpen={setIsMenuOpen} />
        <NavigationLink text={text.navigation.thirdItem} setIsMenuOpen={setIsMenuOpen} />
        <NavigationLink text={text.navigation.fourthItem} setIsMenuOpen={setIsMenuOpen} />
      </ul>
    </nav>
  );
}

export default Navigation;
