import { Base } from "../base";

export class Courses extends Base {
    /**
     * 
     * @param name String (name of the course)
     * @param description String (description of the course)
     * @param genre String (genre of the course)
     * @param price Float (price of the course)
     * @param startingDate Date (starting date of the course)
     * @param endingDate Date (ending date of the course)
     * @param cover String (cover image url)
     * @returns 
     */
    createCourse(
        name: string,
        description: string,
        genre: string,
        price: number,
        startingDate: Date,
        endingDate: Date,
        cover: string
    ) {
        return this.request<{id: string, token: string}>('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({
                name,
                description,
                genre,
                price,
                startingDate,
                endingDate,
                cover
            })
        })
    }
}