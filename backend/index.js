const express = require("express");
const cors = require("cors");
const dotenv=require('dotenv');
dotenv.config();

const app = express();
const authRouter=require('./routes/user');

// var corsOptions = {
//   origin: "http://localhost:8081"
// };

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true })); 

app.get("/", (req, res) => {
  res.json("Lets roll");
});
app.use('/',authRouter);

// app.use("/", authRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
