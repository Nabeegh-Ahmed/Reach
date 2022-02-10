import express from "express"
import { approveRequest, createJoinRequest, getRequests, rejectRequest } from "../controllers/requestController"
import { protect } from "../middleware/authMiddleware"
const router = express.Router()
import asyncHandler from "express-async-handler"
/**
 * This file defines the api routes for courses
 * @startingPoint: /api/course
 * each api route use asyncHandler to catch promise rejections
 */

router.route('/create').post(protect, asyncHandler(async (req, res, next) => {
    await createJoinRequest(req, res)
}))
router.route('/approve').post(protect, asyncHandler(async (req, res, next) => {
    await approveRequest(req, res)
}))
router.route('/reject').post(protect, asyncHandler(async (req, res, next) => {
    await rejectRequest(req, res)
}))    
router.route('/').get(protect, asyncHandler(async (req, res, next) => {
    await getRequests(req, res)
}))

export default router