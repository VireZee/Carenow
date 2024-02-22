const express = require('express');
const router = express.Router();
const { treatmentController } = require('../controllers/treatmentController');

router.post('/', treatmentController);

module.exports = router;