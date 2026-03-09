const express = require("express");
const fs = require("fs");

const router = express.Router();

const filePath = "./users.json";


router.post("/signup", (req, res) => {

  const { name, email, password } = req.body;

  console.log("Signup request received:", req.body);

  const users = JSON.parse(fs.readFileSync(filePath));

  const existingUser = users.find(user => user.email === email);

  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const newUser = { name, email, password };

  users.push(newUser);

  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

  res.json({ message: "User registered successfully" });

});



router.post("/login", (req, res) => {

  const { email, password } = req.body;

  console.log("Login request received:", req.body);

  const users = JSON.parse(fs.readFileSync(filePath));

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {

    res.json({
      message: "Login successful",
      user: {
        name: user.name,
        email: user.email
      }
    });

  } else {

    res.status(401).json({
      message: "Invalid credentials"
    });

  }

});

module.exports = router;