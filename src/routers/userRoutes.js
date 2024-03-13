const express = require("express");
const router = express.Router();
const {authMiddleware, isAdmin} = require("../middlewares/authMiddleware")
const {
    createUser,
    loginUserCtrl,
    handleRefreshToken,
    logout,
    getUser,
} = require("../controllers/UserCtrl");

/**
 * @swagger
 * components:
 *   schemas:
 *     Subject:
 *       type: object
 *       required:
 *         - name
 *         - score
 *         - description
 *       properties:
 *         name:
 *           type: string
 *           description: The auto-generated id of the book
 *         score:
 *           type: number
 *           description: The book grade
 *         description:
 *           type: string
 *           description: The Subject profile
 *         

 */
 /**
  * @swagger
  * tags:
  *   name: Subject
  *   description: The Subjects managing API
  */
/**
 * @swagger
 * /api/v1/subject:
 *   post:
 *     summary: Create a new Subjects
 *     tags: [Subject]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Subjects'
 *     responses:
 *       200:
 *         description: The Subjects was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subjects'
 *       500:
 *         description: Some server error
 */



router.post("/register",createUser);
router.post("/login", loginUserCtrl);
router.get("/refresh",handleRefreshToken);
router.get("/logout", logout);
router.get("/user/:id", getUser);

module.exports = router