import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()
import { authMiddleware } from "./middlewares/authMiddleware.js"
import { authRoutes } from "./routes/authRoutes.js"

const app = express()

app.use(cors({
    origin: process.env.COR_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16KB"}))
app.use(express.urlencoded({ extended: "true",limit: "16KB" }))
app.use(express.static("public"))
app.use(cookieParser())

import userRouter from './routes/authRoutes.js'
app.use("/api/v1/auth", authRoutes)

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

export { app }