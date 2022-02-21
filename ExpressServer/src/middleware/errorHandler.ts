import { Request, Response } from "express";

export const errorHandler = async(req: Request, res: Response) => {
    return res.status(res.locals.status).send(res.locals.error)
}