import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { FormEvent, useState } from "react";

const AddComment = () => {
  const [content, setContent] = useState<string>("");
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!content) {
      console.log("fill all the fields");
      return;
    }
    try {
      const postComment = async () => {
        const res = await fetch("http://localhost:3000/api/comments/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content,
          }),
        });
        const result = await res.json();
      };
      await postComment();
      setContent("");
    } catch (error) {
      console.log("Some error occurred");
    }
  };
  return (
    <div className="space-y-4">
      <form onSubmit={(e: FormEvent) => handleSubmit(e)} className="space-y-4">
        <div className="space-y-2">
          <Label>Comment</Label>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="h-36"
            placeholder="Add a comment..."
          />
        </div>
        <div className="flex items-center justify-end">
          <Button type="submit" size={"icon"}>
            <ArrowUp size={"18"} />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddComment;
