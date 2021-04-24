const router = require("express").Router();
const userController = require("../../Controllers/userController");
//const { checkJwt, checkPermission } = require("../../authz/check-jwt");
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

module.exports = router;