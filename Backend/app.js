require('express-async-errors')
const express = require("express");
const morgan = require("morgan");
const cors = require('cors')
const { errorHandler } = require('./middlewares/error');
require('dotenv').config()
require('./db')
const userRouter = require("./routes/user");
const actorRouter = require('./routes/actor')
const movieRouter = require("./routes/movie")
const { handleNotFound } = require('./utils/helper');

const app = express();
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))
app.use("/api/user", userRouter);
app.use("/api/actor",actorRouter)
app.use("/api/movie",movieRouter)
app.use("/*", handleNotFound);
app.use(errorHandler)

// app.post("/sign-in",
//   (req, res, next) => {
//     const { email, password } = req.body
//     if (!email || !password)
//       return res.json({ error: 'email/ password missing!' })
//     next()
//   },
//   (req, res) => {
//     res.send("<h1>Hello I am from your backend about</h1>");
//   });

app.listen(8000, () => {
  console.log("the port is listening on port 8000");
});
