import { config } from "dotenv"
import app from "./app.js"
import dbConnect from "./config/dbConnect.js"
config()

const PORT = process.env.PORT || 3001

dbConnect();

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
});