import {Router} from "express"
import { login, logout, profile, signup } from "../controller/userController.js"

const userRouter = Router()

userRouter.get("/", (req,res)=>{
    res.send("Backend Server")
})

userRouter.post("/v1/user/signup", signup)
userRouter.post("/v1/user/login", login)
userRouter.get("/v1/user/logout", logout)
userRouter.get("/v1/user/profile", profile)

export default userRouter;