import useProjects from '../hooks/useProjects';
import ListOfProjects from './ListOfProjects';

function SectionProjects() {
  const { projects, isLoading } = useProjects();

  return (
    <section className="bg-white dark:bg-black rounded-tr-3xl rounded-br-3xl shadow-lg shadow-black/25 dark:shadow-white/25 mr-4 md:mr-6 lg:mr-12 py-5 lg:py-12 pr-2 sm:pr-4 lg:pr-0">
      <h2
        className="text-center uppercase font-bold text-black dark:text-white text-3xl lg:text-4xl mb-6 lg:mb-8"
      >
        Projects
      </h2>

      <ListOfProjects projects={projects} isLoading={isLoading} />
    </section>
  );
}

export default SectionProjects;
