const express = require("express");
const RouteLikeRegion = express.Router();

const { AddLike,getLike,deletelike } = require("../controller/LikeRegion");
const {authentication}=require("../midlware/authentication")
RouteLikeRegion.get("/like",authentication, getLike); 
RouteLikeRegion.delete("/unlike/:id",authentication, deletelike );
 RouteLikeRegion.post("/like/:id",authentication, AddLike);

module.exports = RouteLikeRegion;