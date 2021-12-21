 const express = require("express");
 const  RouteRegion= express.Router();
 
 
const { addRegion,getRegion, deletRegion ,updateRegion,getUsers } = require("../controller/Region");  
const { authentication } = require("../midlware/authentication");
  RouteRegion.post("/addRegion", authentication, addRegion);
 RouteRegion.get("/getRegions", authentication, getRegion);
RouteRegion.delete("/deletRegion/:id",authentication,deletRegion)
RouteRegion.put("/updateRegion/:id", authentication, updateRegion);
RouteRegion.get ("/getUser",authentication ,getUsers);
 module.exports =  RouteRegion
