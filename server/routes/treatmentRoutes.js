const express = require('express');
const router = express.Router();
const { treatmentController } = require('../controllers/treatmentController');

router.post('/submit', treatmentController);

module.exports = router;