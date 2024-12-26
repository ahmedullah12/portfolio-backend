import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { IFile } from '../../types/file';
import { IExperience } from './experience.interface';
import { Experience } from './experience.model';

const addExperience = async (payload: IExperience) => {
  const result = await Experience.create(payload);

  return result;
};

const getExperiences = async () => {
  const result = await Experience.find();

  return result;
};

const getSingleExperience = async (id: string) => {
  const result = await Experience.findById(id);

  return result;
};

const updateExperience = async (id: string, payload: Partial<IExperience>) => {
  const result = await Experience.findByIdAndUpdate(id, payload, { new: true });

  return result;
};

const deleteExperience = async (id: string) => {
  const result = await Experience.findByIdAndDelete(id);

  return result;
};

export const ExperienceServices = {
  addExperience,
  getExperiences,
  getSingleExperience,
  updateExperience,
  deleteExperience,
};
