import { request } from "../Tranport Layer";
import { CreateCoursePayload, CreatedCourseResponse, Course, CourseDeletionResponse } from "./types";
import { CourseEndPoints } from './endPoints'
import { defaultTransportParams, TransportParams } from "../Tranport Layer/types";

class Courses {
    private route = '/course'
    private transportParams: TransportParams = defaultTransportParams
    
    async create(courseData: CreateCoursePayload): Promise<CreatedCourseResponse> {
        if (this.transportParams.jwt === '') throw Promise.reject({message: 'No JWT provided'})
        return request({
            endPoint: CourseEndPoints.create,
            route: this.route,
            method: 'POST',
            body: courseData,
            headers: {
                'Authorization': `Bearer ${this.transportParams.jwt}`,
                ...this.transportParams.headers
            }
        })
    }
    async getCourseData(courseId: string): Promise<{course: Course}> {
        return request({
            endPoint: CourseEndPoints.course + courseId,
            route: this.route,
            method: 'GET',
            body: null,
            headers: null
        })
    }
    async getCourses(): Promise<{courses: Course[]}> {
        return request({
            endPoint: CourseEndPoints.courses,
            route: this.route,
            method: 'GET',
            body: null,
            headers: null
        })
    }
    async deleteCourse(courseId: string): Promise<CourseDeletionResponse> {
        if (this.transportParams.jwt === '') throw Promise.reject({message: 'No JWT provided'})
        return request({
            endPoint: CourseEndPoints.delete + courseId,
            route: this.route,
            method: 'POST',
            body: {},
            headers: {
                'Authorization': `Bearer ${this.transportParams.jwt}`
            }
        })
    }
    setTransportParams(transportParams: TransportParams) {
        if (this.transportParams.jwt === '') this.transportParams.jwt = transportParams.jwt
        else this.transportParams = transportParams
    }
}

export default Courses