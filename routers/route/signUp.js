const express =require ("express")
const signUp= express.Router()
const {SignUp}=require("../controller/signUp")
signUp.post("/signUp",SignUp)



module.exports= signUp