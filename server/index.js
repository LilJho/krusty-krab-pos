import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";

import register from "./routes/register.js";
import auth from "./routes/auth.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());

app.use("/auth", auth);
app.use("/register", register);
app.use("/orderData", orderRoutes);

app.get("/", async (req, res) => {
  res.send("Hello from Josephine!");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(
      8080,
      console.log("Server has started on port http://localhost:8080")
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
