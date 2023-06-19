import useProjects from '../hooks/useProjects';
import ListOfProjects from './ListOfProjects';

function SectionProjects() {
  const { projects } = useProjects();

  return (
    <section className="bg-white/20 dark:bg-black/20 rounded-lg shadow-lg my-4">
      <h2 className="text-center uppercase font-bold text-pink-700 text-3xl pt-4">
        Projects
      </h2>

      <ListOfProjects projects={projects} />
    </section>
  );
}

export default SectionProjects;
