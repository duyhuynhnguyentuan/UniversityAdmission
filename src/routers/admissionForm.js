const express = require('express');
const {
    createAdmissionForm,
    getAllAdmissionForms,
    getAdmissionFormById,
    updateAdmissionForm,
    deleteAdmissionForm
} = require('../controllers/AdmissionFormCtrl');
const router = express.Router();

/** 
 * @swagger
 * /api/v1/admissionForm:
 *   post:
 *     tags:
 *       - AdmissionForm routes
 *     summary: Create a new AdmissionForm
 *     description: Create a new AdmissionForm
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AdmissionForm'
 *     responses:
 *       '201':
 *         description: A new AdmissionForm has been created 
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AdmissionFormResponse' 
 */
router.post('/',createAdmissionForm);
/**
 * @swagger
 * /api/v1/admissionForm:
 *   get:
 *     tags:
 *       - AdmissionForm routes
 *     summary: Get all the AdmissionForm
 *     description: Get information about all fetched admissionForm
 *     responses:
 *       200:
 *         description: AdmissionForm fetched successfully 
 */
router.get('/',getAllAdmissionForms);
/** 
 * @swagger
 * /api/v1/admissionForm/{id}:
 *   put:
 *     tags:
 *       - AdmissionForm routes
 *     summary: Update a single AdmissionForm
 *     description: Update a specific AdmissionForm
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the AdmissionForm being updated
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AdmissionForm'
 *     responses:
 *       '200':
 *         description: A university has been updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AdmissionFormResponse'
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: No AdmissionForm found 
 */
router.put('/:id',updateAdmissionForm);
/** 
 * @swagger
 * /api/v1/admissionForm/{id}:
 *   delete:
 *     tags:
 *       - AdmissionForm routes
 *     summary: Delete a single AdmissionForm
 *     description: Delete a specific AdmissionForm
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the AdmissionForm being deleted
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AdmissionForm'
 *     responses:
 *       '200':
 *         description: A AdmissionForm has been deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AdmissionFormResponse'
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: No AdmissionForm found 
 */

router.delete('/:id',deleteAdmissionForm);


/** 
 * @swagger
 * /api/v1/admissionForm/{id}:
 *   get:
 *     tags:
 *       - AdmissionForm routes
 *     summary: Delete a single AdmissionForm
 *     description: Delete a specific AdmissionForm
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the AdmissionForm being deleted
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AdmissionForm'
 *     responses:
 *       '200':
 *         description: A AdmissionForm has been deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AdmissionFormResponse'
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: No AdmissionForm found 
 */
router.get('/:id', getAdmissionFormById);

module.exports = router;