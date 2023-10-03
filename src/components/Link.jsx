function Link({ text, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative font-bold text-lg text-black dark:text-white hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black rounded-lg border-2 dark:border-white border-black px-4 py-1 hover:scale-110 transition-all ease-in-out duration-300"
    >
      <div className="flex items-center relative">
        {text.split('').map((letter, index) => (
          <span
            key={index}
            className="origin-top transition-transform duration-300 ease-in-out group-hover:scale-y-0"
            style={{ transitionDelay: `${index * 75}ms` }}
          >
            {letter}
          </span>
        ))}

        <div className="flex items-center absolute bottom-0 left-0">
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
      </div>
    </a>
  );
}

export default Link;
