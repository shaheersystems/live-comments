import { ThumbsDown, ThumbsUp } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

type CommentType = {
  author: {
    id: string;
    name: string;
  };
  text: string;
  createdAt: string;
};

type CommentBoxProps = {
  data: CommentType;
};

const CommentBox = ({ data }: CommentBoxProps) => {
  return (
    <Card className="p-4">
      <div>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage
              src="https://api.dicebear.com/9.x/glass/svg"
              alt={data.author.name}
            />
          </Avatar>
          <h4 className="font-semibold">{data.author.name}</h4>
        </div>
        <div className="py-4">
          <p className="text-gray-300 text-sm">{data.text}</p>
        </div>
        <div className="flex justify-between">
          <div>
            <time className="text-gray-300 text-xs">
              Create At: {new Date(data.createdAt).toDateString()}
            </time>
          </div>
          <div className="flex items-center gap-2">
            <Button size={"icon"} variant={"ghost"}>
              <ThumbsUp size={16} />
            </Button>
            <Button size={"icon"} variant={"ghost"}>
              <ThumbsDown size={16} />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CommentBox;
