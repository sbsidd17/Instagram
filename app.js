import cookieParser from "cookie-parser";
import express from "express"
import userRouter from "./routes/userRoutes.js";

const app = express()
app.use(express.json())
app.use(cookieParser)
app.use("/", userRouter)


export default app;