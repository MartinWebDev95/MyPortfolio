import ChangeLanguage from './components/ChangeLanguage';
import Header from './components/Header';
import ListOfProjects from './components/ListOfProjects';
import useProjects from './hooks/useProjects';

function Portfolio() {
  const { projects } = useProjects();

  return (
    <>
      <Header />

      <main className="pt-20 container mx-auto px-4 md:px-0">
        <section className="bg-white/20 dark:bg-black/20 rounded-lg shadow-lg mt-4">
          <h2 className="text-center uppercase font-bold text-pink-700 text-2xl pt-4">Projects</h2>

          <ListOfProjects projects={projects} />
        </section>
      </main>

      <ChangeLanguage />
    </>
  );
}

export default Portfolio;
