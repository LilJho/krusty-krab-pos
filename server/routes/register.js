import express from "express";
import * as dotenv from "dotenv";
import { handleNewUser } from "../controllers/registerController.js";

const router = express.Router();
dotenv.config();

router.post("/", handleNewUser);

export default router;
