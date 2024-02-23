const pool = require('../db');

const getDataController = async (req, res) => {
    try {
        const allData = await pool.query('SELECT * FROM treatments');
        const total = allData.rows.length;
        res.header("Content-Type", 'application/json');
        res.send(JSON.stringify({ total: total, data: allData.rows }, null, 2));
    } catch (error) {
        console.error(error);
    }
};
module.exports = getDataController;