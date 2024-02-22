const express = require('express');
const app = express();

app.use(express.json());

const treatmentRoutes = require('./routes/treatmentRoutes');
app.use('/submit', treatmentRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});