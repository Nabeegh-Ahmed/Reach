import express from "express";
const router = express.Router();
import {loginUser, registerUser} from "../controllers/userController";
import asyncHandler from 'express-async-handler';
import { userInputValidator } from "../middleware/userInputValidator";
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
 *      User:
 *          type: object
 *          required:
 *              - firstName
 *              - lastName
 *              - email
 *              - password
 *          properties:
 *              id:
 *                  type: string
 *                  description: auto-generated id of the course
 *              firstName:
 *                  type: string
 *              lastName:
 *                  type: string
 *              email:
 *                  type: string
 *              password:
 *                  type: string
 *      LoginUser:
 *          type: object
 *          description: The schema for User Login
 *          required:
 *              - email
 *              - password
 *          properties:
 *              email: 
 *                  type: string
 *              password:
 *                  type: string
 *      LoggedInUser:
 *          type: object
 *          required:
 *              - id
 *              - token
 *          properties:
 *              id:
 *                  type: string
 *              token:
 *                  type: string
 */

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: User management API
 */

/**
 * @swagger
 * /api/user/register:
 *  post:
 *      summary: Registers a user
 *      tags: [Users]
 *      requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *      responses:
 *          200:
 *              description: User ID and JWT
 *              content:
 *                  application/json:
 *                      schema:
 *                              $ref: '#/components/schemas/LoggedInUser'
 */

router.route("/register").post(userInputValidator, asyncHandler(async (req, res, next) => {
    await registerUser(req, res, next)
}), errorHandler)

/**
 * @swagger
 * /api/user/login:
 *  post:
 *      summary: Login a user
 *      tags: [Users]
 *      requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginUser'
 *      responses:
 *          200:
 *              description: User ID and JWT
 *              content:
 *                  application/json:
 *                      schema:
 *                              $ref: '#/components/schemas/LoggedInUser'
 *          400:
 *              description: Email or password not in valid format
 *          401:
 *              description: Invalid Credentials
 */
router.route("/login").post(userInputValidator, asyncHandler(async (req, res, next) => {
    await loginUser(req, res, next)
}), errorHandler)

export default router