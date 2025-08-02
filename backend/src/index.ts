import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

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
