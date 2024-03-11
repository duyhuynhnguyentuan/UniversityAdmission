const express = require("express");
const {
  createSubjectG,
  getaSubjectG,
  getAllSubjectG,
  updatedSubjectG,
  deletedCSubjectG,
} = require('../controllers/SubjectGCtrl');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     SubjectGroup:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - majorInPlan
 *         - subjects
 *       properties:
 *         name:
 *           type: string
 *         description:
 *           type: string
 *         majorInPlan:
 *           type: object
 *         subjects:
 *           type: object
 */

/**
 * @swagger
 * tags:
 *   name: SubjectGroup
 *   description: The SubjectGroup managing API
 */

/**
 * @swagger
 * /api/v1/subjectg:
 *   post:
 *     summary: Create a new SubjectGroup
 *     tags: [SubjectGroup]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SubjectGroup'
 *     responses:
 *       200:
 *         description: The SubjectGroup was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SubjectGroup'
 *       500:
 *         description: Some server error
 */

router.post("/", createSubjectG);

/**
 * @swagger
 * /api/v1/subjectg/{id}:
 *   get:
 *     summary: Get the SubjectGroup by id
 *     tags: [SubjectGroup]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The SubjectGroup id
 *     responses:
 *       200:
 *         description: The SubjectGroup description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SubjectGroup'
 *       404:
 *         description: The SubjectGroup was not found
 */

router.get("/:id", getaSubjectG);

/**
 * @swagger
 * /api/v1/subjectg:
 *   get:
 *     summary: Returns the list of all the SubjectGroup
 *     tags: [SubjectGroup]
 *     responses:
 *       200:
 *         description: The list of the SubjectGroup
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SubjectGroup'
 */

router.get("/", getAllSubjectG);

/**
 * @swagger
 * /api/v1/subjectg/{id}:
 *   put:
 *     summary: Update the SubjectGroup by the id
 *     tags: [SubjectGroup]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The SubjectGroup id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SubjectGroup'
 *     responses:
 *       200:
 *         description: The SubjectGroup was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SubjectGroup'
 *       404:
 *         description: The SubjectGroup was not found
 *       500:
 *         description: Some error happened
 */

router.put("/:id", updatedSubjectG);

/**
 * @swagger
 * /api/v1/subjectg/{id}:
 *   delete:
 *     summary: Remove the SubjectGroup by id
 *     tags: [SubjectGroup]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The SubjectGroup id
 *     responses:
 *       200:
 *         description: The SubjectGroup was deleted
 *       404:
 *         description: The SubjectGroup was not found
 */

router.delete("/:id", deletedCSubjectG);

module.exports = router;
