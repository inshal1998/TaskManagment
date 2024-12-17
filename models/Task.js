const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  priority: { type: String, enum: ["Low", "Medium", "High"], required: true },
  status: { type: String, enum: ["Pending", "In Progress", "Completed"], required: true },
  dueDate: { type: Date, required: true },
});

module.exports = mongoose.model("Task", taskSchema);
