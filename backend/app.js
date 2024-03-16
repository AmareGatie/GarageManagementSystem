// import the express module
const express = require('express');
// Import the dotenv module and call the config method to load the environment variables
require('dotenv').config();
// Create avaraible to hold our port number
const port = process.env.PORT || 5000;
// import the router from the index.js file
const router = require('./routes/index.js');
// create an express app
const app = express();
// import the cors module
const cors = require('cors');

// Use the cors module to allow cross origin requests
app.use(cors());

// add the router to the app
app.use(router);
// Start the web server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// Export the web server for use in the application
module.exports = app;

 
