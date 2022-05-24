import DashboardLayout from "../../layouts/dashboardLayout"
import Button from "../../components/button"
import InputBar from "../../components/inputBar"

const CourseCreatePage = () => {
    return (
        <DashboardLayout>
            <div className="text-2xl font-bold">Create a new Course</div>
            <InputBar placeholder="Course title"/>
            <InputBar placeholder="Course Description"/>
            <InputBar placeholder="Course Starting Date"/>
            <InputBar placeholder="Course Ending Date"/>
            <InputBar placeholder="Price"/>
            <Button variant="primary" className="w-full my-4">Create Course</Button>
        </DashboardLayout>
    )
}

export default CourseCreatePage