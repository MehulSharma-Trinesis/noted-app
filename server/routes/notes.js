import { Router } from "express";
const router = Router();
import {
  getNotes,
  createNote,
  deleteNote,
  updateNote,
} from "../controllers/noteController";

router.get("/", getNotes);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
