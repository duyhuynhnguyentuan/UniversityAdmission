///DuyHNT 
const {
    createAdmissionPlan,
    getaAdmissionPlan,
    getAllAdmissionPlan,
    updatedAdmissionPlan,
    deletedAdmissionPlan,
    getAdmissionPlanForUni,
} = require('../controllers/AdmissionPlanCtrl');
const AdmissionPlan = require("../models/admissionPlan");

const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /api/v1/admissionPlan:
 *   get:
 *     tags:
 *       - AdmissionPlan routes
 *     summary: Get all the Admission Plans
 *     description: Get information about all fetched admission plans
 *     responses:
 *       200:
 *         description: Admission Plans fetched successfully 
 */
router.get("/", getAllAdmissionPlan);

/** 
 * @swagger
 * /api/v1/admissionPlan:
 *   post:
 *     tags:
 *       - AdmissionPlan routes
 *     summary: Create a new Admission Plan
 *     description: Create a new admission plan
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AdmissionPlan'
 *     responses:
 *       '201':
 *         description: A new Admission Plan has been created 
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AdmissionPlanResponse' 
 */
router.post("/", createAdmissionPlan);

/** 
 * @swagger
 * /api/v1/admissionPlan/{id}:
 *   get:
 *     tags:
 *       - AdmissionPlan routes
 *     summary: Get a specific Admission Plan
 *     description: Get information about a specific admission plan
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the Admission Plan
 *     responses: 
 *       '200':   
 *         description: Admission Plan fetched successfully
 *         content:
 *           application/json:
 *             schema: 
 *                $ref: '#/components/schemas/AdmissionPlanResponse'
 *       '404':
 *         description: Admission Plan not found 
 */
router.get("/:id", getaAdmissionPlan);

/** 
 * @swagger
 * /api/v1/admissionPlan/{id}:
 *   put:
 *     tags:
 *       - AdmissionPlan routes
 *     summary: Update a single Admission Plan
 *     description: Update a specific admission plan
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the admission plan being updated
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AdmissionPlan'
 *     responses:
 *       '200':
 *         description: An admission plan has been updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AdmissionPlanResponse'
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: No admission plan found 
 */
router.put("/:id", updatedAdmissionPlan);

/** 
 * @swagger
 * /api/v1/admissionPlan/{id}:
 *   delete:
 *     tags:
 *       - AdmissionPlan routes
 *     summary: Delete a single Admission Plan
 *     description: Delete a specific admission plan
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The id of the admission plan being deleted
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AdmissionPlan'
 *     responses:
 *       '200':
 *         description: An admission plan has been deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AdmissionPlanResponse'
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: No admission plan found 
 */
router.delete("/:id", deletedAdmissionPlan);
// admissionPlanRouter.js



router.get('/all/all', async (req, res) => {
  try {
    const admissionPlans = await AdmissionPlan.find({})
      .populate({
        path: 'schoolYear',
        select: 'year -_id' // Select only _id and planDescription fields
      })
      .select('_id planDescription'); // Select only _id and planDescription fields from AdmissionPlan

    res.json(admissionPlans);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;



