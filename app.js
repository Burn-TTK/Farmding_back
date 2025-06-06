const express = require('express');
const cors = require('cors');
const infoRoutes = require('./routes/info.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/info', infoRoutes);

module.exports = app;