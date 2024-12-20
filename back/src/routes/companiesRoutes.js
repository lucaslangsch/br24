const route = require('express').Router();
const { companiesController } = require('../controllers');

route.get('/show',  companiesController.showCompanies);
// route.post('/register', companiesController.registerCompany);

module.exports = route;
