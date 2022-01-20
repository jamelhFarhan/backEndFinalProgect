const express = require("express");
require('dotenv').config()
const app = express();
require("./db/dbb");
app.use(express.json());
const cors = require("cors");
app.use(cors());

  const RouteRegion = require("./routers/route/RouteRegion ");
  const loginRout = require("./routers/route/loginRout");
  const signUp=require("./routers/route/signUp");
  const RouteInvestors = require("./routers/route/RouteInvestors");
   const RouteLikeRegion = require("./routers/route/RouteLikeRegion");

 app.use(loginRout);
 app.use(signUp);
  app.use(RouteRegion );

   app.use(RouteInvestors);
    app.use(RouteLikeRegion);
  ////////////////////////

console.log(process.env.PORT) 
app.listen(process.env.PORT, () => {
  console.log("server runing on 5000 port");
});
