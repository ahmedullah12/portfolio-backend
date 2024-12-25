import express from 'express';
import { SkillsRoutes } from '../modules/Skills/skills.route';
import { BlogsRoutes } from '../modules/Blog/blog.route';
import { ProjectsRoutes } from '../modules/Project/project.route';
const router = express.Router();

const moduleRouter = [
  {
    path: "/skills",
    route: SkillsRoutes,
  },
  {
    path: "/blogs",
    route: BlogsRoutes,
  },
  {
    path: "/projects",
    route: ProjectsRoutes,
  },
  
];

moduleRouter.forEach((route) => router.use(route.path, route.route));

export default router;
