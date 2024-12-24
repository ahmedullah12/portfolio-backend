import { Router } from "express";
import { BlogController } from "./blog.controller";

const router = Router();

router.get("/", BlogController.getBlogs);
router.post("/", BlogController.addBlog);
router.get("/:id", BlogController.getSingleBlog);
router.put("/:id", BlogController.updateBlog);
router.delete("/:id", BlogController.deleteBlog);

export const SkillsRoutes = router;