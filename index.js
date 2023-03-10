//Import from package
const express = require("express");
const mongoose = require("mongoose");
const adminRouter = require("./routes/admin");

//Import from others
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const userRouter = require("./routes/users");

//Initializations
const PORT = 3000;
//initialize expreess and save it in a variable
const app = express();

const DB =
  "mongodb+srv://injamul:sohag123@cluster0.zi5lwqj.mongodb.net/?retryWrites=true&w=majority";

//Midleware
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);

// Connections
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Connected at port ${PORT}`);
});
