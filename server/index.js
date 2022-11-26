const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");

// INIT
const PORT = 3000;
const app = express();
const DB = `mongodb+srv://smuhamed:19211921@cluster0.9r6ezy6.mongodb.net/?retryWrites=true&w=majority`;

// middleware
app.use(express.json());
app.use(authRouter);

// Conections
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connections Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at port ${PORT}`);
});
