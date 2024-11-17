import "./App.css";
import AppBar from "./components/app-bar";
import { Separator } from "./components/ui/separator";
import CommentList from "./components/comment-list";
import AddComment from "./components/add-comment";
import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3000");

interface SocketEventType {
  action: string;
  record: any;
  message: string;
}

function App() {
  const [comments, setComments] = useState<any[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch("http://localhost:3000/api/comments/list", {
        method: "GET",
      });

      if (!response.ok) {
        console.log("Error");
      }

      const result = await response.json();

      setComments(result?.data);
    };
    fetchComments().then(() => {
      console.log("fetched");
    });

    socket.on("newComment", (e: SocketEventType) => {
      if (e?.action === "created") {
        setComments((prevComments) => [e?.record, ...prevComments]);
      }
    });

    return () => {
      socket.off("newComment");
    };
  }, []);
  console.log(comments);
  return (
    <div className="dark">
      <AppBar />
      <section className="py-4 space-y-4 max-w-5xl mx-auto">
        <div className="">
          <AddComment />
        </div>
        <Separator />
        <CommentList comments={comments} />
      </section>
    </div>
  );
}

export default App;
