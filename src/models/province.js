const mongoose = require('mongoose')
/**
 * @swagger
 * components:
 *   schemas:
 *     Province:
 *       type: object 
 *       required: 
 *         - name
 *         - areaCode
 *       properties:
 *         name: 
 *           type: string
 *           description: The name of the province.
 *         areaCode: 
 *           type: string
 *           description: The area code of the province.
 *         university: 
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/university'
 *           description: Array of University objects associated with the province.
 *     ProvinceResponse: 
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The unique identifier for the province.
 *         name: 
 *           type: string
 *           description: The name of the province.
 *         areaCode: 
 *           type: string
 *           description: The area code of the province.
 *         university: 
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/university'
 *           description: Array of University objects associated with the province.
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the province was created.
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the province was last updated.
 */
const provinceSchema = new mongoose.Schema(
  { 
    name: {
      type: String,
      require: true
    },
    areaCode: {
      type: String,
      require: true
    },
    university: [{ type: mongoose.Schema.Types.ObjectId, ref: "University" }],
  },
  {
    timestamps: true
  }
)

 const Province = mongoose.model('Province', provinceSchema);
 module.exports = Province