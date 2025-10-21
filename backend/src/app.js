import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()
import { verifyjwt } from "./middlewares/authMiddleware.js"

const app = express()

app.use(cors({
    origin: process.env.COR_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16KB"}))
app.use(express.urlencoded({ extended: "true",limit: "16KB" }))
app.use(express.static("public"))
app.use(cookieParser())


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

import routes from './routes/authRoutes.js'
app.use("/api/v1/auth", routes)

export { app }