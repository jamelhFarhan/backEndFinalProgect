const req = require("express/lib/request");
const res = require("express/lib/response");
const RegionModel = require("../../db/module/Region");
const userModel = require("../../db/module/user");
/////////////////
const getRegion = async (req, res) => {
  const userId = req.token.userId;
  console.log(req);
  try {
    const Region = await RegionModel.find({});
    console.log(userId);
    res.status(200).json(Region);
  } catch (error) {
    res.send(error);
  }
};
//////////////////////
const getUsers = async (req, res) => {
  const userId = req.token.userId;
  console.log(userId);
  try {
    const users = await userModel.findOne({ _id: userId });
    console.log(users);
    res.status(200).json(users);
  } catch (error) {
    res.send(error);
  }
};

//////////////////////

const addRegion = async (req, res) => {
  const { name, description, img } = req.body;
  const user = req.token.userId;
  const newRegion = new RegionModel({ name, description, img });
  try {
    const addNwRegion = await newRegion.save();
    //  const Region = await RegionModel.find({});

    res.status(201).json(addNwRegion);
  } catch (error) {
    res.send(error);
  }
};

const deletRegion = async (req, res) => {
  console.log("im here");
  const id = req.params.id;
  const user = req.token.userId;
  console.log(user);
  try {
    const delet = await RegionModel.findByIdAndDelete({ _id: id, user: user });
    res.status(201).json(delet);
  } catch (error) {
    res.send("error");
  }
};

const updateRegion = async (req, res) => {
  const { name } = req.body;
  const { description } = req.body;
  const { img } = req.body;
  const id = req.params.id;
  try {
    const updatePost = await RegionModel.findOneAndUpdate(
      { _id: id },
      {
        name: name,
        description: description,
        img: img,
      },
      { new: true }
    );
 
    res.status(201).json(updatePost);
  } catch (error) {
    res.send({ message: error });
  }
};

module.exports = { getRegion, addRegion, deletRegion, updateRegion, getUsers };
