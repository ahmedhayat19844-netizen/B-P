import express from "express";
import dotenv from "dotenv";
// import cors from "cors";
import connectDB from "./config/db.connect.js";
import authRoutes from "./routes/authRoutes.js";
import authMiddleware from "./middleware/authMiddleware.js";
import User from "./models/user.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
// app.use(cors());

// auth routes
app.use("/api/auth", authRoutes);

// example protected route
app.get("/api/profile", authMiddleware, (req, res) => {
  res.json({ msg: "Protected Data", user: req.user });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));