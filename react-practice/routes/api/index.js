const router = require("express").Router();
const itemRoutes = require("./items");
const UserRoutes = require("./users");

// Book routes
router.use("/items", itemRoutes);
router.use("/users", UserRoutes);

module.exports = router;