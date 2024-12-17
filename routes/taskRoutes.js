const express = require("express");
const router = express.Router();
const {
  getTasks,
  getTaskById,
  searchTasksByName,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

router.get("/get", getTasks);

router.get("/get/:id", getTaskById);

router.get("/search", searchTasksByName);

router.post("/create", createTask);

router.put("/update/:id", updateTask);

router.delete("/delete/:id", deleteTask);

module.exports = router;
