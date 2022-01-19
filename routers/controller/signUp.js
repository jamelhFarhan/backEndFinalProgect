const user = require("../../db/module/user");
const bcrypt = require("bcrypt");

const SignUp = async (req, res) => {
  let { name, email, password ,Identity} = req.body;
  try {
     if (!name ||!email || !password||!Identity){
     res.status(400).json({msg:" pleass fill in fill fields"})
     return
     }

  if(password.length  < 6 ){
res.status(400).json({msg:" password must be at least 6 characters"})
return
  }
  if(name.length <3){
res.status(400).json({msg:" name must be at least 3 characters"})
return
  }
  if (Identity.length <4){
    res.status(400).json({msg:" Identity must be at < 10"})
    return
  }
    password = await bcrypt.hash(password, 10);
    const newUser =  new user({
      name,
      email,
      password,
      Identity,
      LikeRegion: [],
      Admin: false,
    });
    const respons = await newUser.save();
    res.status(201).json(respons);
  } catch (error) {
    res.send(error);
    console.log(error);
  }
};

module.exports = { SignUp };
