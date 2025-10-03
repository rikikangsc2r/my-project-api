const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /health:
 *   get:
 *     description: Health check endpoint
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

module.exports = router;
