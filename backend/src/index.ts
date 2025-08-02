import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_URL as string)
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log("Error Connecting to Database", err);
  });

const port = 8080;
const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello!" });
});

app.listen(port, () => {
  console.log(`Server Listening on Port : ${port}`);
});
