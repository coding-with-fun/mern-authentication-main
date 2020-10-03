const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) {
      return res.status(401).json({
        message: "No authentication token. Access denied.",
        status: false,
      });
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);

    if (!verified) {
      return res.status(401).json({
        message: "Unauthorized access. Access denied.",
        status: false,
      });
    }

    req.user = verified.id;
    next();
  } catch (err) {
    console.error(`${err.message}`.red);
    res.status(500).json({
      message: "Something went wrong!",
      error: err.message,
      status: false,
    });
  }
};

module.exports = auth;
