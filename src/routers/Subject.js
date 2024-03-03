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
 *     Subjects:
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
 *           description: The Subjects profile
 *         

 */
 /**
  * @swagger
  * tags:
  *   name: Subjects
  *   description: The Subjects managing API
  */
/**
 * @swagger
 * /api/v1/subject:
 *   post:
 *     summary: Create a new Subjects
 *     tags: [Subjects]
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
 *     summary: Get the SubjectsSubject by id
 *     tags: [SubjectsSubject]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The SubjectsSubject id
 *     responses:
 *       200:
 *         description: The SubjectsSubject description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SubjectsSubject'
 *       404:
 *         description: The SubjectsSubject was not found
 */
router.get("/:id", getaSubject);
/**
 * @swagger
 * /api/v1/subject:
 *   get:
 *     summary: Returns the list of all the SubjectsSubject
 *     tags: [SubjectsSubject]
 *     responses:
 *       200:
 *         description: The list of the SubjectsSubject
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SubjectsSubject'
 */
router.get("/", getAllSubject);
/**
 * @swagger
 * /api/v1/subject/{id}:
 *  put:
 *    summary: Update the Subjects by the id
 *    tags: [Subjects]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Subjects id
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
 *     tags: [Subjects]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Subjects id
 * 
 *     responses:
 *       200:
 *         description: The Subjects was deleted
 *       404:
 *         description: The Subjects was not found
 */
router.delete("/:id",deletedCSubject);

module.exports = router;
