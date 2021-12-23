
 const express = require("express");
 const  RouteInvestors= express.Router();


 const { getInvestor,addInvestors,deletInvestors,updateInvestors} = require("../controller/Investors");
 const { authentication } = require("../midlware/authentication"); 
 RouteInvestors.get("/getInvestor", authentication, getInvestor);
 RouteInvestors.post("/addInvestors", authentication, addInvestors);
 RouteInvestors.delete("/deletInvestors/:id",authentication,deletInvestors);
 RouteInvestors.put("/updateInvestors/:id",authentication,updateInvestors);





 module.exports =  RouteInvestors