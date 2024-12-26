import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { IProject } from './project.interface';
import { Project } from './project.model';
import { IFile } from '../../types/file';

const addProject = async (payload: IProject, file: IFile | undefined) => {
  if(!file){
    throw new AppError(httpStatus.BAD_REQUEST, 'Please upload an image');
  }

  const result = await Project.create({...payload, image: file.path});

  return result;
};

const getProjects = async () => {
  const result = await Project.find();

  return result;
};

const getSingleProject = async (id: string) => {
  const result = await Project.findById(id);

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
  getSingleProject,
  updateProject,
  deleteProject,
};
