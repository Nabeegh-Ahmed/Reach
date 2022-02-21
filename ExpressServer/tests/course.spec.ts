import 'jest'
import { NextFunction, Request, Response } from 'express'
import {createCourse, deleteCourse, getCourses, getCourse} from '../src/controllers/courseController'
import {loginUser} from '../src/controllers/userController'

describe('Course integration tests', () => {
    let responseObject: any = {}
    const request: {body: any, headers: any, user: any, params: any} = {body: null, headers: null, user: null, params: null}
    const next: NextFunction = () => {}
    const response: Partial<Response> = {
        // @ts-ignore
        status: (status: number) => {
            responseObject.status = status
            return response
        },
        // @ts-ignore
        sendStatus: (status: number) => {
            responseObject.status = status
            return response
        },
        locals: {
            user: null,
            error: null,
            status: null
        },
        json: jest.fn().mockImplementation((result) => {
            responseObject = result
        })
    }
    it('should get the list of courses', async () => {
        await getCourses(request as Request, response as Response, next)
        expect(responseObject).toEqual({
            courses: [{
                cover: "",
                description: "",
                endingDate: new Date("1970-01-01T00:00:00.000Z"),
                genre: "",
                id: 3,
                name: "course 3",
                price: 0,
                rating: 0,
                startingDate: new Date("1970-01-01T00:00:00.000Z"),
                teacherId: 1,
                totalMarks: 0,
            }]
        })
    })
    it('should login and create a course', async() => {
        request.body = {
            email: 'j21@gmail.com',
            password: '123456'
        }
        await loginUser(request as Request, response as Response, next)
        expect(responseObject.id).toBe(19)
        expect(responseObject.token).toBeDefined()
        request.body = {
            name: 'Test Course',
            description: 'Test description',
            genre: 'Test genre',
            price: 100,
            startingDate: new Date('2020-01-01'),
            endingDate: new Date('2020-01-01'),
            cover: 'Test cover'
        }
        if (response.locals)
            response.locals.user = {
                id: responseObject.id
            }
        await createCourse(request as Request, response as Response, next)
        expect(responseObject.courseId).toBeDefined()
        request.params = {
            id: responseObject.courseId
        }
        await deleteCourse(request as Request, response as Response, next)
        expect(responseObject.status).toBe(200)
    })
    it('should get a course by id', async() => {
        request.params = {
            id: 3
        }
        await getCourse(request as Request, response as Response, next)
        expect(responseObject).toEqual({
            course: {
                cover: "",
                description: "",
                endingDate: new Date("1970-01-01T00:00:00.000Z"),
                genre: "",
                id: 3,
                name: "course 3",
                price: 0,
                rating: 0,
                startingDate: new Date("1970-01-01T00:00:00.000Z"),
                teacherId: 1,
                totalMarks: 0,
            }
        })
    })
})