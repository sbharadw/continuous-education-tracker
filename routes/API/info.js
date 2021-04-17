const router = require("express").Router();
const infoController = require("../../Controllers/infoController");

// Matches with "/api/user"
router.route("/")
  .get(infoController.findAll)
  .post(infoController.create);

// Matches with "/api/info/:id"
router
  .route("/:id")
  .get(infoController.findById)
  .put(infoController.update)
  .delete(infoController.remove);

module.exports = router;