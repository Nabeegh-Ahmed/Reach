import Users from '../users';
import Courses from '../courses';
import { TransportParams } from '../Tranport Layer/types';
declare class ReachAPI {
    private m_users;
    private m_courses;
    constructor(baseURL?: string);
    courses(transportParams?: TransportParams): Courses;
    users(): Users;
}
export default ReachAPI;
