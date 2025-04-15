import express, { json } from "express";
import cors from "cors";
import pkg from "body-parser";

const { json } = pkg;

require("dotenv").config();

const app = express();
app.use(cors());
app.use(json());

import notesRoutes from "./routes/notes";
app.use("/api/notes", notesRoutes);

// Optional centralized error handler
import errorHandler from "./middleware/errorHandler";
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
