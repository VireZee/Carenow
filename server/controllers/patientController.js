const pool = require('../db');

const getPatientController = async (req, res) => {
    try {
        const { patientId } = req.params;
        const patientData = await pool.query('SELECT * FROM treatments WHERE patient_id = $1', [patientId]);
        if (patientData.rows.length > 0) {
            res.header("Content-Type", 'application/json');
            res.send(JSON.stringify({ data: patientData.rows }, null, 2));
        } else {
            res.header("Content-Type", 'application/json');
            res.send(JSON.stringify({ data: 'Not found' }, null));
        }
    } catch (error) {
        console.error(error);
    }
};
module.exports = getPatientController;