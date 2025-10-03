const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

router.get('/search', (req, res) => {
    const query = req.query.q;
    res.status(200).json({ query: query, results: [] });
});

module.exports = router;
