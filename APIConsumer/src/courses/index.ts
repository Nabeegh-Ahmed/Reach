import { Base } from "../base";

export class Courses extends Base {
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