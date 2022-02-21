import express from 'express'
import morgan from 'morgan';
import dotenv from 'dotenv'
dotenv.config();

import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'

const swaggerOptions = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Reach API",
			version: "1.0.0",
			description: "A REST API for an Education Management System",
		},
		servers: [
			{
				url: "http://localhost:5000",
			},
		],
	},
	apis: ["./src/routes/*.ts"],
	components: {
		securitySchemes: {
			jwt: {
				type: "http",
				scheme: "bearer",
				in: "header",
				bearerFormat: "JWT"
			},
		}
	},
	security: [{
		jwt: []
	}],
}
const specs = swaggerJsDoc(swaggerOptions)

const app: express.Application = express()
app.use(express.json())
app.use(morgan('dev'))
import userRoutes from "./routes/userRoutes"
import courseRoutes from './routes/courseRoutes'
import requestRoutes from './routes/requestRoutes'
import registrationRoutes from './routes/registrationRoutes'

app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use('/api/user', userRoutes)
app.use('/api/course', courseRoutes)
app.use('/api/request', requestRoutes)
app.use('/api/registration', registrationRoutes)

console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
if (process.env.NODE_ENV !== 'test') {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`)
    })
}

export default app