import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import prisma from '../prisma/client'

// Middleware for checking the jwt token
// and then updating the user object in the request

export const protect = async (req: Request, res: Response, next: NextFunction) => {
    let token
    if (req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer') &&
        process.env.JWT_SECRET
    ) {
        try {
            token = req.headers.authorization.split(' ')[1]
            // Decoding the jwt to get the user email, stored in id.
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            if (typeof decoded === 'string') {
                res.status(401).json({ message: 'Invalid token'})
            } else {
                // Find the user with the email in the token
                const user = await prisma.user.findUnique({
                    where: {
                        email: decoded.id
                    }
                })
                if (!user) {
                    // if no email is found, return a 401 errorr
                    res.status(401).json({ message: 'USer not Authorized'})
                } else {
                    // Update the req.user object
                    res.status(200)
                    req.user = user
                    next()
                }
            }
        } catch(error) {
            console.error(error)
            res.status(401).json({message: 'User not Authorized'})
        }
    }
    if (!token) {
        // If no token, return a 401 error
        res.status(401).json({message: 'User not Authorized'})
    }
}