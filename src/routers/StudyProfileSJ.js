const express = require("express");
const {
  createStudyProfileSJ,
  getaStudyProfileSJ,
  getAllStudyProfileSJ,
  uploadXLSX,
} = require("../controllers/StudyProfileSJCtrl");
  createStudyProfileSJ,
  getaStudyProfileSJ,
  getAllStudyProfileSJ,
  uploadXLSX,
} = require("../controllers/StudyProfileSJCtrl");
const router = express.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     StudyProfileSubject:
 *       type: object
 *       required:
 *         - studyProfile
 *         - subjects
 *       properties:
 *         studyProfile:
 *           type: object
 *           description: The auto-generated id of the book
 *         subjects:
 *           type: object
 *           description: The book grade

 */
 /**
  * @swagger
  * tags:
  *   name: StudyProfileSubject
  *   description: The StudyProfileSubject managing API
  */



const upload = require("../utils/upload");

/**
 * @swagger
 * /api/v1/stdpsj
 *   post:
 *     summary: Create a new StudyProfileSubject
 *     tags: [StudyProfileSubject]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/StudyProfileSubject'
 *     responses:
 *       200:
 *         description: The StudyProfileSubject was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/StudyProfileSubject'
 *       500:
 *         description: Some server error
 */

router.post("/", createStudyProfileSJ);

/**
 * @swagger
 * /api/v1/stdpsj/{id}:
 *   get:
 *     summary: Get the StudyProfileSubject by id
 *     tags: [StudyProfileSubject]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The StudyProfileSubject id
 *     responses:
 *       200:
 *         description: The StudyProfileSubject description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/StudyProfileSubject'
 *       404:
 *         description: The StudyProfileSubject was not found
 */

/**
 * @swagger
 * /api/v1/stdpsj/{id}:
 *   get:
 *     summary: Get the StudyProfileSubject by id
 *     tags: [StudyProfileSubject]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The StudyProfileSubject id
 *     responses:
 *       200:
 *         description: The StudyProfileSubject description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/StudyProfileSubject'
 *       404:
 *         description: The StudyProfileSubject was not found
 */
router.get("/:id", getaStudyProfileSJ);

/**
 * @swagger
 * /api/v1/stdpsj:
 *   get:
 *     summary: Returns the list of all the StudyProfileSubject
 *     tags: [StudyProfileSubject]
 *     responses:
 *       200:
 *         description: The list of the StudyProfileSubject
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/StudyProfileSubject'
 */

/**
 * @swagger
 * /api/v1/stdpsj:
 *   get:
 *     summary: Returns the list of all the StudyProfileSubject
 *     tags: [StudyProfileSubject]
 *     responses:
 *       200:
 *         description: The list of the StudyProfileSubject
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/StudyProfileSubject'
 */
router.get("/", getAllStudyProfileSJ);

/**
 * @swagger
 * /api/v1/stdpsj/upload:
 *   post:
 *     summary: Create a new StudyProfileSubject
 *     tags: [StudyProfileSubject]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/StudyProfileSubject'
 *     responses:
 *       200:
 *         description: The StudyProfileSubject was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/StudyProfileSubject'
 *       500:
 *         description: Some server error
 */

router.post("/upload", upload.single("xlsx"), uploadXLSX);

module.exports = router;
