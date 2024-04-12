/**
 * @swagger
 * /example:
 *   get:
 *     summary: Get Example Data
 *     description: Endpoint to get example data
 *     responses:
 *       200:
 *         description: Successful operation
 */
const express = require('express');
const router = express.Router();

// GET /example
router.get('/', (req, res) => {
  res.json({ message: 'Example data' });
});

module.exports = router;
