import { Router } from 'express';
import { BlogController } from './blog.controller';
import { multerUpload } from '../../config/multer.config';
import { parseBody } from '../../middlewares/bodyParser';

const router = Router();

router.get('/', BlogController.getBlogs);
router.post(
  '/',
  multerUpload.single('image'),
  parseBody,
  BlogController.addBlog,
);
router.get('/:id', BlogController.getSingleBlog);
router.put(
  '/:id',
  multerUpload.single('image'),
  parseBody,
  BlogController.updateBlog,
);
router.delete('/:id', BlogController.deleteBlog);

export const BlogsRoutes = router;
