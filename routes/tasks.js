const express = require("express");
const router = express.Router();

const {getAllTasks,CreateTask,UpdateTask,DeleteTask,getTask} = require("../controllers/tasks");
router.route("/").get(getAllTasks).post(CreateTask)
router.route('/:id').get(getTask).patch(UpdateTask).delete(DeleteTask);
module.exports = router;
