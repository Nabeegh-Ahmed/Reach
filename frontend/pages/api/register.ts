import type { NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie'
import ReachAPI from '../../APIConsumer'
import { APIError } from '../../utils/APIError'

const handler = async(
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if(req.method === 'POST') {
    try {
      const api = new ReachAPI()
      const data = await api.users().register({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: req.body.password
      })
      console.log(data)
      if (!data.id || !data.token) {
        throw new APIError(data.message)
      }
      res.setHeader('Set-Cookie', cookie.serialize('token', data.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60*60*24*7,
        path: '/'
      }))
      res.status(200).json({id: data.id, token: data.token})
    } catch (error: any) {
      return res.status(400).json({error: error.toString()})
    }
  }

}

export default handler