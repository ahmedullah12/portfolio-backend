import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BlogServices } from "./blog.service";

const addBlog = catchAsync(async (req, res) => {
  const result = await BlogServices.addBlog(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Blog added successfully",
    data: result,
  });
});

const getBlogs = catchAsync(async (req, res) => {
  const result = await BlogServices.getBlogs();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Blogs fetched successfully",
    data: result,
  });
});

const getSingleBlog = catchAsync(async (req, res) => {
    const { id } = req.params;
  const result = await BlogServices.getSingleBlog(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Blog fetched successfully",
    data: result,
  });
});

const updateBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BlogServices.updateBlog(id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Blog updated successfully",
    data: result,
  });
});

const deleteBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BlogServices.deleteBlog(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Blog deleted successfully",
    data: result,
  });
});

export const BlogController = {
  addBlog,
  getBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};