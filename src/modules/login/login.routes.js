import { Router } from "express";
import { handleLogin, login } from "./login.controller.js";

const router = Router();

router.get("/login", login);
router.post("/handlelogin", handleLogin);
export default router;
