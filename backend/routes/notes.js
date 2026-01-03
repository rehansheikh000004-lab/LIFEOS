import express from "express";
import Note from "../models/Note.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", auth, async (req, res) => {
  const notes = await Note.find({ userId: req.userId });
  res.json(notes);
});

router.post("/", auth, async (req, res) => {
  const note = await Note.create({ userId: req.userId, text: req.body.text });
  res.json(note);
});

router.delete("/:id", auth, async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

export default router;
