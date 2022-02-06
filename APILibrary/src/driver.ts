import ReachAPI from "./app";

const reachClient = new ReachAPI()

reachClient.login('test@test.com', 'test').then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})