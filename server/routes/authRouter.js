import express from "express";
import{ loginController, regiterController, testController, } from "../controller/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/register", regiterController);

router.post("/login", loginController);

router.get("/test", requireSignIn, isAdmin, testController);

export default router;