import express from "express";
import asyncHandler from "express-async-handler";
import { createCourse, getCourse, searchCourse } from "../controllers/courseController";
import { protect } from "../middleware/authMiddleware";
const router = express.Router();

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