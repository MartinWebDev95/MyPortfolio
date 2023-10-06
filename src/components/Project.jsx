import Link from './Link';
import ListOfTopics from './ListOfTopics';

function Project({ project, imgRef }) {
  return (
    <div
      ref={imgRef}
      className="group/project min-w-full relative overflow-hidden"
    >
      <img
        src={project.repoImage}
        alt={project.repoTitle}
        className="rounded-tr-3xl rounded-br-3xl"
      />

      <div className="absolute bottom-0 left-0 w-full h-full lg:h-auto px-8 py-6 bg-white/40 dark:bg-black/60 rounded-br-3xl rounded-tr-3xl lg:rounded-tr-none backdrop-blur-lg scale-y-0 group-hover/project:scale-y-100 origin-bottom transition-transform duration-300 ease-in-out grid place-content-center lg:place-content-start">
        <h2 className="text-black dark:text-white text-base md:text-2xl font-bold mb-4 hidden md:block">
          {project.repoTitle}
        </h2>

        <p className="text-black dark:text-white text-sm md:text-lg hidden md:block">
          {project.description}
        </p>

        <div className="flex md:flex-col flex-end md:gap-6 md:mt-6">
          <ListOfTopics topics={project.topics} />

          <div className="flex items-center gap-4">
            <Link
              text="Github"
              href={project.html_url}
            />

            <Link
              text="Live"
              href={project.homepage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
