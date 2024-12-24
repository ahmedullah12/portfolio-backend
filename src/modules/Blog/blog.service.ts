import { IBlog } from './blog.interface';
import { Blog } from './blog.model';

const addBlog = async (payload: IBlog) => {
  const result = await Blog.create(payload);

  return result;
};

const getBlogs = async () => {
  const result = await Blog.find();

  return result;
};

const getSingleBlog = async (id: string) => {
  const result = await Blog.findById(id);

  return result;
};

const updateBlog = async (id: string, payload: Partial<IBlog>) => {
  const result = await Blog.findByIdAndUpdate(id, payload, { new: true });

  return result;
};

const deleteBlog = async (id: string) => {
  const result = await Blog.findByIdAndDelete(id);

  return result;
};

export const BlogServices = {
  addBlog,
  getBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
