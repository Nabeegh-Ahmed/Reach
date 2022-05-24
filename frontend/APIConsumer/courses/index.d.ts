import { CreateCoursePayload, CreatedCourseResponse, Course, CourseDeletionResponse } from "./types";
import { TransportParams } from "../Tranport Layer/types";
declare class Courses {
    private route;
    private transportParams;
    create(courseData: CreateCoursePayload): Promise<CreatedCourseResponse>;
    getCourseData(courseId: string): Promise<{
        course: Course;
    }>;
    getCourses(): Promise<{
        courses: Course[];
    }>;
    deleteCourse(courseId: string): Promise<CourseDeletionResponse>;
    setTransportParams(transportParams: TransportParams): void;
}
export default Courses;
