const express = require('express');
const cors = require('cors');
const pool = require('./src/db');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
const personalDetailsRoutes = require('./src/routes/personalDetailsRoutes');
const relatedOfficialsRoutes = require('./src/routes/relatedOfficialsRoutes');


app.use('/personaldetails', personalDetailsRoutes);
app.use('/relatedofficials', relatedOfficialsRoutes);

app.get('/',(req,res) => res.send('API is running'));
const PORT = process.env.PORT || 5000;
console.log(`Postgres connected to ${PORT} successfyully`);
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));