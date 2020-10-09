const router = require("express").Router();
const homepageController = require("../controllers/HomepageController");
const tasksController = require("../controllers/TasksController");

router.get("/", homepageController.index);

router.post("/tasks", tasksController.store);

router.get("/tasks/:id", tasksController.get);
router.put("/tasks/:id", tasksController.done);
router.delete("/tasks/:id", tasksController.delete);

module.exports = router;
