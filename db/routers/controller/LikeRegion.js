const userModel = require("../../module/user");

const getLike = async (req, res) => {
  const user = req.token.userId;

  try {
    
  } catch (error) {
    res.send(error);
  }
};
module.exports = {getLike  };