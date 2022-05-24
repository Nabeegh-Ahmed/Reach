import 'jest'
import Users from './'

describe('Users tests', () => {
    const users = new Users()
    it('should login and get data', async() => {
        const { id, token } = await users.login({
            email: 'string1@str.com',
            password: 'string123@N'
        })
        expect(id).toBeDefined()
        expect(id).toBe(48)
        expect(token).toBeDefined()
    })
    it('should register a new user', async() => {
        const { id, token } = await users.register({
            email: `test${Math.random()}@test.com`,
            password: `1231232131241ssda@N`,
            firstName: 'testf',
            lastName: 'testl'
        })
        expect(id).toBeDefined()
        expect(token).toBeDefined()
    })
})