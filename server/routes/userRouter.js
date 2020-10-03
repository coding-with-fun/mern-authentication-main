const router = require("express").Router();
const colors = require("colors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
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
      return res
        .status(400)
        .json({ message: "Please enter email address.", status: false });
    } else {
      if (!displayName) {
        return res.status(400).json({
          message: "Please enter display name of user.",
          status: false,
        });
      } else {
        if (!password || !confirmpass) {
          return res
            .status(400)
            .json({ message: "Please enter password.", status: false });
        } else {
          if (password !== confirmpass) {
            return res
              .status(400)
              .json({ message: "Please match the password.", status: false });
          } else {
            if (password.length < 5 || confirmpass.length < 5) {
              return res.status(400).json({
                message: "Password needs to be at least 5 characters long.",
                status: false,
              });
            } else {
              const existingUser = await User.findOne({
                email: email,
              });

              if (existingUser) {
                return res.status(400).json({
                  message: "Account with this email address already exists.",
                  status: false,
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

                console.info("New user created...".yellow);
                return res.json({
                  body: savedUser,
                  status: true,
                  message: "New user created...",
                });
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
      status: false,
    });
  }
});

/**
 * @route       POST user/signin
 * @description Sign In
 * @access      Public
 */
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate
    if (!email) {
      return res
        .status(400)
        .json({ message: "Please enter email address.", status: false });
    } else {
      if (!password) {
        return res
          .status(400)
          .json({ message: "Please enter password.", status: false });
      } else {
        if (password.length < 5) {
          return res.status(400).json({
            message: "Password needs to be at least 5 characters long.",
            status: false,
          });
        } else {
          const user = await User.findOne({
            email: email,
          });

          if (!user) {
            return res.status(400).json({
              message: "Account with this email address does not exist.",
              status: false,
            });
          }

          const isMatch = await bcrypt.compare(password, user.password);

          if (!isMatch) {
            return res.status(400).json({
              message: "Invalid credentials.",
              status: false,
            });
          }

          const token = jwt.sign(
            {
              id: user._id,
            },
            process.env.JWT_SECRET
          );

          return res.json({
            token: token,
            body: {
              id: user._id,
              displayName: user.displayName,
              email: user.email,
            },
            status: true,
            message: "Logged in successfully...",
          });
        }
      }
    }
  } catch (err) {
    console.error(`${err.message}`.red);
    res.status(500).json({
      message: "Something went wrong!",
      error: err.message,
      status: false,
    });
  }
});

module.exports = router;
