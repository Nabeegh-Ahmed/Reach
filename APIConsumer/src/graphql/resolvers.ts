import fetch from 'isomorphic-unfetch'

const baseURL = 'http://localhost:5000/api';
export const resolvers = {
    Query: {
        courses: () => {
            return fetch(`${baseURL}/course`).then(res => res.json().then(data =>  data.courses));
        },
        course: (parent: any, args: any) => {
            const {id} = args
            return fetch(`${baseURL}/course/${id}`).then(res => res.json().then(data =>  data.course));
        }
    }
}