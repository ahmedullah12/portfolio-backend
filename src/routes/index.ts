import express from 'express';
import { SkillsRoutes } from '../modules/Skills/skills.route';
const router = express.Router();

const moduleRouter = [
  {
    path: "/skills",
    route: SkillsRoutes,
  }
  
];

moduleRouter.forEach((route) => router.use(route.path, route.route));

export default router;
