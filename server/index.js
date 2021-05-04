const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");
const tableBook = require("./routes/tableBook");
const itemMenu = require("./routes/itemMenu");
const auth = require("./routes/auth");
const app = express();
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

mongoose
  .connect(process.env.MONGODB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () => {
  console.log(`Server running at ${process.env.PORT}`);
});

//router middleware
app.use("/", tableBook);
app.use("/", itemMenu);
app.use("/", auth);
