import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import { router as userRouter } from "./routes/user";
import { router as commentRouter } from "./routes/comment";
import { Server } from "socket.io";
import http from "http";

dotenv.config();

const app = express();

app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // Update this to match your frontend origin
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("A user is connected");
  socket.on("disconnect", () => {
    console.log("A user disconnected.");
  });
});
// initialize the server and socket
// const { server, io } = initServer(app);

app.use(cors());
app.use(morgan("dev"));

const port = 3000;

app.get("/", (req, res) => {
  console.log("Appears to be running");
  res.json({ message: "Hello World!" });
});

app.use("/api/auth", userRouter);
app.use("/api/comments", commentRouter);

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port} 🚀`);
});

export { io };
