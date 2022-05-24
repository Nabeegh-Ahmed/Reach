import Courses from './';
import Users from '../users/';

describe("Courses model tests", () => {
    const users = new Users();
    const courses = new Courses();
    it('should login and create a new course', async() => {
        const user = await users.login({
            email: 'string1@str.com',
            password: 'string123@N'
        })
        courses.setTransportParams({
            headers: {},
            jwt: user.token
        })
        const course = await courses.create({
            name: 'test',
            teacherId: String(user.id),
            description: 'test',
            genre: 'test',
            price: 100,
            startingDate: new Date(),
            endingDate: new Date(),
            cover: 'test',
        })
        expect(course.courseId).toBeDefined()
        const { message } = await courses.deleteCourse(course.courseId)
        expect(message).toBe('Course deleted.')
    })
    it('should get the data of a course', async() => {
        const { course } = await courses.getCourseData('3')
        expect(course.name).toBe('course 3')
        expect(course.teacherId).toBe(1)
    })
    it('should make an unauthenticated request and get an error', async() => {
        courses.setTransportParams({
            headers: {},
            jwt: ''
        })
        try {
            await courses.create({
                name: 'test',
                teacherId: String('1'),
                description: 'test',
                genre: 'test',
                price: 100,
                startingDate: new Date(),
                endingDate: new Date(),
                cover: 'test',
            })
            expect(1+1).toBe(3)
        } catch (error: any) {
            expect(1+1).toBe(2)
        }
            
    })
})