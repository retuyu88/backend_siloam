const express = require("express");

const bodyParser = require("body-parser");
require('express-group-routes');
const cors = require("cors");

const app = express();

var corsOption = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOption));

//parse request of content-type - application/json
app.use(bodyParser.json());
//pars request of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))

const db = require("./app/models")
db.sequelize.sync()
//route

const form = require('./app/controllers/form.controller');

 
app.group("/api/v1", (router) => {
  
    router.get('/formdata', form.findAll) // get all form data

})
//set port, listen for request
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})