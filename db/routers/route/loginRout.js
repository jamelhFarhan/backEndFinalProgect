const express =require ("express")
const loginRout= express.Router()
const {login}=require("../controller/login")
loginRout.post("/login",login)


module.exports=loginRout 