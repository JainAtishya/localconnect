const express = require("express");
const fs = require("fs");

const router = express.Router();

const filePath = "./users.json";

router.post("/signup", (req, res) => {

  const { name, email, password } = req.body;

  const users = JSON.parse(fs.readFileSync(filePath));

  users.push({ name, email, password });

  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

  res.json({ message: "User registered successfully" });

});

router.post("/login", (req, res) => {

  const { email, password } = req.body;

  const users = JSON.parse(fs.readFileSync(filePath));

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    res.json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }

});

module.exports = router;