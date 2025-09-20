const express = require('express');
const cors = require('cors');
const pool = require('./src/db');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
const personalDetailsRoutes = require('./src/routes/personalDetailsRoutes');
const relatedOfficialsRoutes = require('./src/routes/relatedOfficialsRoutes');
const bankDetailsRoutes = require('./src/routes/bankDetailsRoutes');

app.use('/personaldetails', personalDetailsRoutes);
app.use('/relatedofficials', relatedOfficialsRoutes);
app.use('/bankdetails', bankDetailsRoutes)



app.get('/',(req,res) => res.send('API is running'));
const PORT = process.env.PORT || 5000;
console.log(`Postgres connected to ${PORT} successfully`);
app.listen(PORT, '0.0.0.0', () => console.log(`Server is running on port ${PORT}`));