function ButtonCircle({ direction, handleClick }) {
  return (
    <button
      type="button"
      className="bg-black dark:bg-white rounded-full w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 hover:scale-110 transition-all duration-300 ease-in-out"
      onClick={handleClick}
    >
      <svg
        viewBox="0 0 108 108"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`stroke-white dark:stroke-black ${direction === 'left' ? 'rotate-90' : '-rotate-90'}`}
      >
        <line x1="54.3661" y1="36.6357" x2="54.3661" y2="70.6685" strokeWidth="3.5" />
        <path d="M68.228 57.3057L54.3182 71.2155L40.4083 57.3057" strokeWidth="3.5" />
      </svg>
    </button>
  );
}

export default ButtonCircle;
