import InputBar from "../../../components/inputBar"
import { GetServerSideProps } from "next"
import MainLayout from "../../../layouts/mainLayout"
import {GrAnnounce} from 'react-icons/gr'
import Button from "../../../components/button"
import ClassAnnouncementCard from "../../../components/classAnnouncementCard"
import ReachAPI from '../../../APIConsumer'
import { Course } from "../../../APIConsumer/courses/types"

interface CoursePageProps {
    course: Course
}

const CoursePage: React.FC<CoursePageProps> = ({ course }) => {
    return (
        <MainLayout>
            <div className="grid grid-cols-12 space-x-3">
                <div className="col-span-8">
                    <div className="rounded-2xl shadow-lg">
                        <img src={course.cover} className="w-full h-96 rounded-t-xl"/>
                        <div className="font-bold text-xl p-5">
                            {course.name}
                        </div>
                    </div>
                    <div className="my-4">
                        <InputBar icon={<GrAnnounce />} className="p-8" placeholder="Create a new anouncemnet"/>
                    </div>
                    <ClassAnnouncementCard 
                        announcement="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        teacherName="Dr. Nabeegh Ahmed"
                        teacherAvatar="https://lh3.googleusercontent.com/a/default-user=s40-c"
                        date="2020-05-20"
                    />
                </div>
                <div className="col-span-4">
                    <div className="rounded-xl p-5 border-2">
                        <div className="font-bold text-xl">Register for this course now</div>
                        <hr className="my-4"/>
                        <div><span className="font-bold">Starting Date: </span> {course.startingDate}</div>
                        <div><span className="font-bold">Ending Date: </span> {course.endingDate}</div>
                        <div><span className="font-bold">Registration Fees: </span> {course.price}</div>
                        <hr className="my-4"/>
                        <Button variant="primary" className="w-full">Send join request</Button>
                    </div>
                </div>
            </div>
            
        </MainLayout>
    )
}

export default CoursePage

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const api = new ReachAPI()
    if (params && typeof params.id === "string") {
        const { course } = await api.courses().getCourseData(params.id)
        return {
            props: {
                course
            }
        }
    }
    
    return {
        props: {
            cover: "https://coursework.vschool.io/content/images/2017/08/react.png",
            title: "React Masterclass 2022"
        }
    }
}