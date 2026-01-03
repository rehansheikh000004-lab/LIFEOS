import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  userId: String,
  text: String,
  done: { type: Boolean, default: false }
});

export default mongoose.models.Task || mongoose.model("Task", taskSchema);
