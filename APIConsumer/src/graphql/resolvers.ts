import fetch from 'isomorphic-unfetch'

export const resolvers = {
    Query: {
        // Courses resolver
        courses: () => {
            if (!process.env.baseURL) {
                throw new Error('Missing baseURL in .env file')
            } else 
            return fetch(`${process.env.baseURL}/course`).then(res => res.json().then(data =>  data.courses));
        },
        course: (parent: any, args: any) => {
            const {id} = args
            if (!process.env.baseURL) {
                throw new Error('Missing baseURL in .env file')
            } else 
            return fetch(`${process.env.baseURL}/course/${id}`).then(res => res.json().then(data =>  data.course));
        }
    }
}