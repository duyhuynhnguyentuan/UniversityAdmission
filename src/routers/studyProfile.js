const express = require("express");
const {
  newStudyProfile,
  getaStudyProfile,
  getAllStudyProfile,
  updatedStudyProfile,
  deletedStudyProfile,
} = require('../controllers/studyProfileCtrl');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     StudyProfile:
 *       type: object
 *       required:
 *         - grade
 *         - profile
 *         - highschool
 *         - schoolyear
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         grade:
 *           type: string
 *           description: The book grade
 *         profile:
 *           type: object
 *           description: The studyProfile profile
 *         highschool:
 *          type: object
 *          description: The highschool profile
 *         schoolyear:
 *          type: object
 *          description: The schoolyear profile

 */
 /**
  * @swagger
  * tags:
  *   name: StudyProfile
  *   description: The StudyProfile managing API
  */
/**
 * @swagger
 * /api/v1/studyprofile:
 *   post:
 *     summary: Create a new studyprofile
 *     tags: [StudyProfile]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Studyprofile'
 *     responses:
 *       200:
 *         description: The Studyprofile was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Studyprofile'
 *       500:
 *         description: Some server error
 */
router.post("/", newStudyProfile);
/**
 * @swagger
 * /api/v1/studyprofile/{id}:
 *   get:
 *     summary: Get the studyprofile by id
 *     tags: [StudyProfile]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The studyprofile id
 *     responses:
 *       200:
 *         description: The studyprofile description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Studyprofile'
 *       404:
 *         description: The studyprofile was not found
 */
router.get("/:id", getaStudyProfile);
/**
 * @swagger
 * /api/v1/StudyProfile:
 *   get:
 *     summary: Returns the list of all the StudyProfile
 *     tags: [StudyProfile]
 *     responses:
 *       200:
 *         description: The list of the StudyProfile
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/StudyProfile'
 */
router.get("/", getAllStudyProfile);

/**
 * @swagger
 * /api/v1/studyprofile/{id}:
 *  put:
 *    summary: Update the book by the id
 *    tags: [StudyProfile]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The StudyProfile id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/StudyProfile'
 *    responses:
 *      200:
 *        description: The StudyProfile was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/StudyProfile'
 *      404:
 *        description: The StudyProfile was not found
 *      500:
 *        description: Some error happened
 */
router.put("/:id", updatedStudyProfile);

/**
 * @swagger
 * /api/v1/studyprofile/{id}:
 *   delete:
 *     summary: Remove the studyprofile by id
 *     tags: [StudyProfile]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The studyprofile id
 * 
 *     responses:
 *       200:
 *         description: The studyprofile was deleted
 *       404:
 *         description: The studyprofile was not found
 */

router.delete("/:id",deletedStudyProfile);

module.exports = router;
