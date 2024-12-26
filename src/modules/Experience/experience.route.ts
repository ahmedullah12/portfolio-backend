import { Router } from 'express';
import { multerUpload } from '../../config/multer.config';
import { parseBody } from '../../middlewares/bodyParser';
import { ExperienceController } from './experience.controller';

const router = Router();

router.get('/', ExperienceController.getExperiences);
router.post('/', ExperienceController.addExperience);
router.get('/:id', ExperienceController.getSingleExperience);
router.put('/:id', ExperienceController.updateExperience);
router.delete('/:id', ExperienceController.deleteExperience);

export const ExperienceRoutes = router;
