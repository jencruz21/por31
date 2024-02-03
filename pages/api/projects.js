import data from './projects.json';

export const getProjects = () => {
  const projects = JSON.parse(data);
  return projects;
};

export default (req, res) => {
  const projects = getProjects();
  res.json(projects);
};
