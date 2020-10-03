const router = require("express").Router();
const colors = require("colors");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

/**
 * @route       POST user/signup
 * @description Sign Up
 * @access      Public
 */
router.post("/signup", async (req, res) => {
  try {
    const { displayName, email, password, confirmpass } = req.body;

    // Validate
    if (!email) {
      return res.status(400).json({ message: "Please enter email address." });
    } else {
      if (!displayName) {
        return res
          .status(400)
          .json({ message: "Please enter display name of user." });
      } else {
        if (!password || !confirmpass) {
          return res.status(400).json({ message: "Please enter password." });
        } else {
          if (password !== confirmpass) {
            return res
              .status(400)
              .json({ message: "Please match the password." });
          } else {
            if (password.length < 5 || confirmpass.length < 5) {
              return res.status(400).json({
                message: "Password needs to be at least 5 characters long.",
              });
            } else {
              const existingUser = await User.findOne({
                email: email,
              });

              if (existingUser) {
                return res.status(400).json({
                  message: "Account with this email address already exists.",
                });
              } else {
                const salt = await bcrypt.genSalt(15);
                const hashPass = await bcrypt.hash(password, salt);

                const newUser = new User({
                  displayName: displayName,
                  email: email,
                  password: hashPass,
                });

                const savedUser = await newUser.save();

                return res.json(savedUser);
              }
            }
          }
        }
      }
    }
  } catch (err) {
    console.error(`${err.message}`.red);
    res.status(500).json({
      message: "Something went wrong!",
      error: err.message,
    });
  }
});

module.exports = router;
