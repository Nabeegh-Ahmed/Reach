import prisma from '../prisma/client'
import { Request, Response } from "express"

/**
 * Get the registered courses of a user
 * @param req 
 * @param res 
 */
export const getRegisteredCourses = async (req: Request, res: Response) => {
    try {
        if (res.locals.user) {
            const registeredCourses = await prisma.registration.findMany({
                where: {
                    userId: res.locals.user.id
                },
                include: {
                    course: true
                }
            })
            res.status(200).json({ registrations: registeredCourses })
        } else {
            res.sendStatus(401)
        }
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
}