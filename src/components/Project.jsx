function Project({ project }) {
  return (
    <div className="rounded-lg bg-white dark:bg-black shadow-lg">
      <img src={project.repoImage} alt={project.repoTitle} className="rounded-t-lg" />

      <div className="p-4">
        <h2 className="text-pink-700 text-base md:text-xl font-bold">
          {project.repoTitle}
        </h2>

        <div className="flex items-center gap-4 mt-4">
          <a
            href={project.html_url}
            target="_blank"
            className="rounded-full bg-transparent border-2 border-pink-700 text-pink-700 py-1 px-3 hover:bg-blue-600 hover:text-white hover:border-white dark:hover:border-black transition-all duration-300 ease-in-out"
            rel="noreferrer noopener"
          >
            Github
          </a>

          <a
            href={project.homepage}
            target="_blank"
            className="rounded-full bg-transparent border-2 border-pink-700 text-pink-700 py-1 px-3 hover:bg-blue-600 hover:text-white hover:border-white dark:hover:border-black transition-all duration-300 ease-in-out"
            rel="noreferrer noopener"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
