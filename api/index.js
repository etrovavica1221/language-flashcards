/* eslint-disable import/newline-after-import */
/* eslint-disable quotes */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-console */
require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 5000;

app.use(cors({ credentials: true, origin: true }));
app.options('*', cors());

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  userUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (err) => console.error(err));
db.once("open", () => console.log("connected to db"));

app.use(express.json());

const userRouter = require("./routes/user");
app.use("/", userRouter);

app.listen(PORT, () => {
  console.log('listening on ${PORT}');
});
