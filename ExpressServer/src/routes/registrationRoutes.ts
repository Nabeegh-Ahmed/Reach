import express from "express";
import { getRegisteredCourses } from "../controllers/registrationController";
import { protect } from "../middleware/authMiddleware";
const router = express.Router();
import asyncHandler from "express-async-handler"

/**
 * This file defines the api routes for courses
 * @startingPoint: /api/course
 * each api route use asyncHandler to catch promise rejections
 */

router.route('/').get(protect, asyncHandler(async (req, res, next) => {
    await getRegisteredCourses(req, res)
}));

export default router