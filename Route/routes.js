import express from 'express';
import { registerUser, loginUser } from '../Controllers/userController.js';
import { addCategory, deleteCategory, getCategories, getCategory, updateCategory } from '../Controllers/categoryController.js';
import { verifyToken } from '../Middlewares/authMiddleware.js';
import { addPost, deletePost, getPost, getPosts, updatePost } from '../Controllers/postController.js';
export const router = express.Router();
// Registration and login routes
router.route('/register').post(registerUser);
router.route("/login").post(loginUser);
// Categories routes
router.put("/:id/categories/:cat_id", verifyToken, updateCategory);
router.post("/:id/categories", verifyToken, addCategory);
router.get("/:id/categories", verifyToken, getCategories);
router.get("/:id/categories/:cat_id", verifyToken, getCategory);
router.delete("/:id/categories/:cat_id", verifyToken, deleteCategory);

// Post routes
router.put("/posts/:post_id", updatePost);
router.post("/posts", addPost);
router.get("/posts", getPosts);
router.get("/posts/:post_id", getPost);
router.delete("/posts/:post_id", deletePost);




