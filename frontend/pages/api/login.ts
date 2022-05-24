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
      const {id, token} = await api.users().login({
        email: req.body.email,
        password: req.body.password
      })
      if (!id || !token) {
        throw new APIError("Invalid credentials")
      }
      res.setHeader('Set-Cookie', cookie.serialize('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60*60*24*7,
        path: '/'
      }))
      res.status(200).json({id, token})
    } catch (error: any) {
      return res.status(400).json({error: error.toString()})
    }
  }
}

export default handler