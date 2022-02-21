import prisma from '../prisma/client'
import { NextFunction, Request, Response } from "express"

/**
 * Creates a course with the given data
 * @param req { body: { name, description, genre, price, startingDate, endingDate, cover } }
 * @param res 
 * @returns http response code
 */
export const createCourse = async (req: Request, res: Response, next: NextFunction) => {
    const { name, description, genre, price, startingDate, endingDate, cover} = req.body
    try {
        // Checks for an authenticated request
        if (res.locals.user) {
            const newCourse = await prisma.course.create({
                data: {
                    name,
                    description,
                    genre,
                    price,
                    startingDate,
                    endingDate,
                    cover,
                    rating: 0,
                    totalMarks: 0,
                    teacherId: res.locals.user.id
                }
            })
            return res.status(201).json({ courseId: newCourse.id })
        }
        res.locals.error = {
            message: "You are not authorized to create a course"
        }
        res.locals.status = 401;
        return next()
    } catch (error) {
        console.log(error)
        res.locals.error = {
            message: "Error in creating a course",
            error: error
        }
        res.locals.status = 400;
        return next()
    }
}

/**
 * Gets a course with a specific id. The results are paginated.
 * skip: Skips n numbers of database entries
 * take: Takes n numbers of database entries
 * @param req { params: { id }, query: {skip, take} }
 * @param res 
 */
export const getCourse = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const course = await prisma.course.findUnique({
            where: {
                id: Number(req.params.id)
            }
        })
        if (course) {
            res.status(200).json({ course })
        } else {
            res.locals.error = {
                message: "Course not found"
            }
            res.locals.status = 400;
            return next()
        }
    } catch (error) {
        console.log(error)
        res.locals.error = {
            error: error
        }
        res.locals.status = 400;
        return next()
    }
}

/**
 * Gets all courses
 * @param req
 * @param res 
 */
export const getCourses = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const courses = await prisma.course.findMany()
        res.status(200).json({ courses })
    } catch (error) {
        console.log(error)
        res.locals.error = {
            error
        }
        res.locals.status = 400;
        return next()
    }
}

/**
 * Search a course by name. Results are paginated.
 * @param req 
 * @param res 
 */
export const searchCourse = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (typeof req.query.search === 'string') {
            const searchedCoruses = await prisma.course.findMany({
                where: {
                    name: {
                        contains: req.query.search
                    }
                },
                skip: Number(req.query.skip) ? Number(req.query.skip) : 0,
                take: Number(req.query.take) ? Number(req.query.take) : 10 
            })
            res.status(200).json({ courses: searchedCoruses })
        } else {
            res.locals.error = {
                message: "Invalid search query"
            }
            res.locals.status = 400;
            return next()
        }
    } catch (error) { 
        console.log(error)
        res.locals.error = {
            error
        }
        res.locals.status = 400;
        return next()
    }
}

export const deleteCourse = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (req.params.id && res.locals.user) {
            const course = await prisma.course.delete({
                where: {
                    id: Number(req.params.id)
                }
            })
            if (course) {
                return res.sendStatus(200)
            }
            res.locals.error = {
                message: "Course not found"
            }
            res.locals.status = 404;
            return next()
        }
        res.locals.error = {
            message: "You are not authorized to delete this course"
        }
        res.locals.status = 400;
        return next()
    } catch (error) {
        console.log(error)
        res.locals.error = {
            error
        }
        res.locals.status = 400;
        return next()
    }
}