const express = require("express");
const {
    createMJP,
    getaMJP,
    getAllMJP,
    updatedSMJP,
    deletedMJP,
} = require('../controllers/MajorInPlanSJGCtrl');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     MajorInPlanSJG:
 *       type: object
 *       required:
 *         - majorInPlan
 *         - subjectGroup
 *       properties:
 *         majorInPlan:
 *           type: object
 *           description: The auto-generated id of the MajorInPlanSJG
 *         subjectGroup:
 *           type: object
 *           description: The MajorInPlanSJG grade

 */
 /**
  * @swagger
  * tags:
  *   name: MajorInPlanSJG
  *   description: The MajorInPlanSJG managing API
  */

/**
 * @swagger
 * /api/v1/mjp:
 *   post:
 *     summary: Create a new MajorInPlanSJG
 *     tags: [MajorInPlanSJG]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MajorInPlanSJG'
 *     responses:
 *       200:
 *         description: The MajorInPlanSJG was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MajorInPlanSJG'
 *       500:
 *         description: Some server error
 */

router.post("/", createMJP);
/**
 * @swagger
 * /api/v1/mjp/{id}:
 *   get:
 *     summary: Get the MajorInPlanSJG by id
 *     tags: [MajorInPlanSJG]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The MajorInPlanSJG id
 *     responses:
 *       200:
 *         description: The MajorInPlanSJG description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MajorInPlanSJG'
 *       404:
 *         description: The MajorInPlanSJG was not found
 */
router.get("/:id", getaMJP);


/**
 * @swagger
 * /api/v1/mjp:
 *   get:
 *     summary: Returns the list of all the MajorInPlanSJG
 *     tags: [MajorInPlanSJG]
 *     responses:
 *       200:
 *         description: The list of the MajorInPlanSJG
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/MajorInPlanSJG'
 */
router.get("/", getAllMJP);
/**
 * @swagger
 * /api/v1/mjp/{id}:
 *  put:
 *    summary: Update the MajorInPlanSJG by the id
 *    tags: [MajorInPlanSJG]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The MajorInPlanSJG id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/MajorInPlanSJG'
 *    responses:
 *      200:
 *        description: The MajorInPlanSJG was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/MajorInPlanSJG'
 *      404:
 *        description: The MajorInPlanSJG was not found
 *      500:
 *        description: Some error happened
 */
router.put("/:id", updatedSMJP);
/**
 * @swagger
 * /api/v1/mjp/{id}:
 *   delete:
 *     summary: Remove the MajorInPlanSJG by id
 *     tags: [MajorInPlanSJG]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The MajorInPlanSJG id
 * 
 *     responses:
 *       200:
 *         description: The MajorInPlanSJG was deleted
 *       404:
 *         description: The MajorInPlanSJG was not found
 */
router.delete("/:id",deletedMJP);

module.exports = router;
