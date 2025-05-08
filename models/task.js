const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type:String,
    required: [true, "name is required"],
    trim: true,
    maxLength: [20, "name shouldn't be bigger than 20 characters"],
  },
  completed: {
    type:Boolean,
    required: true,
  },
});
module.exports = mongoose.model("newtasks", TaskSchema);
