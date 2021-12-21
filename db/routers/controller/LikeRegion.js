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
  const user = req.token.userId;
  try {
    const newlike = await userModel.findOneAndUpdate(
      { _id: user },
      { $push: { LikeRegion: id } },
    //
    );
    res.status(201).json(newlike);
    console.log(newlike);
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
     
     );
     res.status(201).json(newlike);
   } catch (error) {
     res.send({ massege: "error" });
   }
};

module.exports = { getLike, AddLike, deletelike };
