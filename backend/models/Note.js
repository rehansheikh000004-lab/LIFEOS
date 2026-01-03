import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  userId: String,
  text: String
});

export default mongoose.models.Note || mongoose.model("Note", noteSchema);
