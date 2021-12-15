const express = require("express");
const app = express();
require("./db/dbb");
app.use(express.json());
const cors = require("cors");
app.use(cors());

  const RouteRegion = require("./db/routers/route/RouteRegion ");
  const loginRout = require("./db/routers/route/loginRout");
  const signUp=require("./db/routers/route/signUp");
  const RouteInvestors = require("./db/routers/route/RouteInvestors");
  // const RouteLikeRegion = require("./db/routers/route/RouteLikeRegion");
 app.use(loginRout);
 app.use(signUp);
  app.use(RouteRegion );
   app.use(RouteInvestors);
  //  app.use(RouteLikeRegion);
  ////////////////////////
const Port = 5000;
app.listen(Port, () => {
  console.log("server run on 5000 port");
});
