import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProjectServices } from './project.service';

const addProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.addProject(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Skill added successfully',
    data: result,
  });
});
const getProjects = catchAsync(async (req, res) => {
  const result = await ProjectServices.getProjects();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Skill added successfully',
    data: result,
  });
});
const updateProject = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProjectServices.updateProject(id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Skill added successfully',
    data: result,
  });
});

const deleteProject = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProjectServices.deleteProject(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Skill added successfully',
    data: result,
  });
});

export const ProjectController = {
  addProject,
  getProjects,
  updateProject,
  deleteProject,
};
