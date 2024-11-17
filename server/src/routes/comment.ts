import { Router } from "express";
import { listComments, postComment } from "../handlers/comment";
import { validator } from "../middlewares/validator";
import { createCommentSchema } from "../schemas/comment";
import { auth } from "../middlewares/auth";

export const router = Router();
router.post("/create", validator(createCommentSchema), postComment);
router.get("/list", listComments);
