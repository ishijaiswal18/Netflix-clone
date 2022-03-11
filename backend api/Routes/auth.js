const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
  console.log("HEYYYYYY");
  console.log(req.body);
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
  });
  console.log(newUser);
  try {
    const user = await newUser.save();
    console.log("user");
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }
        const decrypt = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY).toString(CryptoJS.enc.Utf8);
        if (decrypt !== req.body.password) {
            return res.status(401).json({ message: "Incorrect password" });
        }
        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin },
             process.env.SECRET_KEY,
             { expiresIn: "5d" });

        const {password, ...info} = user._doc;
        res.status(200).json({...info, token }); 
        console.log(req.headers);
    } catch (err) {
        res.status(500).json(err);
    }
});

// LOGOUT

module.exports = router;
