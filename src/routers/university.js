const express = require('express');
const router = express.Router();

const {
    createUniversity,
    getaUniversity,
    getAllUniversities,
    updateUniversity,
    deleteUniversity,
    searchUniversity
} = require('../controllers/UniversityCtrl');

/** 
 * @swagger
 * /api/v1/university/search?query={query}:
 *   get:
 *     tags:
 *       - University routes
 *     summary: Get a specific University
 *     description: Get information about a specific university
 *     parameters:
 *       - in: path
 *         name: query
 *         required: true
 *         description: The query of the University
 *     responses: 
 *       '200':   
 *         description: University fetched successfully
 *         content:
 *           application/json:
 *             schema: 
 *                $ref: '#/components/schemas/UniversityResponse'
 *       '404':
 *         description: University not found 
 */
router.get("/search", searchUniversity);

/**
 * @swagger
 * /api/v1/university:
 *   get:
 *     tags:
 *       - University routes
 *     summary: Get all the Universities
 *     description: Get information about all fetched universities
 *     responses:
 *       200:
 *         description: Universities fetched successfully 
 */
router.get("/", getAllUniversities);

/** 
 * @swagger
 * /api/v1/university:
 *   post:
 *     tags:
 *       - University routes
 *     summary: Create a new University
 *     description: Create a new university
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/University'
 *     responses:
 *       '201':
 *         description: A new University has been created 
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UniversityResponse' 
 */
router.post("/", createUniversity);

/** 
 * @swagger
 * /api/v1/university/{id}:
 *   get:
 *     tags:
 *       - University routes
 *     summary: Get a specific University
 *     description: Get information about a specific university
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the University
 *     responses: 
 *       '200':   
 *         description: University fetched successfully
 *         content:
 *           application/json:
 *             schema: 
 *                $ref: '#/components/schemas/UniversityResponse'
 *       '404':
 *         description: University not found 
 */
router.get("/:id", getaUniversity);

/** 
 * @swagger
 * /api/v1/university/{id}:
 *   put:
 *     tags:
 *       - University routes
 *     summary: Update a single University
 *     description: Update a specific university
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the university being updated
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/University'
 *     responses:
 *       '200':
 *         description: A university has been updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UniversityResponse'
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: No university found 
 */
router.put("/:id", updateUniversity);

/** 
 * @swagger
 * /api/v1/university/{id}:
 *   delete:
 *     tags:
 *       - University routes
 *     summary: Delete a single University
 *     description: Delete a specific university
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the university being deleted
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/University'
 *     responses:
 *       '200':
 *         description: A university has been deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UniversityResponse'
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: No university found 
 */
router.delete("/:id", deleteUniversity);



module.exports = router;
