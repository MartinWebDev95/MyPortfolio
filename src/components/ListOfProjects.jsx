import Project from './Project';

function ListOfProjects({ projects }) {
  return (
    <ul className="grid grid-cols-fluid gap-4 p-4">
      {projects.map((project) => <Project key={project.id} project={project} />)}
    </ul>
  );
}

export default ListOfProjects;
