// import the express module
const express = require('express');
// call the Router method from express to create the router
const router = express.Router();
// import the login controller
const loginController = require('../controllers/login.controller');
// create a route to handle the login process on post
router.post('/api/employee/login', loginController.login);
// Export the router
module.exports = router;