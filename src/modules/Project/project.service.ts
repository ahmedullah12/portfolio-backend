import { IProject } from './project.interface';
import { Project } from './project.model';

const addProject = async (payload: IProject) => {
  const result = await Project.create(payload);

  return result;
};

const getProjects = async () => {
  const result = await Project.find();

  return result;
};

const updateProject = async (id: string, payload: IProject) => {
  const result = await Project.findByIdAndUpdate(id, payload, { new: true });

  return result;
};

const deleteProject = async (id: string) => {
  const result = await Project.findByIdAndDelete(id);

    return result;
};

export const ProjectServices = {
    addProject,
    getProjects,
    updateProject,
    deleteProject,
}
