import express from 'express'
import cors from 'cors'

import dotenv from 'dotenv'
dotenv.config()

import { User } from '@prisma/client'

declare global {
    namespace Express {
        export interface Request {
            user: User | null
        }
    }
}

const app = express()
app.use(express.json())
app.use(cors());

import userRoutes from "./routes/userRoutes"
import courseRoutes from './routes/courseRoutes'
import requestRoutes from './routes/requestRoutes'

app.use('/api/user', userRoutes)
app.use('/api/course', courseRoutes)
app.use('/api/request', requestRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})