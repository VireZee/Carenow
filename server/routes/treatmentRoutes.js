const express = require('express');
const router = express.Router();
const treatmentController = require('../controllers/treatmentController');
const getDataController = require('../controllers/dataController');
const getPatient = require('../controllers/patientController');

router.post('/', treatmentController);
router.get('/api', getDataController);
router.get('/api/:patientId', getPatient);

module.exports = router;