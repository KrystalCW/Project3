const router = require("express").Router();
const itemRoutes = require("./items");
const userRoutes = require("./users");

// Book routes
router.use("/items", itemRoutes);
router.use("/users", userRoutes);

module.exports = router;