import 'jest'
import ReachAPI from "../src/app";

const reachClient = new ReachAPI()

// Defines the test suite for User class and corresponding API End points

describe('User integration tests', () => {
    it('should create a user and return id and jwt', async () => {
        try {
            const user = await reachClient.register(
                'firstName',
                'lastName',
                'test@tasdsest.com', 
                'test11223344'
            )
            console.log(user)
            expect(user.id).toBeDefined()
            expect(user.token).toBeDefined()
        } catch(err) {
            console.log(err)
        }
    })
    it('should return error for duplicate email', async () => {
        try {
            await reachClient.register(
                'firstName',
                'lastName',
                'test@test.com', 
                'test11223344'
            )
        } catch (err: any) {
            expect(err.message).toBe('Bad Request')
        }    
    })    
    it('should login and get JWT', async () => {
        try {
            const user = await reachClient.login(
                'test@tasdsest.com', 
                'test11223344'
            )
            expect(user.id).toBeDefined()
            expect(user.token).toBeDefined()
        } catch(err) {
            console.log(err)
        }
    })
    it('should return error for wrong password', async () => {
        try {
            await reachClient.login(
                'test@test.com', 
                'test11223344'
            )
        } catch (err: any) {
            expect(err.message).toBe('Unauthorized')
        }    
    })   
})