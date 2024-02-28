/*************************************************
 Course: WEB422
 Title: Assignment 1
 Name: Yiwen Hao
 Student ID: 123562191
 Heroku link: https://shopmart-api-web422.herokuapp.com/
 github link: https://github.com/yhao18/Web422Assignment1
***************************************************/

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

if(process.env.NODE_ENV != "production"){
   require('dotenv').config({path: 'config/keys.env'}); 
}


const corsOptionsDelegate = function (req, callback) 
{

  const allowlist = [`http://localhost:3000` /*domain name version*/ , 'http://127.0.0.1:3000' /* ip name equivalent of local host*/,'https://gallant-panini-a14bf4.netlify.app']    //Frontend port number
  let corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

//middleware
app.use(cors(corsOptionsDelegate))


app.use(express.json());

const CustomerController = require("./controllers/CustomerController.js");
const ProductController = require("./controllers/ProductController.js");
app.use("/products", ProductController);
app.use("/customers", CustomerController);




app.listen(process.env.PORT, ()=>{
    console.log(`RESTful API is up and running on PORT ${process.env.PORT}`);

    mongoose.connect(process.env.MONGO_DB_STRING)
    .then(()=>{
        console.log(`Connected to MongoDB`)
    })
    .catch(err=>{
        console.log(`Error: ${err}`)
    })
})