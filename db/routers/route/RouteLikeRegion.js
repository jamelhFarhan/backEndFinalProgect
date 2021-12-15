const express = require("express");
const RouteLikeRegion = express.Router();

const { AddLike,getLike,remoLike } = require("../controller/LikeRegion");
const {authentication}=require("../midlware/authentication")
RouteLikeRegion.get("/like",authentication, getLike); 
RouteLikeRegion.delete("/unlike/:id",authentication, remoLike);
 RouteLikeRegion.post("/like/:id",authentication, AddLike);

module.exports = RouteLikeRegion;