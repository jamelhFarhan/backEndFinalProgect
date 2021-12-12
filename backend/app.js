// importing
import express from 'express'
import mongoose from 'mongoose'
import Messages from './dbmessages.js'

import cors from 'cors'

// app config
const app = express();
const port = process.env.PORT || 9000;







app.listen(port, ()=> console.log(`listening on localhost: ${port}`));