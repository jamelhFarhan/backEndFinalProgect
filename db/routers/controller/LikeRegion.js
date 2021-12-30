const { populate } = require("../../module/user");
const userModel = require("../../module/user");

const getLike = async (req, res) => {
  const user = req.token.userId;

  try {
    const likeregin = await userModel
      .findOne({ _id: user })
      .populate("LikeRegion");
    console.log(likeregin, "LikeRegion");
    res.status(200).json(likeregin.LikeRegion);
  } catch (error) {
    res.send(error);
  }
};

const AddLike = async (req, res) => {
  const id = req.params.id;
  const userId = req.token.userId;
  try {
    const user =  await userModel.findOne({_id:userId}).populate("LikeRegion");
    const likeChick =user.LikeRegion.filter((element)=>{
      return element._id == id;
    });
    if (likeChick.length){
      const  newLikee= await userModel.findOneAndUpdate(
        { _id: userId },
        { $pull: { LikeRegion: id } },
      {new:true} 
      ).populate("LikeRegion");
      res.status(201).json(newLikee);
    }else{
    const newLikee= await userModel.findOneAndUpdate(
      { _id: userId },
      { $push: { LikeRegion: id } },
      {new:true} 
    ).populate("LikeRegion");
    res.status(201).json(newLikee);
    }
  
 
   } catch (error) {
     res.send({ massege: "errror " });
   }
};

const deletelike = async (req, res) => {
   const id = req.params.id;
   const user = req.token.userId;
   try {
     const newlike = await userModel.findOneAndUpdate(
       { _id: user },
       { $pull: { LikeRegion: id } },
       {new:true}
     );
     res.status(201).json(newlike);
   } catch (error) {
     res.send({ massege: "error" });
   }
};

module.exports = { getLike, AddLike, deletelike };
