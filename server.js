// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express"); 
const bodyParser = require("body-parser");
const Cors = require("cors");
const port = 3000;//http://localhost:3000

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(Cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
app.listen(port,()=>{
    console.log("my server running in port: " + port);
});

// GET route setup response send projectData
app.get('/getprojectData', (req, res) => {
    res.send(projectData);
});

// POST route setup 
app.post('/saveprojectData', (req, res) =>{
    projectData = {... req.body};
    res.end();
});