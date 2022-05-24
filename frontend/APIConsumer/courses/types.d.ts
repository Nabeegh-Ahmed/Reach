export interface CreateCoursePayload {
    name: string;
    teacherId: string;
    description: string;
    genre: string;
    price: number;
    startingDate: Date;
    endingDate: Date;
    cover: string;
}
export interface CreatedCourseResponse {
    courseId: string;
}
export interface Course extends CreateCoursePayload {
    id: number
    rating: number
}
export interface Courses {
    courses: Course[];
}
export interface CourseDeletionResponse {
    message: string;
}
