import { Router } from 'express';
import { ProjectController } from './project.controller';

const router = Router();

router.get('/', ProjectController.getProjects);
router.post('/', ProjectController.addProject);
router.get('/:id', ProjectController.getSingleProject);
router.put('/:id', ProjectController.updateProject);
router.delete('/:id', ProjectController.deleteProject);

export const SkillsRoutes = router;
