import express from 'express';
import { registerUser, loginUser } from '../Controllers/userController.js';
import { addCategory, getCategories, getCategory, updateCategory } from '../Controllers/categoryController.js';
import { verifyToken } from '../Middlewares/authMiddleware.js';
export const router = express.Router();

router.route('/register').post(registerUser);
router.route("/login").post(loginUser);
router.route("/:id/categories/:cat_id", verifyToken).put(updateCategory);
router.post("/:id/categories", verifyToken, addCategory);
router.get("/:id/categories", verifyToken, getCategories);
router.get("/:id/categories/:cat_id", verifyToken, getCategory);




