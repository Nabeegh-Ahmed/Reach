import express from "express";
const router = express.Router();
import {loginUser, registerUser} from "../controllers/userController";
import asyncHandler from 'express-async-handler';

/**
 * This file defines the api routes for courses
 * @startingPoint: /api/course
 * each api route use asyncHandler to catch promise rejections
 */

router.route("/register").post(asyncHandler(async (req, res, next) => {
    await registerUser(req, res)
}))
router.route("/login").post(asyncHandler(async (req, res, next) => {
    await loginUser(req, res)
}))

export default router