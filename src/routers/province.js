///DuyHNT

const express = require('express');

const {
    createProvince,
    getaProvince,
    getAllProvince,
    updatedProvince,
    deleteProvince,
} = require('../controllers/ProvinceCtrl')

const router = express.Router();

/**
 * @swagger
 * /api/v1/province:
 *   get:
 *     tags:
 *       - Province routes
 *     summary: Get all the Provinces
 *     description: Get information about all fetched provinces
 *     responses:
 *       200:
 *         description: Provinces fetched successfully 
 */
router.get("/", getAllProvince);

/** 
 * @swagger
 * /api/v1/province:
 *   post:
 *     tags:
 *       - Province routes
 *     summary: Create a new Province
 *     description: Create a new province
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Province'
 *     responses:
 *       '201':
 *         description: A new Province has been created 
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProvinceResponse' 
 */
router.post("/", createProvince);

/** 
 * @swagger
 * /api/v1/province/{id}:
 *   get:
 *     tags:
 *       - Province routes
 *     summary: Get a specific Province
 *     description: Get information about a specific province
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the Province
 *     responses: 
 *       '200':   
 *         description: Province fetched successfully
 *         content:
 *           application/json:
 *             schema: 
 *                $ref: '#/components/schemas/ProvinceResponse'
 *       '404':
 *         description: Province not found 
 */
router.get("/:id", getaProvince);

/** 
 * @swagger
 * /api/v1/province/{id}:
 *   put:
 *     tags:
 *       - Province routes
 *     summary: Update a single Province
 *     description: Update a specific province
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the province being updated
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Province'
 *     responses:
 *       '200':
 *         description: A province has been updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProvinceResponse'
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: No province found 
 */
router.put("/:id", updatedProvince);

/** 
 * @swagger
 * /api/v1/province/{id}:
 *   delete:
 *     tags:
 *       - Province routes
 *     summary: Delete a single Province
 *     description: Delete a specific province
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the province being deleted
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Province'
 *     responses:
 *       '200':
 *         description: A province has been deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProvinceResponse'
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: No province found 
 */
router.delete("/:id", deleteProvince);

module.exports = router;
