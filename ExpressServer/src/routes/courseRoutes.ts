import express from "express";
import asyncHandler from "express-async-handler";
import { createCourse, deleteCourse, getCourse, getCourses, searchCourse } from "../controllers/courseController";
import { protect } from "../middleware/authMiddleware";
import Debugger from "../middleware/debugger";
const router = express.Router();
import debug from "debug";
import { errorHandler } from "../middleware/errorHandler";
/**
 * This file defines the api routes for courses
 * @startingPoint: /api/course
 * each api route use asyncHandler to catch promise rejections
 */

/**
 * @swagger
 * components:
 *  schemas:
 *      Course:
 *          type: object
 *          required:
 *              - name
 *              - teacherId
 *              - description
 *              - genre
 *              - price
 *              - rating
 *              - totalMarks
 *              - startingDate
 *              - endingDate
 *              - cover
 *          properties:
 *              id:
 *                  type: string
 *                  description: auto-generated id of the course
 *              name:
 *                  type: string
 *              teacherId:
 *                  type: string
 *              description:
 *                  type: string
 *              genre:
 *                  type: string
 *              price:
 *                  type: number
 *              startingDate:
 *                  type: string
 *              endingDate:
 *                  type: string
 *              cover:
 *                  type: string
 *                  description: The cover image for the course
 */

/**
 * @swagger
 * components:
 *   securitySchemes:
 *      jwt:
 *          type: http
 *          scheme: bearer
 *          bearerFormat: JWT
 *          in: header
 */

/**
 * @swagger
 * tags:
 *  name: Courses
 *  description: Course management API
 */

/**
 * @swagger
 * /api/course:
 *  get:
 *      summary: Returns the list of all the courses.
 *      tags: [Courses]
 *      responses:
 *          200:
 *              description: List of the courses
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Course'
 */
router.route('/').get(asyncHandler(async (req, res, next) => {
    await getCourses(req, res, next)
}), errorHandler)

/**
 * @swagger
 * /api/course/create:
 *   post:
 *     summary: Create a new course
 *     tags: [Courses]
 *     security:
 *	     - jwt: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Course'
 *     responses:
 *       201:
 *         description: The course was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'
 *       401:
 *          description: Unauthorized
 *       500:
 *         description: Some server error
 */
router.route('/create').post(protect, asyncHandler(async (req, res, next) => {
    debug('express')(req.method + ' ' + req.url)
    await createCourse(req, res, next)
}), errorHandler)

/**
 * @swagger
 * /api/course:
 *  get:
 *      summary: Returns the list of all the courses containing the search query
 *      tags: [Courses]
 *      responses:
 *          200:
 *              description: List of the courses
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Course'
 */
router.route('/search').get(asyncHandler(async (req, res, next) => {
    await searchCourse(req, res, next)
}), errorHandler)

/**
 * @swagger
 * /api/course/{id}:
 *  get:
 *      summary: Get a course by id
 *      tags: [Courses]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type:
 *                  string
 *            required: true
 *            description: The course id
 *      responses:
 *          200:
 *              description: The course description by id
 *              contens:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Course'
 *          400:
 *              description: The id was not correct 
 *          404:
 *              description: The course was not found
 */
router.route('/:id').get(asyncHandler(async (req, res, next) => {
    await getCourse(req, res, next)
}), errorHandler)

router.route('/delete/:id').post(protect, asyncHandler(async(req, res, next) => {
    await deleteCourse(req, res, next)
}), errorHandler)

export default router