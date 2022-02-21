import 'jest'
import { NextFunction, Request, Response } from 'express'
import {loginUser, registerUser} from '../src/controllers/userController'

describe('User integration tests', () => {
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
    it('should login successfully', async() => {
        request.body = {
            email: 'j21@gmail.com',
            password: '123456'
        }
        await loginUser(request as Request, response as Response, next)
        expect(responseObject.id).toBe(19)
        expect(responseObject.token).toBeDefined()
    })
    it('should return error for wrong password', async() => {
        request.body = {
            email: 'j21@gmail.com',
            password: 'wrong pa22ssword'
        }
        await loginUser(request as Request, response as Response, next)
        if(response.locals)
            expect(response.locals.error.message).toBe("Invalid Credentials")
    })
    it('should register', async() => {
        request.body = {
            email: `test${Math.random()}@gmail.com`,
            password: '123456',
            firstName: "testF",
            lastName: "testL"
        }
        await registerUser(request as Request, response as Response, next)
        expect(responseObject.id).toBeDefined()
        expect(responseObject.token).toBeDefined()
    })
    it('should return error for duplicate email', async () => {
        request.body = {
            email: "j21@gmail.com",
            password: '123456',
            firstName: "testF",
            lastName: "testL"
        }
        await registerUser(request as Request, response as Response, next)
        if(response.locals)
        expect(response.locals.error.message).toBe("User already exists")
    })
})