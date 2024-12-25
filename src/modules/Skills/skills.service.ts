import { IFile } from '../../types/file';
import { ISkill } from './skills.interface';
import { Skill } from './skills.model';

const addSkill = async (payload: ISkill, file: IFile | undefined) => {
  const result = await Skill.create({ ...payload, image: file?.path });

  return result;
};

const getSkills = async () => {
  const result = await Skill.find();

  return result;
};

const updateSkill = async (
  id: string,
  payload: ISkill,
  file: IFile | undefined,
) => {
  if (file) {
    payload.image = file.path;
  }

  const result = await Skill.findByIdAndUpdate(id, payload, { new: true });

  return result;
};

const deleteSkill = async (id: string) => {
  const result = await Skill.findByIdAndDelete(id);

  return result;
};

export const SkillsServices = {
  addSkill,
  getSkills,
  updateSkill,
  deleteSkill,
};
