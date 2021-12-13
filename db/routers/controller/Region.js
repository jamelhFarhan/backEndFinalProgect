 const req = require("express/lib/request");
const RegionModel = require("../../module/Region");

 const getRegion = async (req, res) => {
   const userId = req.token.userId
   try {
     const Region= await RegionModel.find({});
     res.status(200).json(Region);
   } catch (error) {
    res.send(error );
   }
 };

 const addRegion = async (req, res) => {
   const { name, description, img } = req.body;
    const user = req.token.userId;
    const newRegion = new RegionModel({ name, description, img, user });
   try {
    const addRegion = await newRegion.save();
     res.status(201).json(addRegion );
   } catch (error) {
     res.send(error);
   }
 };

const deletRegion = async (req,res)=>{
  console.log("im here");
  const id = req.params.id;
  const user = req.token.userId;
  console.log(user);
  try {
    const delet = await RegionModel.findByIdAndDelete({ _id:id ,user :user});
    res.status(201).json (delet)
  } catch (error) {
   res.send("error") 
  }
};

 module.exports = { getRegion, addRegion, deletRegion };
