function Project({ project }) {
  return (
    <div className="rounded-lg bg-white dark:bg-black shadow-lg">
      <div>
        <img src={project.repoImage} alt={project.repoTitle} className="rounded-t-lg" />
      </div>

      <div className="p-4 h-auto">
        <h2 className="text-pink-700 text-base md:text-xl font-bold mb-4">
          {project.repoTitle}
        </h2>

        <p className="text-pink-700">{project.description}</p>

        <div className="flex flex-col flex-end">
          <ul className="flex flex-wrap gap-2 my-4">
            {project.topics.map((topic) => (
              <li
                key={topic}
                className="bg-pink-700 text-white dark:text-black rounded-full w-fit px-2"
              >
                {topic}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href={project.html_url}
              target="_blank"
              className="rounded-full bg-transparent border-2 border-pink-700 text-pink-700 py-1 px-3 hover:bg-blue-600 hover:text-white dark:hover:text-black hover:border-white dark:hover:border-black transition-all duration-300 ease-in-out"
              rel="noreferrer noopener"
            >
              Github
            </a>

            <a
              href={project.homepage}
              target="_blank"
              className="rounded-full bg-transparent border-2 border-pink-700 text-pink-700 py-1 px-3 hover:bg-blue-600 hover:text-white dark:hover:text-black hover:border-white dark:hover:border-black transition-all duration-300 ease-in-out"
              rel="noreferrer noopener"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
