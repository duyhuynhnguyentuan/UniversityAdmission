const express = require('express');
const {
    createMajor,
    getAllMajors,
    getMajorById,
    updateMajor,
    deleteMajor, 
    searchMajor
} = require("../controllers/Major")
const router = express.Router();

/** 
 * @swagger
 * /api/v1/major:
 *   post:
 *     tags:
 *       - Major routes
 *     summary: Create a new Major
 *     description: Create a new Major
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Major'
 *     responses:
 *       '201':
 *         description: A new Major has been created 
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MajorResponse' 
 */
router.post('/', createMajor);

router.get('/search', searchMajor);
/**
 * @swagger
 * /api/v1/major:
 *   get:
 *     tags:
 *       - Major routes
 *     summary: Get all the Major
 *     description: Get information about all fetched major
 *     responses:
 *       200:
 *         description: Major fetched successfully 
 */
router.get('/', getAllMajors);
/** 
 * @swagger
 * /api/v1/major/{id}:
 *   get:
 *     tags:
 *       - Major routes
 *     summary: Get a specific Major
 *     description: Get information about a specific Major
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the Major
 *     responses: 
 *       '200':   
 *         description: Major fetched successfully
 *         content:
 *           application/json:
 *             schema: 
 *                $ref: '#/components/schemas/MajorResponse'
 *       '404':
 *         description: Major not found 
 */

router.get('/:id', getMajorById);

/** 
 * @swagger
 * /api/v1/major/search?query={query}:
 *   get:
 *     tags:
 *       - Major routes
 *     summary: Get a specific Major
 *     description: Get information about a specific Major
 *     parameters:
 *       - in: path
 *         name: query
 *         required: true
 *         description: The query of the Major
 *     responses: 
 *       '200':   
 *         description: Major fetched successfully
 *         content:
 *           application/json:
 *             schema: 
 *                $ref: '#/components/schemas/MajorResponse'
 *       '404':
 *         description: Major not found 
 */



/** 
 * @swagger
 * /api/v1/major/{id}:
 *   put:
 *     tags:
 *       - Major routes
 *     summary: Update a single Major
 *     description: Update a specific Major
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the Major being updated
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Major'
 *     responses:
 *       '200':
 *         description: A university has been updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MajorResponse'
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: No Major found 
 */
router.put('/:id', updateMajor);
/** 
 * @swagger
 * /api/v1/major/{id}:
 *   delete:
 *     tags:
 *       - Major routes
 *     summary: Delete a single Major
 *     description: Delete a specific Major
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the Major being deleted
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Major'
 *     responses:
 *       '200':
 *         description: A Major has been deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MajorResponse'
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: No Major found 
 */
router.delete('/:id', deleteMajor);

module.exports = router;