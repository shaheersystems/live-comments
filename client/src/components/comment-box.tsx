import { ThumbsDown, ThumbsUp } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

type CommentType = {
  author: {
    name: string;
    avatar: string;
  };
  comment: string;
  created_at: string;
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
            <AvatarImage src={data.author.avatar} alt={data.author.name} />
          </Avatar>
          <h4 className="font-semibold">{data.author.name}</h4>
        </div>
        <div className="py-4">
          <p className="text-gray-300 text-sm">{data.comment}</p>
        </div>
        <div className="flex justify-between">
          <div>
            <time className="text-gray-300 text-xs">
              Create At: {new Date(data.created_at).toDateString()}
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
