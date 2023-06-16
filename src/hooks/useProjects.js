import { useEffect, useState } from 'react';
import repoImages from '../utils/repoImages';

const useProjects = () => {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    try {
      const res = await fetch('https://api.github.com/users/MartinWebDev95/repos', {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_API_KEY}`,
          'X-GitHub-Api-Version': '2022-11-28',
        },
      });

      const data = res.json();

      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    getProjects()
      .then((data) => {
        const projectsWithImages = data.map((project) => (
          {
            ...project,
            repoImage: repoImages[project.name].image,
            repoTitle: repoImages[project.name].title,
          }
        ));

        setProjects(projectsWithImages);
      });
  }, []);

  return { projects };
};

export default useProjects;
