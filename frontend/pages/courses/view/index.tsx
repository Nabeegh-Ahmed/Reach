import DashboardLayout from "../../../layouts/dashboardLayout"
import CourseCard from "../../../components/courseCard"
import { GetServerSideProps } from "next"

interface Course {} // this course will come from API Consumer

interface ViewCoursesProps {
    courses: Course[]
}

const ViewCourses: React.FC<ViewCoursesProps> = ({ courses }) => {
    return (
        <DashboardLayout>
            <div className="text-2xl font-bold">View Courses</div>
            
            <div className='grid grid-cols-3 space-x-3'>
                <CourseCard id={1} title='React Masterclass' cover='https://coursework.vschool.io/content/images/2017/08/react.png' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias expedita ut reprehenderit blanditiis rem maxime quisquam magni dolore vel aliquam ullam porro ducimus, consectetur veniam doloribus harum culpa officia nesciunt.' price={104} rating={5} />  
                <CourseCard id={1} title='Next JS Masterclass' cover='https://coursework.vschool.io/content/images/2017/08/react.png' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias expedita ut reprehenderit blanditiis rem maxime quisquam magni dolore vel aliquam ullam porro ducimus, consectetur veniam doloribus harum culpa officia nesciunt.' price={44} rating={5} />  
                <CourseCard id={1} title='Golang Masterclass' cover='https://coursework.vschool.io/content/images/2017/08/react.png' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias expedita ut reprehenderit blanditiis rem maxime quisquam magni dolore vel aliquam ullam porro ducimus, consectetur veniam doloribus harum culpa officia nesciunt.' price={98} rating={5} />  
            </div>
            <div className='grid grid-cols-3 mt-2 space-x-3'>
                <CourseCard id={1} title='React Masterclass' cover='https://coursework.vschool.io/content/images/2017/08/react.png' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias expedita ut reprehenderit blanditiis rem maxime quisquam magni dolore vel aliquam ullam porro ducimus, consectetur veniam doloribus harum culpa officia nesciunt.' price={104} rating={5} />  
                <CourseCard id={1} title='Next JS Masterclass' cover='https://coursework.vschool.io/content/images/2017/08/react.png' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias expedita ut reprehenderit blanditiis rem maxime quisquam magni dolore vel aliquam ullam porro ducimus, consectetur veniam doloribus harum culpa officia nesciunt.' price={44} rating={5} /> 
            </div>
        </DashboardLayout>
    )
}

export default ViewCourses

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: {

        }
    }
}