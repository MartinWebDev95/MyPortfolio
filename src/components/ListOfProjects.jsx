function ListOfProjects({ projects }) {
  return (
    <ul>
      {projects.map((project) => <li>{project.name}</li>)}
    </ul>
  );
}

export default ListOfProjects;
