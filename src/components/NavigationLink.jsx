function NavigationLink({ text }) {
  return (
    <li className="overflow-hidden">
      <a
        href="#"
        className="text-black dark:text-white font-bold lg:text-xl hover:text-blue-600 dark:hover:text-blue-600 transition-all duration-300 ease-in-out"
      >
        {text}
      </a>
    </li>
  );
}

export default NavigationLink;
