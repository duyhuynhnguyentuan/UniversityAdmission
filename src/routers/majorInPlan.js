const express = require('express');
const {
    createMajorInPlan,
    getAllMajorInPlans,
    getMajorInPlanById,
    updateMajorInPlan,
    deleteMajorInPlan
} = require("../controllers/MajorInPlanCtrl")
const router = express.Router();

/** 
 * @swagger
 * /api/v1/majorInPlan:
 *   post:
 *     tags:
 *       - MajorInPlan routes
 *     summary: Create a new MajorInPlan
 *     description: Create a new MajorInPlan
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MajorInPlan'
 *     responses:
 *       '201':
 *         description: A new MajorInPlan has been created 
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MajorInPlanResponse' 
 */
router.post('/',createMajorInPlan);
/**
 * @swagger
 * /api/v1/majorInPlan:
 *   get:
 *     tags:
 *       - MajorInPlan routes
 *     summary: Get all the MajorInPlan
 *     description: Get information about all fetched majorInPlan
 *     responses:
 *       200:
 *         description: MajorInPlan fetched successfully 
 */
router.get('/',getAllMajorInPlans);
/** 
 * @swagger
 * /api/v1/majorInPlan/{id}:
 *   get:
 *     tags:
 *       - MajorInPlan routes
 *     summary: Get a specific Highschool
 *     description: Get information about a specific MajorInPlan
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
 *                $ref: '#/components/schemas/MajorInPlanResponse'
 *       '404':
 *         description: Highschool not found 
 */
router.get('/:id',getMajorInPlanById);
/** 
 * @swagger
 * /api/v1/majorInPlan/{id}:
 *   put:
 *     tags:
 *       - MajorInPlan routes
 *     summary: Update a single MajorInPlan
 *     description: Update a specific MajorInPlan
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the MajorInPlan being updated
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MajorInPlan'
 *     responses:
 *       '200':
 *         description: A university has been updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MajorInPlanResponse'
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: No MajorInPlan found 
 */
router.put('/:id',updateMajorInPlan);
/** 
 * @swagger
 * /api/v1/majorInPlan/{id}:
 *   delete:
 *     tags:
 *       - MajorInPlan routes
 *     summary: Delete a single MajorInPlan
 *     description: Delete a specific MajorInPlan
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the MajorInPlan being deleted
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MajorInPlan'
 *     responses:
 *       '200':
 *         description: A MajorInPlan has been deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MajorInPlanResponse'
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: No MajorInPlan found 
 */
router.delete('/:id',deleteMajorInPlan);

module.exports = router;