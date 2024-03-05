const express = require("express");
const router = express.Router();
const {
  createMainSubject,
  getAllMainsubject,
  getMainSubject,
  deleteMainSubject,
  updateMainSubject
} = require('../controllers/MainSubjectCtrl')
/** 
 * @swagger
 * /api/v1/mainSubject:
 *   post:
 *     tags:
 *       - MainSubject routes
 *     summary: Create a new MainSubject
 *     description: Create a new MainSubject
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MainSubject'
 *     responses:
 *       '201':
 *         description: A new MainSubject has been created 
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MainSubjectResponse' 
 */
router.post("/", createMainSubject)
/**
 * @swagger
 * /api/v1/mainSubject:
 *   get:
 *     tags:
 *       - MainSubject routes
 *     summary: Get all the MainSubject
 *     description: Get information about all fetched mainSubject
 *     responses:
 *       200:
 *         description: MainSubject fetched successfully 
 */
router.get("/", getAllMainsubject)
/** 
 * @swagger
 * /api/v1/mainSubject/{id}:
 *   get:
 *     tags:
 *       - MainSubject routes
 *     summary: Get a specific Highschool
 *     description: Get information about a specific MainSubject
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
 *                $ref: '#/components/schemas/MainSubjectResponse'
 *       '404':
 *         description: Highschool not found 
 */
router.get("/:id", getMainSubject)
/** 
 * @swagger
 * /api/v1/mainSubject/{id}:
 *   delete:
 *     tags:
 *       - MainSubject routes
 *     summary: Delete a single MainSubject
 *     description: Delete a specific MainSubject
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the MainSubject being deleted
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MainSubject'
 *     responses:
 *       '200':
 *         description: A MainSubject has been deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MainSubjectResponse'
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: No MainSubject found 
 */
router.delete("/:id", deleteMainSubject)
/** 
 * @swagger
 * /api/v1/mainSubject/{id}:
 *   put:
 *     tags:
 *       - MainSubject routes
 *     summary: Update a single MainSubject
 *     description: Update a specific MainSubject
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the MainSubject being updated
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MainSubject'
 *     responses:
 *       '200':
 *         description: A university has been updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MainSubjectResponse'
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: No MainSubject found 
 */
router.put("/:id", updateMainSubject)
module.exports = router