import { Router } from "express";
import { logout, user } from "./user.controller.js";

const router = Router();

router.get("/user/:id", user);
router.get("/logout", logout);
export default router;
