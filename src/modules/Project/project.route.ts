import { Router } from 'express';
import { ProjectController } from './project.controller';
import { multerUpload } from '../../config/multer.config';
import { parseBody } from '../../middlewares/bodyParser';

const router = Router();

router.get('/', ProjectController.getProjects);
router.post(
  '/',
  multerUpload.single('image'),
  parseBody,
  ProjectController.addProject,
);
router.get('/:id', ProjectController.getSingleProject);
router.put(
  '/:id',
  multerUpload.single('image'),
  parseBody,
  ProjectController.updateProject,
);
router.delete('/:id', ProjectController.deleteProject);

export const ProjectsRoutes = router;
