"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tranport_Layer_1 = require("../Tranport Layer");
const endPoints_1 = require("./endPoints");
const types_1 = require("../Tranport Layer/types");
class Courses {
    route = '/course';
    transportParams = types_1.defaultTransportParams;
    async create(courseData) {
        if (this.transportParams.jwt === '')
            throw Promise.reject({ message: 'No JWT provided' });
        return (0, Tranport_Layer_1.request)({
            endPoint: endPoints_1.CourseEndPoints.create,
            route: this.route,
            method: 'POST',
            body: courseData,
            headers: {
                'Authorization': `Bearer ${this.transportParams.jwt}`,
                ...this.transportParams.headers
            }
        });
    }
    async getCourseData(courseId) {
        return (0, Tranport_Layer_1.request)({
            endPoint: endPoints_1.CourseEndPoints.course + courseId,
            route: this.route,
            method: 'GET',
            body: null,
            headers: null
        });
    }
    async getCourses() {
        return (0, Tranport_Layer_1.request)({
            endPoint: endPoints_1.CourseEndPoints.courses,
            route: this.route,
            method: 'GET',
            body: null,
            headers: null
        });
    }
    async deleteCourse(courseId) {
        if (this.transportParams.jwt === '')
            throw Promise.reject({ message: 'No JWT provided' });
        return (0, Tranport_Layer_1.request)({
            endPoint: endPoints_1.CourseEndPoints.delete + courseId,
            route: this.route,
            method: 'POST',
            body: {},
            headers: {
                'Authorization': `Bearer ${this.transportParams.jwt}`
            }
        });
    }
    setTransportParams(transportParams) {
        if (this.transportParams.jwt === '')
            this.transportParams.jwt = transportParams.jwt;
        else
            this.transportParams = transportParams;
    }
}
exports.default = Courses;
