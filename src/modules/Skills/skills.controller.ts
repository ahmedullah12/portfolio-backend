import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { SkillsServices } from './skills.service';

const addSkill = catchAsync(async (req, res) => {
  const result = await SkillsServices.addSkill(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Skill added successfully',
    data: result,
  });
});
const getSkills = catchAsync(async (req, res) => {
  const result = await SkillsServices.getSkills();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Skill added successfully',
    data: result,
  });
});
const updateSkill = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await SkillsServices.updateSkill(id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Skill added successfully',
    data: result,
  });
});
const deleteSkill = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await SkillsServices.deleteSkill(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Skill added successfully',
    data: result,
  });
});

export const SkillsController = {
  addSkill,
  getSkills,
  updateSkill,
  deleteSkill,
};
