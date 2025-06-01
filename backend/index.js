require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const userRouter = require('./router/userRouter.js');
const adminRouter = require('./router/adminRouter.js');

app.use(express.json());
app.use(cors());
app.use('/user',userRouter);
app.use('/admin',adminRouter);

app.listen(port,()=>console.log(`Running port : ${port}`))