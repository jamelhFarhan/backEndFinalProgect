
 const express = require("express");
 const  RouteInvestors= express.Router();


 const { getInvestor,addInvestors,deletInvestors,updateInvestors ,userdashbord,getDamin} = require("../controller/Investors");
 const { authentication } = require("../midlware/authentication"); 
 RouteInvestors.get("/getInvestor", authentication, getInvestor);
 RouteInvestors.post("/addInvestors", authentication, addInvestors);
 RouteInvestors.delete("/deletInvestors/:id",authentication,deletInvestors);
 RouteInvestors.put("/updateInvestors/:id",authentication,updateInvestors);
 RouteInvestors.get ("/userdashbord",authentication,userdashbord)
 RouteInvestors.get ("/getDamin",authentication ,getDamin);





 module.exports =  RouteInvestors