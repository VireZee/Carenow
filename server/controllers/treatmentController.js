const { treatmentModel } = require('../models/treatmentModel');

const treatmentController = async (req, res) => {
  try {
    const { patientName, patientId, date, treatmentDescription, medicationPrescribed, cost } = req.body;
    const newTreatment = await treatmentModel({
      patientName,
      patientId,
      date,
      treatmentDescription,
      medicationPrescribed,
      cost
    });
    res.status(201).json({ success: true, data: newTreatment });
  } catch (e) {
    console.log
  }
};
module.exports = {
  treatmentController
}