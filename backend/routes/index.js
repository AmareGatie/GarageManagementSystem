// import express module
const express = require('express');
// call the Router method from express to create the router
const router = express.Router();
// import the install router
const installRouter = require('./install.routes');
// add the install router to the main router
router.use(installRouter);
// Export the router
module.exports = router;