import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import { initServer } from "./config/socket";
import { router as userRouter } from "./routes/user";

dotenv.config();

const app = express();

// initialize the server and socket
const { server, io } = initServer(app);

app.use(cors());
app.use(morgan("dev"));

const port = 3000;

app.get("/", (req, res) => {
  console.log("Appears to be running");
  res.json({ message: "Hello World!" });
});

app.use("/api/auth", userRouter);

server.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port} 🚀`);
});
