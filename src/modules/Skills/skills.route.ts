import { Router } from "express";
import { SkillsController } from "./skills.controller";

const router = Router();

router.get("/", SkillsController.getSkills);
router.post("/", SkillsController.addSkill);
router.put("/:id", SkillsController.updateSkill);
router.delete("/:id", SkillsController.deleteSkill);

export const SkillsRoutes = router;