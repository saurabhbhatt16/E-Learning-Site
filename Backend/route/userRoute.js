import express from "express"
import isAuth from "../middleware/isAuth.js"
import { getCurrentUser } from "../controller/userController.js"

const userRouter = express.Router()

userRouter.get("/getcurrentuser", isAuth, getCurrentUser)
userRouter.post("/updateprofile",isAuth,upload.single("photoUrl"),UpdateProfile)

export default userRouter