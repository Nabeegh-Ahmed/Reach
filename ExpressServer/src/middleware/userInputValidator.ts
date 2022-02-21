import { NextFunction, Request, Response } from "express";

export const userInputValidator = async (req: Request, res: Response, next: NextFunction) => {
    // Checking for email validation using regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const validEmail = emailRegex.test(req.body.email)
    if(!validEmail) return res.status(400).json({message: "Invalid Email"})

    const passwordRegex = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')
    const validPassword = passwordRegex.test(req.body.password)
    if(!validPassword) return res.status(400).json({ message: "Password is not strong enough." })

    next()
}