// import the express module
const express = require('express');
// call the Router method from express to create the router
const router = express.Router();
// import the employee controller
const employeeController = require('../controllers/employee.controller');
//create a route to handle the employee process on post
router.post('/api/employee', employeeController.createEmployee);
// Export the router
module.exports = router;