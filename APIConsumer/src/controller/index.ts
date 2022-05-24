import Users from '../users'
import Courses from '../courses'
import { TransportParams, defaultTransportParams } from '../Tranport Layer/types'

class ReachAPI {
    private m_users: Users
    private m_courses: Courses
    constructor(baseURL: string = process.env.baseURL ? process.env.baseURL : 'http://localhost:5000/api') {
        process.env.baseURL = baseURL
        this.m_users = new Users()
        this.m_courses = new Courses()
    }
    courses(transportParams: TransportParams = defaultTransportParams) {
        this.m_courses.setTransportParams(transportParams)
        return this.m_courses
    }
    users() {
        return this.m_users
    }
}

export default ReachAPI