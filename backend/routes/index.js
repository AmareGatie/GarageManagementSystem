// import express module
const express = require('express');
// call the Router method from express to create the router
const router = express.Router();
// import the install router
const installRouter = require('./install.routes');
// import the employee  router
const employeeRouter = require('./employee.routes');
// import thr login router
const loginRouter = require('./login.routes');
// add the install router to the main router
router.use(installRouter);
// add the employee router to the main router
router.use(employeeRouter);
// add the login router to the main router
router.use(loginRouter);
// Export the router
module.exports = router;