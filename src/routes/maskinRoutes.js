import express from "express";
import { registrerMaskin, hentMaskiner } from "../controllers/maskinControllers.js";

const router = express.Router();

router.post("/", registrerMaskin);
router.get("/", hentMaskiner);

export default router;