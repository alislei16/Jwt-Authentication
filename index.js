require("dotenv").config();
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json);
require("dotenv").config();
const posts = [
  {
    username: "ali",
    title: "post 1",
  },
  {
    username: "hsein",
    title: "post 2",
  },
];

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.post("/login", (req, res) => {
  //autheticate user

  const username = req.body.username;
  const user = { name: username };

  jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);

  res.json({ accessToken: accessToken });
});

app.listen(3000);
