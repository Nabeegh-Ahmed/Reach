import express from 'express'
import cors from 'cors'

import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors());

import userRoutes from "./routes/userRoutes"

app.use('/api/user', userRoutes)


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})