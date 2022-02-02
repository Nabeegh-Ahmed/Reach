import { Request, Response } from "express"
import prisma from "../prisma/client"

export const createJoinRequest = async (req: Request, res: Response) => {
    try {
        const { courseId } = req.body
        if (req.user) {
            const existingRequest = await prisma.request.findUnique({
                where: {
                    userId_courseId: {
                        userId: req.user.id,
                        courseId: courseId
                    }
                }
            })
            if (existingRequest) {
                return res.status(400).json({ message: 'You have already requested to join this course'})
            }
            const newRequest = await prisma.request.create({
                data: {
                    userId: req.user.id,
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