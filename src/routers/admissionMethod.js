const express = require('express');
const {
    createAdmissionMethod,
    getAllAdmissionMethods,
    getAdmissionMethodById,
    updateAdmissionMethod,
    deleteAdmissionMethod
} = require("../controllers/AdmissionMethodCtrl");
const router = express.Router();

/** 
 * @swagger
 * /api/v1/admissionMethod:
 *   post:
 *     tags:
 *       - AdmissionMethod routes
 *     summary: Create a new AdmissionMethod
 *     description: Create a new AdmissionMethod
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AdmissionMethod'
 *     responses:
 *       '201':
 *         description: A new AdmissionMethod has been created 
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AdmissionMethodResponse' 
 */
router.post('/', createAdmissionMethod);
/**
 * @swagger
 * /api/v1/admissionMethod:
 *   get:
 *     tags:
 *       - AdmissionMethod routes
 *     summary: Get all the AdmissionMethod
 *     description: Get information about all fetched admissionMethod
 *     responses:
 *       200:
 *         description: AdmissionMethod fetched successfully 
 */
router.get('/',getAllAdmissionMethods);
/** 
 * @swagger
 * /api/v1/admissionMethod/{id}:
 *   put:
 *     tags:
 *       - AdmissionMethod routes
 *     summary: Update a single AdmissionMethod
 *     description: Update a specific AdmissionMethod
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the AdmissionMethod being updated
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AdmissionMethod'
 *     responses:
 *       '200':
 *         description: A university has been updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AdmissionMethodResponse'
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: No AdmissionMethod found 
 */
router.put('/:id',updateAdmissionMethod);
/** 
 * @swagger
 * /api/v1/admissionMethod/{id}:
 *   delete:
 *     tags:
 *       - AdmissionMethod routes
 *     summary: Delete a single AdmissionMethod
 *     description: Delete a specific AdmissionMethod
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the AdmissionMethod being deleted
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AdmissionMethod'
 *     responses:
 *       '200':
 *         description: A AdmissionMethod has been deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AdmissionMethodResponse'
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: No AdmissionMethod found 
 */
router.delete('/:id',deleteAdmissionMethod);

module.exports = router;