const InvestorsModel = require("../../module/Investors");
const userModel = require("../../module/user");

const getInvestor = async (req, res) => {
  const userId = req.token.userId;
  try {
    const result = await InvestorsModel.find({});
    res.status(200).json(result);
  } catch (error) {
    res.send({ maeesage: error });
  }
  console.log(userId);
};
/////////////////////////////////
const addInvestors = async (req, res) => {
  const { name, email, phoneNumber, price } = req.body;
  const user = req.token.userId;
  const newInvestors = new InvestorsModel({
    name,
    email,
    phoneNumber,
    price,
    user,
  });
  try {
    const addInv = await newInvestors.save();
    res.status(201).json(addInv);
  } catch (error) {
    res.send({ maeesage: "error", error });
  }
};
//////////
const deletInvestors = async (req, res) => {
  const id = req.params.id;
  const user = req.token.userId;
  try {
    const deletone = await InvestorsModel.findByIdAndDelete({
      _id: id,
      user: user,
    });
    res.status(201).json(deletone);
  } catch (error) {
    res.send("error");
  }
};
////////////////////
const userdashbord = async (req, res) => {
  const userId = req.token.userId;
  try {
    const datauser = await InvestorsModel.find({}).select("name price");
    res.status(200).json(datauser);
    console.log(userId);
  } catch (error) {
    res.send("error");
  }
};
//////////////////////////////
const getDamin = async (req, res) => {
  const userId = req.token.userId;
  console.log(userId);
  try {
    const usersAdmin = await userModel.findOne({ _id: userId });
    console.log(usersAdmin);
    res.status(200).json(usersAdmin);
  } catch (error) {
    res.send(error, "rrrrrrrr");
  }
};

/////////////////////////////

const updateInvestors = async (req, res) => {
  const { name } = req.body;
  const { email } = req.body;
  const { phoneNumber } = req.body;
  const { price } = req.body;
  const id = req.params.id;
  try {
    const updetInv = await InvestorsModel.findOneAndUpdate(
      { _id: id },
      {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        price: price,
      },
      { new: true }
    );
    console.log(updetInv);
    res.status(200).json(updetInv);
  } catch (error) {
    res.sen(error);
  }
};

module.exports = {
  getInvestor,
  addInvestors,
  deletInvestors,
  updateInvestors,
  userdashbord,
  getDamin,
};
