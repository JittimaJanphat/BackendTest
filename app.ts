// import cors from "cors";
const express1 = require('express');
const userRoute = require('./router/user');
const app = express1();
// app.use(cors());

app.use('/',userRoute);

const port = 3001;

app.listen(3001, () => console.log("Server is running..."));
