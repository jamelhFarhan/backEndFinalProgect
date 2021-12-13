const express = require("express");
const app = express();
require("./db/dbb");
app.use(express.json());
const cors = require("cors");
app.use(cors());

  const RouteRegion = require("./db/routers/route/RouteRegion ");
  const loginRout = require("./db/routers/route/loginRout");
  const signUp=require("./db/routers/route/signUp");


 app.use(loginRout);
 app.use(signUp);
  app.use(RouteRegion );

  ////////////////////////
const Port = 5000;
app.listen(Port, () => {
  console.log("server run on 5000 port");
});
