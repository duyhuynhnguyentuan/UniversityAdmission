const express = require("express");

const {
    createSchoolYear,
    getaSchoolYear,
    getAllSchoolYear,
    updateSchoolYear,
    deleteSchoolYear,
} = require('../controllers/SchoolYearCtrl')

const router = express.Router();

/**
 * @swagger
 * /api/v1/schoolYear:
 *   get:
 *     tags:
 *       - SchoolYear routes
 *     summary: Get all the School Years
 *     description: Get information about all fetched school years
 *     responses:
 *       200:
 *         description: School Years fetched successfully 
 */
router.get("/", getAllSchoolYear);

/** 
 * @swagger
 * /api/v1/schoolYear:
 *   post:
 *     tags:
 *       - SchoolYear routes
 *     summary: Create a new School Year
 *     description: Create a new school year
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SchoolYear'
 *     responses:
 *       '201':
 *         description: A new School Year has been created 
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SchoolYearResponse' 
 */
router.post("/", createSchoolYear);

/** 
 * @swagger
 * /api/v1/schoolYear/{id}:
 *   get:
 *     tags:
 *       - SchoolYear routes
 *     summary: Get a specific School Year
 *     description: Get information about a specific school year
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the School Year
 *     responses: 
 *       '200':   
 *         description: School Year fetched successfully
 *         content:
 *           application/json:
 *             schema: 
 *                $ref: '#/components/schemas/SchoolYearResponse'
 *       '404':
 *         description: School Year not found 
 */
router.get("/:id", getaSchoolYear);

/** 
 * @swagger
 * /api/v1/schoolYear/{id}:
 *   put:
 *     tags:
 *       - SchoolYear routes
 *     summary: Update a single School Year
 *     description: Update a specific school year
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the school year being updated
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SchoolYear'
 *     responses:
 *       '200':
 *         description: A school year has been updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SchoolYearResponse'
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: No school year found 
 */
router.put("/:id", updateSchoolYear);

/** 
 * @swagger
 * /api/v1/schoolYear/{id}:
 *   delete:
 *     tags:
 *       - SchoolYear routes
 *     summary: Delete a single School Year
 *     description: Delete a specific school year
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the school year being deleted
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SchoolYear'
 *     responses:
 *       '200':
 *         description: A school year has been deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SchoolYearResponse'
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: No school year found 
 */
router.delete("/:id", deleteSchoolYear);

module.exports = router;
