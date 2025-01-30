import express from "express";
import { google, signUp, signIn } from "../Controllers/auth.controller.js";


const router = express.Router(); // This creates a new router instance

router.post("/signup", signUp) 
router.post("/signin", signIn)
router.post("/google", google)


export default router;