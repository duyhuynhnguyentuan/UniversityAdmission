const express = require("express");
const router = express.Router();
const {
  createHighSchool,
  getAllHighSchool,
  getHighSchool,
  deleteHighSchool,
  updateHighSchool
} = require('../controllers/HighSchoolCtrl')


/** 
 * @swagger
 * /api/v1/highschool:
 *   post:
 *     tags:
 *       - HighSchool routes
 *     summary: Create a new HighSchool
 *     description: Create a new HighSchool
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/HighSchool'
 *     responses:
 *       '201':
 *         description: A new HighSchool has been created 
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HighSchoolResponse' 
 */
router.post("/", createHighSchool)

/**
 * @swagger
 * /api/v1/highschool:
 *   get:
 *     tags:
 *       - HighSchool routes
 *     summary: Get all the HighSchool
 *     description: Get information about all fetched highSchool
 *     responses:
 *       200:
 *         description: HighSchool fetched successfully 
 */
router.get("/", getAllHighSchool)
/** 
 * @swagger
 * /api/v1/highschool/{id}:
 *   get:
 *     tags:
 *       - HighSchool routes
 *     summary: Get a specific Highschool
 *     description: Get information about a specific highschool
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the University
 *     responses: 
 *       '200':   
 *         description: Highschool fetched successfully
 *         content:
 *           application/json:
 *             schema: 
 *                $ref: '#/components/schemas/HighSchoolResponse'
 *       '404':
 *         description: Highschool not found 
 */
router.get("/:id", getHighSchool)

/** 
 * @swagger
 * /api/v1/highschool/{id}:
 *   delete:
 *     tags:
 *       - HighSchool routes
 *     summary: Delete a single HighSchool
 *     description: Delete a specific HighSchool
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the HighSchool being deleted
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/HighSchool'
 *     responses:
 *       '200':
 *         description: A HighSchool has been deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HighSchoolResponse'
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: No HighSchool found 
 */
router.delete("/:id", deleteHighSchool)

/** 
 * @swagger
 * /api/v1/highschool/{id}:
 *   put:
 *     tags:
 *       - HighSchool routes
 *     summary: Update a single HighSchool
 *     description: Update a specific HighSchool
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the HighSchool being updated
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/HighSchool'
 *     responses:
 *       '200':
 *         description: A university has been updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HighSchoolResponse'
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: No HighSchool found 
 */
router.put("/:id", updateHighSchool)
module.exports = router