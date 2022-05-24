import ReachAPI from './';

describe("Controller model tests", () => {
    const api = new ReachAPI();
    it('should login and create a new course and delete that course', async() => {
        const {id, token} = await api.users().login({
            email: 'string1@str.com',
            password: 'string123@N'
        })
        expect(token).toBeDefined()
        const {courseId} = await api.courses({jwt: token}).create({
            name: 'test',
            teacherId: String(id),
            description: 'test',
            genre: 'test',
            price: 100,
            startingDate: new Date(),
            endingDate: new Date(),
            cover: 'test',
        })
        await api.courses().deleteCourse(courseId)
    })

})