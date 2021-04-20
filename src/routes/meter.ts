import express from 'express';
const router = express.Router();
import meterController from '../controllers/meterController';

/**
 * @swagger
 * /meter/value_square:
 *   get:
 *     tags:
 *       - meter
 *     description: Returns value meter
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: value meter in number
 *         schema:
 *           type: object
 *           properties:
 *             value_meter_square:
 *               type: number
 *               description: value for each meter square
 *               example: 40
 */

router.get('/value_square', meterController.get);

export default router;