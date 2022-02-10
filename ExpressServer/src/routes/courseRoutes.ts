import express from "express";
import asyncHandler from "express-async-handler";
import { createCourse, getCourse, getCourses, searchCourse } from "../controllers/courseController";
import { protect } from "../middleware/authMiddleware";
const router = express.Router();
/**
 * This file defines the api routes for courses
 * @startingPoint: /api/course
 * each api route use asyncHandler to catch promise rejections
 */

router.route('/').get(asyncHandler(async (req, res, next) => {
    await getCourses(req, res)
}))
router.route('/create').post(protect, asyncHandler(async (req, res, next) => {
    await createCourse(req, res)
}))
router.route('/search').get(asyncHandler(async (req, res, next) => {
    await searchCourse(req, res)
}))
router.route('/:id').get(asyncHandler(async (req, res, next) => {
    await getCourse(req, res)
}))

export default router