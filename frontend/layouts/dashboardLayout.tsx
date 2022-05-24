import { GetServerSideProps } from "next"
import Button from "../components/button"
import MainLayout from "./mainLayout"
import Link from 'next/link'

interface DashboardLayoutProps {
    children: React.ReactNode
    endPoints?: {url: string, name: string}[]
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, endPoints }) => {
    return (
        <MainLayout>
            <div className="grid grid-cols-12 gap-3">
                <div className="col-span-8">
                    {children}
                </div>
                <div className="col-span-4 flex flex-col gap-2 mt-4">
                    {
                        endPoints?.map(endPoint => {
                            return (
                                <Link href={endPoint.url} passHref key={endPoint.url}>
                                    <Button variant="primary" fullWidth>{endPoint.name}</Button>
                                </Link>
                            )
                        })
                    }
                    
                </div>
            </div>
        </MainLayout>
    )
}

export default DashboardLayout

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: {
            endPoints: [
                {url: "/courses/create", name: "Create Course"},
                {url: "/courses/view", name: "View Courses"},
            ]
        }
    }
}

DashboardLayout.defaultProps = {
    endPoints: [
        {url: "/courses/create", name: "Create Course"},
        {url: "/courses/view", name: "View Courses"},
    ]
}