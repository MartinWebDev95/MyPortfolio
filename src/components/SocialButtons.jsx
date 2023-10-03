function SocialButtons() {
  return (
    <div className="flex items-center gap-4 md:gap-8 w-fit mx-auto mt-12 overflow-hidden">
      <a
        href="https://github.com/MartinWebDev95"
        target="_blank"
        rel="noopener noreferrer"
        className="w-fit text-base md:text-lg dark:text-white text-black dark:border-white border-black border-2 rounded-xl px-4 py-1 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black font-bold transition-colors ease-in-out duration-300 animate-socials_animation"
      >
        Github
      </a>

      <a
        href="https://github.com/MartinWebDev95"
        target="_blank"
        rel="noopener noreferrer"
        className="w-fit text-base md:text-lg dark:text-white text-black dark:border-white border-black border-2 rounded-xl px-4 py-1 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black font-bold transition-colors ease-in-out duration-300 animate-socials_animation"
      >
        Linkedin
      </a>
    </div>
  );
}

export default SocialButtons;
