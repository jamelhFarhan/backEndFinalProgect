
 const express = require("express");
 const  RouteInvestors= express.Router();


 const { getInvestor,addInvestors,deletInvestors} = require("../controller/Investors");
 const { authentication } = require("../midlware/authentication"); 
 RouteInvestors.get("/getInvestor", authentication, getInvestor);
 RouteInvestors.post("/addInvestors", authentication, addInvestors);
 RouteInvestors.delete("/deletInvestors/:id",authentication,deletInvestors)





 module.exports =  RouteInvestors