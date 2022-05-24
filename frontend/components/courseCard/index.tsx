import Button from "../button"
import { CourseCardProps } from "./types"
import {AiFillStar} from 'react-icons/ai'
import Link from 'next/link'

const CourseCard: React.FC<CourseCardProps> = ({ id, title, cover, description, price, rating }) => {
    return (
      <Link href={`/courses/view/${id}`}>
        <div className="course-card p-5 m-1 border-2 rounded-xl shadow-md hover:shadow-xl animation transition-all ease-linear duration-200">
          <img src={cover} className="mb-4"/>
          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <h1 className="text-2xl font-bold mb-2">{title}</h1>
            </div>
            <div className="text-center font-bold flex justify-center text-yellow-400 text-xl">
              <AiFillStar className="mt-1 mx-1"/> {rating}
            </div>
          </div>
          
          <p className="mb-4">{description}</p>
          <Button variant="primary" className="w-full">${price}</Button>
        </div>
      </Link>
    )
}

CourseCard.defaultProps = {
    title: "Sample Title",
    cover: "sampleImage",
    price: NaN,
    rating: 0,
    description: "Default course description"
}

export default CourseCard