import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());

app.get("/", async (req, res) => {
  res.send("Hello from Josephine!");
});

const startServer = async () => {
  app.listen(
    8080,
    console.log("Server has started on port http://localhost:8080")
  );
};

startServer();
