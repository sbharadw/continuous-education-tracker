const router = require("express").Router();
const userController = require("../../Controllers/userController");

// Matches with "/api/users"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);
  
// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

// Matches with "/api/users/unit/:id"
router
  .route("/unit/:id")
  .get(userController.findByUnit)

router
  .route("/eid/:id")
  .put(userController.findByEmployeeId)
module.exports = router;
