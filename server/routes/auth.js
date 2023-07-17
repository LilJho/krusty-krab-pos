import express from "express";
import * as dotenv from "dotenv";
import { handleLogin } from "../controllers/authController.js";

const router = express.Router();
dotenv.config();

router.post("/", handleLogin);

export default router;
