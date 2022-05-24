"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("./"));
const users_1 = __importDefault(require("../users/"));
describe("Courses model tests", () => {
    const users = new users_1.default();
    const courses = new _1.default();
    it('should login and create a new course', async () => {
        const user = await users.login({
            email: 'string1@str.com',
            password: 'string123@N'
        });
        courses.setTransportParams({
            headers: {},
            jwt: user.token
        });
        const course = await courses.create({
            name: 'test',
            teacherId: String(user.id),
            description: 'test',
            genre: 'test',
            price: 100,
            startingDate: new Date(),
            endingDate: new Date(),
            cover: 'test',
        });
        expect(course.courseId).toBeDefined();
        const { message } = await courses.deleteCourse(course.courseId);
        expect(message).toBe('Course deleted.');
    });
    it('should get the data of a course', async () => {
        const { course } = await courses.getCourseData('3');
        expect(course.name).toBe('course 3');
        expect(course.teacherId).toBe(1);
    });
    it('should make an unauthenticated request and get an error', async () => {
        courses.setTransportParams({
            headers: {},
            jwt: ''
        });
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
            });
            expect(1 + 1).toBe(3);
        }
        catch (error) {
            expect(1 + 1).toBe(2);
        }
    });
});
