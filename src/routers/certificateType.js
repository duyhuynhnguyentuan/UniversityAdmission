const express = require("express");
const router = express.Router();
const {
  getAllCertificateType,
  getCertificateType,
  deleteCertificateType,
  createCertificateType,
  updateCertificateType
} = require('../controllers/CertificateTypeCtrl')
/** 
 * @swagger
 * /api/v1/certificateType:
 *   post:
 *     tags:
 *       - CertificateType routes
 *     summary: Create a new CertificateType
 *     description: Create a new CertificateType
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CertificateType'
 *     responses:
 *       '201':
 *         description: A new CertificateType has been created 
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CertificateTypeResponse' 
 */
router.post("/", createCertificateType)
/**
 * @swagger
 * /api/v1/certificateType:
 *   get:
 *     tags:
 *       - CertificateType routes
 *     summary: Get all the CertificateType
 *     description: Get information about all fetched highSchool
 *     responses:
 *       200:
 *         description: CertificateType fetched successfully 
 */
router.get("/", getAllCertificateType)
/** 
 * @swagger
 * /api/v1/certificateType/{id}:
 *   get:
 *     tags:
 *       - CertificateType routes
 *     summary: Get a specific certificateType
 *     description: Get information about a specific CertificateType
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
 *                $ref: '#/components/schemas/CertificateTypeResponse'
 *       '404':
 *         description: Highschool not found 
 */
router.get("/:id", getCertificateType)
/** 
 * @swagger
 * /api/v1/certificateType/{id}:
 *   delete:
 *     tags:
 *       - CertificateType routes
 *     summary: Delete a single CertificateType
 *     description: Delete a specific CertificateType
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the CertificateType being deleted
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CertificateType'
 *     responses:
 *       '200':
 *         description: A CertificateType has been deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CertificateTypeResponse'
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: No CertificateType found 
 */
router.delete("/:id", deleteCertificateType)
/** 
 * @swagger
 * /api/v1/certificateType/{id}:
 *   put:
 *     tags:
 *       - CertificateType routes
 *     summary: Update a single CertificateType
 *     description: Update a specific CertificateType
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the CertificateType being updated
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CertificateType'
 *     responses:
 *       '200':
 *         description: A university has been updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CertificateTypeResponse'
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: No CertificateType found 
 */
router.put("/:id", updateCertificateType)
module.exports = router