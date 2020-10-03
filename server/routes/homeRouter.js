const router = require("express").Router();

/**
 * @route       GET /
 * @description Home Page
 * @access      Public
 */
router.get("/", (req, res) => {
  res.json({
    message: "Hello user...",
  });
});

module.exports = router;
