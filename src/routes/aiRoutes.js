const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();
const aiController = require("../controllers/aiController");

router.post("/gethint", authMiddleware, aiController.aihint);

module.exports = router;
