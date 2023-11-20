import { Link } from 'react-scroll';
import ItemContent from './ItemContent';

function NavigationLink({ text, setIsMenuOpen }) {
  return (
    <li className="group/link relative cursor-pointer transition-all duration-300 ease-in-out">
      <Link
        to={text}
        smooth
        offset={-100}
        duration={500}
        onClick={() => {
          setIsMenuOpen(false);
          document.body.style.overflow = 'auto';
        }}
        className="flex items-center text-black dark:text-white font-bold lg:text-xl relative"
      >
        <ItemContent value={text} />
      </Link>
    </li>
  );
}

export default NavigationLink;
