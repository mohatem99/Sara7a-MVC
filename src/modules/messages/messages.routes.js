import { Router } from "express";
import { messages, sendMessage } from "./messages.controller.js";

const router = Router();

router.get("/messages", messages);
router.post("/sendMessage/:id", sendMessage);
export default router;
