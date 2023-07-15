import cookieParser from "cookie-parser";
import express from "express"
import userRouter from "./routes/userRoutes.js";
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use("/", userRouter)


export default app;