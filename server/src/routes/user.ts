import { Router } from "express";
import { createUser, login } from "../handlers/user";
import { validator } from "../middlewares/validator";
import { userLoginSchema, userRegisterSchema } from "../schemas/user";

export const router = Router();

router.post("/register", validator(userRegisterSchema), createUser);
router.post("/login", validator(userLoginSchema), login);
