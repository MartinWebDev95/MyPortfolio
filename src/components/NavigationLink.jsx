import { Link } from 'react-scroll';

function NavigationLink({ text, setIsMenuOpen }) {
  return (
    <li className="group relative cursor-pointer transition-all duration-300 ease-in-out">
      <Link
        to={text}
        smooth
        offset={-100}
        duration={500}
        onClick={() => setIsMenuOpen(false)}
        className="flex items-center text-black dark:text-white font-bold lg:text-xl relative"
      >
        {text.split('').map((letter, index) => (
          <span
            key={index}
            className="origin-top transition-transform duration-300 ease-in-out group-hover:scale-y-0"
            style={{ transitionDelay: `${index * 75}ms` }}
          >
            {letter}
          </span>
        ))}

        <div className="flex items-center text-black dark:text-white font-bold lg:text-xl absolute bottom-0 left-0">
          {text.split('').map((letter, index) => (
            <span
              key={index}
              className="origin-bottom transition-transform duration-300 ease-in-out scale-y-0 group-hover:scale-y-100"
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              {letter}
            </span>
          ))}
        </div>
      </Link>
    </li>
  );
}

export default NavigationLink;
