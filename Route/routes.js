import express from 'express';
import { registerUser, loginUser } from '../Controllers/userController.js';
import { addCategory } from '../Controllers/categoryController.js';
import { verifyToken } from '../Middlewares/authMiddleware.js';
export const router = express.Router();

router.route('/register').post(registerUser);
router.route("/login").post(loginUser);
// router.route("/:id/categories", verifyToken).post(addCategory);
router.post("/:id/categories", verifyToken, addCategory);



