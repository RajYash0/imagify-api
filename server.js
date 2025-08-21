import cors from "cors";
import "dotenv/config";
import express from "express";

import connectDB from "./config/mongodb.js";
import imageRouter from "./routes/imageRoutes.js";
import userRouter from "./routes/userRoutes.js";

const PORT = process.env.PORT || 4000;
const CLIENT_URL =
  process.env.CLIENT_URL || "https://imagify-alpha-three.vercel.app";

const app = express();

// Middleware
app.use(express.json());

// ✅ Fixed CORS configuration
app.use(
  cors({
    origin: CLIENT_URL, // no trailing slash
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// ✅ Connect to MongoDB
await connectDB();

// ✅ API Routes
app.use("/api/user", userRouter);
app.use("/api/image", imageRouter);

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("Imagify API is working ✅");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
