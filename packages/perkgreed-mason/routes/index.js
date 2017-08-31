const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    current_version: process.env.npm_package_version,
  });
});

router.use('/weapons', require('./weapons'));

module.exports = router;