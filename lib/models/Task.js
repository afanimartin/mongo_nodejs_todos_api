const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  content: {
    type: String,
    required: [true, "content can not be empty"],
    trim: true,
    maxlength: [20, "content can not be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false
  },
});

module.exports = mongoose.model("Task", TaskSchema);
