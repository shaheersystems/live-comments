import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const AddComment = () => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Comment</Label>
        <Textarea className="h-36" placeholder="Add a comment..." />
      </div>
      <div className="flex items-center justify-end">
        <Button size={"icon"}>
          <ArrowUp size={"18"} />
        </Button>
      </div>
    </div>
  );
};

export default AddComment;
