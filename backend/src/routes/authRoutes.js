// ...existing code...
import { Router } from "express";
import { loginUser, registerUser } from "./controllers/authController.js";
import { verifyjwt } from "../middlewares/authMiddleware.js";

const router = Router();

router.route("/login").post(loginUser);
router.route("/register").post(registerUser);
// router.get("/profile", verifyjwt, getUserProfile);

export default router;
// ...existing code...