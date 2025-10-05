import { Router } from 'express';
import { createUser, getUsers } from '../controller/users.controller';

const userRouter = Router();

/**
  * @swagger
  * tags:
  *   name: Users 
  *   description: User management
  */

/**
 * @swagger
 * components:
 *   schemas:
 *     UserModel:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The user ID
 *         name:
 *           type: string
 *           description: The user's name
 *         email:
 *           type: string
 *           description: The user's email
 *         password:
 *           type: string
 *           description: The user's password
 *       required:
 *         - id
 *         - name
 *         - email
 *         - password
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/UserModel'
 */
userRouter.get('/', getUsers);

userRouter.post('/', createUser);

export default userRouter;