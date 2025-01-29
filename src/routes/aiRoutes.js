const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();
const aiController = require("../controllers/aiController");

router.post("/gethint", aiController.aihint);

module.exports = router;
