const express = require('express');
const cors = require('cors');
// const { companiesRoutes } = require('./routes');

const app = express();

app.use(cors({
    origin: '*'
}));

app.use(express.json());
// app.use('/companies', companiesRoutes);

module.exports = app;
