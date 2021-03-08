const express = require("express");
const connectDB = require("./config/connectDB");
const UserRouter= require('./routes/UserRouter');

const app = express();
app.use(express.json());
app.use('/api',UserRouter);

const User = require("./models/User");
require("dotenv").config({ path: "./config/.env" });
connectDB();
// app.get("/api/users", (req, res) => {
//   User.find()
//     .then((users) => res.send(users))
//     .catch((err) => res.send.status(404).json({ msg: "users not found" }));
// });
// app.get("/api/users/:id", (req, res) => {
//   const userID = req.params.id;
//   User.findById(userID)
//     .then((users) => res.send(users))
//     .catch((err) => res.send(err));
// });
// app.post("/api/add_user", (req, res) => {
//   const { lastname, firstname, email } = req.body;
//   const newUser = new User({ lastname, firstname, email });
//   newUser
//     .save()
//     .then((newUser) => res.send(newUser))
//     .catch((err) => res.send(err));
// });
// app.put("/api/users/:id", (req, res) => {
//   const userID = req.params.id;
//   User.findByIdAndUpdate(userID, { ...req.body }, { new: true })
//     .then((userModified) => res.send(userModified))
//     .catch((err) => res.send(err));
// });
// app.delete("/api/users/:id", (req, res) => {
//   const userID = req.params.id;
//   User.findByIdAndDelete(userID)
//     .then((userRemoved) => res.send(userRemoved))
//     .catch((err) => res.send(err));
// });

const PORT = process.env.PORT;
app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(" is running ....");
});
