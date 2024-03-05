const express = require("express");
const router = express.Router();
const {
  getAllCertificate,
  getCertificate,
  deleteCertificate,
  createCertificate,
  updateCertificate
} = require('../controllers/CertificateCtrl')
/** 
 * @swagger
 * /api/v1/certificate:
 *   post:
 *     tags:
 *       - Certificate routes
 *     summary: Create a new Certificate
 *     description: Create a new Certificate
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Certificate'
 *     responses:
 *       '201':
 *         description: A new Certificate has been created 
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CertificateResponse' 
 */
router.post("/", createCertificate)
/**
 * @swagger
 * /api/v1/certificate:
 *   get:
 *     tags:
 *       - Certificate routes
 *     summary: Get all the Certificate
 *     description: Get information about all fetched highSchool
 *     responses:
 *       200:
 *         description: Certificate fetched successfully 
 */
router.get("/", getAllCertificate)
/** 
 * @swagger
 * /api/v1/certificate/{id}:
 *   get:
 *     tags:
 *       - Certificate routes
 *     summary: Get a specific certificate
 *     description: Get information about a specific Certificate
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
 *                $ref: '#/components/schemas/CertificateResponse'
 *       '404':
 *         description: Highschool not found 
 */
router.get("/:id", getCertificate)
/** 
 * @swagger
 * /api/v1/certificate/{id}:
 *   delete:
 *     tags:
 *       - Certificate routes
 *     summary: Delete a single Certificate
 *     description: Delete a specific Certificate
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the Certificate being deleted
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Certificate'
 *     responses:
 *       '200':
 *         description: A Certificate has been deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CertificateResponse'
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: No Certificate found 
 */
router.delete("/:id", deleteCertificate)
/** 
 * @swagger
 * /api/v1/certificate/{id}:
 *   put:
 *     tags:
 *       - Certificate routes
 *     summary: Update a single Certificate
 *     description: Update a specific Certificate
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the Certificate being updated
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Certificate'
 *     responses:
 *       '200':
 *         description: A university has been updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CertificateResponse'
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: No Certificate found 
 */
router.put("/:id", updateCertificate)
module.exports = router