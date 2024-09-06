import express from "express"
import { isAdmin, requireSignin } from "../middelwere/authMiddelwere.js"
import { ragisterController, loginController, testController } from '../controller/authController.js'

//router object
const router = express.Router()

//routing

//ragister || method post
router.post('/ragister', ragisterController)

//login || post
router.post("/login", loginController)

//test route
router.get("/test", requireSignin, isAdmin,testController)

export default router