import express from "express";
import { signUp } from "../Controllers/auth.controller.js";
import { signIn } from "../Controllers/auth.controller.js";

const router = express.Router(); // This creates a new router instance

router.post("/signup", signUp) 
router.post("/signin", signIn)


export default router;