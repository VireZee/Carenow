const pool = require('../db');

const treatmentModel = async (data) => {
  const { patientName, patientId, date, treatmentDescription, medicationPrescribed, cost } = data;
  const existingPatient = await pool.query('SELECT * FROM treatments WHERE patient_id = $1 OR patient_name = $2', [patientId, patientName]);
  if (existingPatient.rows.length > 0) {
    throw new Error('Patient ID or name already exists');
  }
  const query = `
    INSERT INTO treatments
    (patient_name, patient_id, date_of_treatment, treatment_description, medications_prescribed, cost)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;
  const values = [patientName, patientId, date, [treatmentDescription], [medicationPrescribed], cost];
  const result = await pool.query(query, values);
  return result.rows[0];
};
module.exports = treatmentModel;