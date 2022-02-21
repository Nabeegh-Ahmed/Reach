import { NextFunction, Request, Response} from "express";
import prisma  from "../prisma/client";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken";

/**
 * Register User
 * @param req { body: { user data }}
 * @param res 
 * @returns http status, token, id
 */
export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
    const { firstName, lastName, email, password } = req.body;
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    })
    if (user) {
        res.locals.error = {
            message: "User already exists"
        }
        res.locals.status = 400;
        return next()
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    try {
        const prismaResponse = await prisma.user.create({
            data: {
                firstName,
                lastName,
                email,
                password: hashedPassword
            }
        })
        res.status(201).json({
            id: prismaResponse.id,
            token: generateToken(email),
        })
    } catch (error) {
        console.log(error)
        res.locals.error = {
            message: error
        }
        res.locals.status = 400;
        next()
    }
}

/**
 * Logs in a user and returns the id and jwt
 * @param req 
 * @param res 
 * @returns 
 */

export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    const {email, password} = req.body
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    })
    if (!user) {
        res.locals.error = {
            message: "Invalid Credentials"
        }
        res.locals.status = 400;
        return next()
    }
    const passwordMatch = await bcrypt.compare(password, user.password)
    if (passwordMatch) {
        res.json({
            id: user.id,
            token: generateToken(email),
        })
    } else {
        res.locals.error = {
            message: "Invalid Credentials"
        }
        res.locals.status = 401;
        return next()
    }
}