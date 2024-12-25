import { Router } from 'express';
import { SkillsController } from './skills.controller';
import { multerUpload } from '../../config/multer.config';
import { parseBody } from '../../middlewares/bodyParser';

const router = Router();

router.get('/', SkillsController.getSkills);
router.post(
  '/',
  multerUpload.single('image'),
  parseBody,
  SkillsController.addSkill,
);
router.put(
  '/:id',
  multerUpload.single('image'),
  parseBody,
  SkillsController.updateSkill,
);
router.delete('/:id', SkillsController.deleteSkill);

export const SkillsRoutes = router;
