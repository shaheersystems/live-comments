import CommentBox from "./comment-box";
type CommentType = {
  id: number;
  comment: string;
  created_at: string;
  author: {
    id: number;
    name: string;
    avatar: string;
  };
};
type CommentListProps = {
  comments: CommentType[];
};
const CommentList = ({ comments }: CommentListProps) => {
  return (
    <div className="space-y-4">
      <div className="">
        <h2 className="text-lg font-semibold">Comments ({comments.length})</h2>
      </div>
      {comments.map((comment) => (
        <CommentBox key={comment.id} data={comment} />
      ))}
    </div>
  );
};

export default CommentList;
