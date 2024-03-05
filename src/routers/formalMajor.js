const express = require('express');
const {
    createFormalMajor,
    getAllFormalMajors,
    getFormalMajorById,
    updateFormalMajor,
    deleteFormalMajor
} = require("../controllers/FormalMajor")
const router = express.Router();

/** 
 * @swagger
 * /api/v1/formalMajor:
 *   post:
 *     tags:
 *       - FormalMajor routes
 *     summary: Create a new FormalMajor
 *     description: Create a new FormalMajor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FormalMajor'
 *     responses:
 *       '201':
 *         description: A new FormalMajor has been created 
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FormalMajorResponse' 
 */
router.post('/', createFormalMajor);
/**
 * @swagger
 * /api/v1/formalMajor:
 *   get:
 *     tags:
 *       - FormalMajor routes
 *     summary: Get all the FormalMajor
 *     description: Get information about all fetched formalMajor
 *     responses:
 *       200:
 *         description: FormalMajor fetched successfully 
 */
router.get('/', getAllFormalMajors);
/** 
 * @swagger
 * /api/v1/formalMajor/{id}:
 *   get:
 *     tags:
 *       - FormalMajor routes
 *     summary: Get a specific Highschool
 *     description: Get information about a specific FormalMajor
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
 *                $ref: '#/components/schemas/FormalMajorResponse'
 *       '404':
 *         description: Highschool not found 
 */
router.get('/:id', getFormalMajorById);
/** 
 * @swagger
 * /api/v1/formalMajor/{id}:
 *   put:
 *     tags:
 *       - FormalMajor routes
 *     summary: Update a single FormalMajor
 *     description: Update a specific FormalMajor
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the FormalMajor being updated
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FormalMajor'
 *     responses:
 *       '200':
 *         description: A university has been updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FormalMajorResponse'
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: No FormalMajor found 
 */
router.put('/:id', updateFormalMajor);
/** 
 * @swagger
 * /api/v1/formalMajor/{id}:
 *   delete:
 *     tags:
 *       - FormalMajor routes
 *     summary: Delete a single FormalMajor
 *     description: Delete a specific FormalMajor
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the FormalMajor being deleted
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FormalMajor'
 *     responses:
 *       '200':
 *         description: A FormalMajor has been deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FormalMajorResponse'
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: No FormalMajor found 
 */
router.delete('/:id', deleteFormalMajor);


module.exports = router;