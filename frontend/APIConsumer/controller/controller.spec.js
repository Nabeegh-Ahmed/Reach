"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("./"));
describe("Controller model tests", () => {
    const api = new _1.default();
    it('should login and create a new course and delete that course', async () => {
        const { id, token } = await api.users().login({
            email: 'string1@str.com',
            password: 'string123@N'
        });
        expect(token).toBeDefined();
        const { courseId } = await api.courses({ jwt: token }).create({
            name: 'test',
            teacherId: String(id),
            description: 'test',
            genre: 'test',
            price: 100,
            startingDate: new Date(),
            endingDate: new Date(),
            cover: 'test',
        });
        await api.courses().deleteCourse(courseId);
    });
});
