import "./App.css";
import AppBar from "./components/app-bar";
import { Separator } from "./components/ui/separator";
import CommentList from "./components/comment-list";
import AddComment from "./components/add-comment";

function App() {
  const comments = [
    {
      id: 1,
      author: {
        id: 1,
        name: "Adam Wathan",
        avatar: "https://api.dicebear.com/9.x/glass/svg",
      },
      comment: `Rapidly build modern websites without ever leaving your HTML.
      A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.`,
      created_at: "2021-09-01T12:00:00Z",
    },
  ];
  return (
    <div className="">
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
