import express from 'express';
import { SkillsRoutes } from '../modules/Skills/skills.route';
import { BlogsRoutes } from '../modules/Blog/blog.route';
import { ProjectsRoutes } from '../modules/Project/project.route';
import { AuthRoutes } from '../modules/User/auth.route';
import { ExperienceRoutes } from '../modules/Experience/experience.route';
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
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/experiences",
    route: ExperienceRoutes,
  },
];

moduleRouter.forEach((route) => router.use(route.path, route.route));

export default router;
