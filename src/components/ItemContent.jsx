function ItemContent({ value }) {
  return (
    <div className="flex items-center relative">
      {value.split('').map((letter, index) => (
        <span
          key={index}
          className="origin-top transition-transform duration-300 ease-in-out group-hover/link:scale-y-0"
          style={{ transitionDelay: `${index * 75}ms` }}
        >
          {letter}
        </span>
      ))}

      <div className="flex items-center absolute bottom-0 left-0">
        {value.split('').map((letter, index) => (
          <span
            key={index}
            className="origin-bottom transition-transform duration-300 ease-in-out scale-y-0 group-hover/link:scale-y-100"
            style={{ transitionDelay: `${index * 75}ms` }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ItemContent;
