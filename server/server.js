const express = require('express');
const cors = require('cors'); 
const app = express();
const treatmentRoutes = require('./routes/treatmentRoutes');

app.use(cors());
app.use(express.json());
app.use('/', treatmentRoutes);
app.listen(5000);