import { Request, Response } from "express"
import prisma from "../prisma/client"

/**
 * Create a join request for a course
 * @param req { body: { courseId }, user }
 * @param res 
 * @returns 
 */
export const createJoinRequest = async (req: Request, res: Response) => {
    try {
        const { courseId } = req.body
        if (res.locals.user) {
            const existingRequest = await prisma.request.findUnique({
                where: {
                    userId_courseId: {
                        userId: res.locals.user.id,
                        courseId: courseId
                    }
                }
            })
            if (existingRequest) {
                return res.status(400).json({ message: 'You have already requested to join this course'})
            }
            const newRequest = await prisma.request.create({
                data: {
                    userId: res.locals.user.id,
                    courseId: courseId,
                    status: 'PENDING'
                }
            })
            return res.status(201).json({ message: 'Request sent successfully'})
        }
        res.sendStatus(401)
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}

/**
 * Approves a pending request and then creates a registration
 * @param req { body: { courseId, userId } }
 * @param res 
 */
export const approveRequest = async (req: Request, res: Response) => {
    try {
        const { userId, courseId } = req.body
        await prisma.request.delete({
            where: {
                userId_courseId: {
                    userId: userId,
                    courseId: courseId
                }
            }
        })
        await prisma.registration.create({
            data: {
                userId: userId,
                courseId: courseId
            }
        })
        res.sendStatus(201)
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}

/**
 * Rejects the pending request and deletes the request
 * @param req { body: { courseId, userId } }
 * @param res 
 */
export const rejectRequest = async (req: Request, res: Response) => {
    try {
        const { userId, courseId } = req.body
        await prisma.request.delete({
            where: {
                userId_courseId: {
                    userId: userId,
                    courseId: courseId
                }
            }
        })
        res.sendStatus(201)
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}

/**
 * Get requests for a course
 * @param req 
 * @param res 
 */
export const getRequests = async (req: Request, res: Response) => {
    try {
        // First checks if the logged in user created the particular course
        const courseData = await prisma.course.findUnique({
            where: {
                id: req.body.courseId
            }
        })
        if (!res.locals.user) return res.sendStatus(401)
        if(!courseData || courseData.teacherId !== res.locals.user.id) {
            return res.sendStatus(401)
        }
        const requests = await prisma.request.findMany({
            where: {
                courseId: req.body.courseId
            }
        })
        res.status(200).json({ requests })
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}