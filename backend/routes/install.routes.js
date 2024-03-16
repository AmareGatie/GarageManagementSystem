// import express module    
const express = require('express');
// call the Router method from express to create the router
const router = express.Router();
// import the install controller
const installController = require('../controllers/install.controller');
//create a route to handle the install process on get
router.get('/install', installController.install);
// Export the router
module.exports = router;
