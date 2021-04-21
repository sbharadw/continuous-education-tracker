const router = require("express").Router();
const usersRoutes = require("./users");
const infoRoutes = require("./info")

// users routes
router.use("/users", usersRoutes);

// info routes
router.use("/Info", infoRoutes);


module.exports = router;