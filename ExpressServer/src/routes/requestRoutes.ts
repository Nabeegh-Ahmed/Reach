import express from "express"
import { createJoinRequest } from "../controllers/requestController"
import { protect } from "../middleware/authMiddleware"
const router = express.Router()

router.route('/create').post(protect, createJoinRequest)

export default router