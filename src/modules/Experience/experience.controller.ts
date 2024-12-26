import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ExperienceServices } from './experience.service';

const addExperience = catchAsync(async (req, res) => {
  const result = await ExperienceServices.addExperience(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Experience added successfully',
    data: result,
  });
});

const getExperiences = catchAsync(async (req, res) => {
  const result = await ExperienceServices.getExperiences();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Experiences fetched successfully',
    data: result,
  });
});

const getSingleExperience = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ExperienceServices.getSingleExperience(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Experience fetched successfully',
    data: result,
  });
});

const updateExperience = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ExperienceServices.updateExperience(id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Experience updated successfully',
    data: result,
  });
});

const deleteExperience = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ExperienceServices.deleteExperience(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Experience deleted successfully',
    data: result,
  });
});

export const ExperienceController = {
  addExperience,
  getExperiences,
  getSingleExperience,
  updateExperience,
  deleteExperience,
};
