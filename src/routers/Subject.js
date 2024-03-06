const express = require("express");
const {
    createSubject,
    getaSubject,
    getAllSubject,
    updatedSubject,
    deletedCSubject,
} = require('../controllers/SubjectCtrl');
const router = express.Router();

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

router.post("/", createSubject);
/**
 * @swagger
 * /api/v1/subject/{id}:
 *   get:
 *     summary: Get the Subject by id
 *     tags: [Subject]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Subject id
 *     responses:
 *       200:
 *         description: The Subject description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subjects'
 *       404:
 *         description: The Subject was not found
 */
router.get("/:id", getaSubject);
/**
 * @swagger
 * /api/v1/subject:
 *   get:
 *     summary: Returns the list of all the Subject
 *     tags: [Subject]
 *     responses:
 *       200:
 *         description: The list of the Subject
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Subjects'
 */
router.get("/", getAllSubject);
/**
 * @swagger
 * /api/v1/subject/{id}:
 *  put:
 *    summary: Update the Subject by the id
 *    tags: [Subject]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Subject id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Subjects'
 *    responses:
 *      200:
 *        description: The Subjects was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Subjects'
 *      404:
 *        description: The Subjects was not found
 *      500:
 *        description: Some error happened
 */
router.put("/:id", updatedSubject);
/**
 * @swagger
 * /api/v1/subject/{id}:
 *   delete:
 *     summary: Remove the Subjects by id
 *     tags: [Subject]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Subject id
 * 
 *     responses:
 *       200:
 *         description: The Subject was deleted
 *       404:
 *         description: The Subject was not found
 */
router.delete("/:id",deletedCSubject);

module.exports = router;
