const express = require("express");
const router = express.Router();

const tasks = require("../controllers/task");
const checkJWTToken = require("../auth/auth")

router.route("/", checkJWTToken).get(tasks.get).post(tasks.post);
router
  .route("/:id")
  .get(tasks.getTask)
  .patch(tasks.update)
  .delete(tasks.delete);

module.exports = router;
